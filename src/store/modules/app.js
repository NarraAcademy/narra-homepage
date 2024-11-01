import {defineStore} from "pinia";
import storage from "store";
import {useUserState} from "@/store/modules/user.js";


export const useAppState = defineStore("app", {
    state() {
        return {
            media: storage.get("media", 'pc'), // 'light|dark'
            mediaSizeList:[
                {
                    name:'pc',
                    size:3.93
                },
                {
                    name:'pad',
                    size:10.24
                },
                {
                    name:'mobile',
                    size:3.93
                },
            ],
            mediaSize: storage.get("mediaSize", 14.40),
            musicToggle:false,
            scrollY:0,
            modalOpen:false,
            modalTitle:'',
            modalContent:'',
            modalType:'default',//'default'|'type'
            debugStr:'',
            quizOpen:false,
            isLoaded:false,
            messageOpen:false,
            messageContent:'',
            messageDuration:1500
        };
    },
    actions: {
        setMedia(state){
            storage.set("media", state);
            this.media = state;
            this.mediaSize =this.mediaSizeList.find(i=>i.name === this.media).size ;
            storage.set("mediaSize", this.mediaSize);
        },
        setMusicToggle(state){
            if(typeof state === 'boolean'){
                this.musicToggle=state;
                return
            }
            this.musicToggle = !this.musicToggle;
        },
        openModal(state){
            this.modalOpen = true;
            this.modalTitle = state.title;
            this.modalContent = state.content;
            this.modalType = state.type||'';
        },
        closeModal(state){
            this.modalOpen = false;
            this.modalTitle = '';
            this.modalContent = '';
            this.modalType = '';
        },
        debug(state){
            this.debugStr +='<br>'+state;
        },
        toQuiz(){
            const userState = useUserState()
            if(storage.get('token',userState.token)){
                // appState.debug+=userState.quiz
                window.open(userState.quiz,'_blank')
            }else {
                this.quizOpen = true;
                // let url = 'https://quiz-kbwbmaya.narralayer.ai'//test
                // let url = 'https://quiz.narralayer.ai'
            }
        },
        openMessage(content,time){
            this.messageOpen = true;
            this.messageContent = content;
            setTimeout(()=>{
                this.messageOpen = false;
            },time||this.messageDuration)
        }
    },
});

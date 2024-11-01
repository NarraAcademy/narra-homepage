import {ref} from "vue";
import {useRouter} from "vue-router";
import {useAppState} from "@/store/modules/app.js";

export default ()=>{
    const visible = ref(false)
    const router = useRouter()
    const appState = useAppState()
    const pushChat  =()=>{
        // router.push("chat")
        appState.toQuiz()
    }
    return{
        visible,
        pushChat
    }
}

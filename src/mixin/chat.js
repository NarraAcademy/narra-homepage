import {computed, nextTick, onMounted, onUnmounted, ref, watch} from "vue";
import chatListCard1 from '@/assets/images/chat-list-bg-1.png'
import chatListCard2 from '@/assets/images/chat-list-bg-2.png'
import chatListCard3 from '@/assets/images/chat-list-bg-3.png'
import chatListCard4 from '@/assets/images/chat-list-bg-4.png'
import chatListCard5 from '@/assets/images/chat-list-bg-5.png'
import chatListCard6 from '@/assets/images/chat-list-bg-6.png'
import chatListCardMobile1 from '@/assets/images/chat-list-bg-mobile-1.png'
import chatListCardMobile2 from '@/assets/images/chat-list-bg-mobile-2.png'
import chatListCardMobile3 from '@/assets/images/chat-list-bg-mobile-3.png'
import chatListCardMobile4 from '@/assets/images/chat-list-bg-mobile-4.png'
import chatListCardMobile5 from '@/assets/images/chat-list-bg-mobile-5.png'
import chatListCardMobile6 from '@/assets/images/chat-list-bg-mobile-6.png'
import x1 from '@/assets/images/x-1.svg'
import tg1 from '@/assets/images/tg-1.svg'
import {useUserState} from "@/store/modules/user.js";
import storage from "store";
import {copyToClipboard, message} from "@/utils/utils.js";
import {marked} from "marked";
import {useAppState} from "@/store/modules/app.js";

export default () => {
    const list = ref([
        {
            id: 1,
            name: 'BERA!',
            des: 'Behind his dry wit, booming voice, ooga booga’s, and friggin tall stature, BERA’s really just your homey with the honey.',
            bg: chatListCard1,
            mobileBg: chatListCardMobile1
        },
        {
            id: 2,
            name: 'BTC!',
            des: 'Distant and blunt, but with a heart of gold, BTC leads the other coins selflessly.',
            bg: chatListCard2,
            mobileBg: chatListCardMobile2
        },
        {
            id: 3,
            name: 'ETH!',
            des: 'Quirky genius who lives in her own world and struggles with communicating with fewer syllables, ETH is trying to touch grass more. And cats. Definitely cats.',
            bg: chatListCard3,
            mobileBg: chatListCardMobile3
        },
        {
            id: 4,
            name: 'SOL!',
            des: 'SOL is your very capable and very intelligent tsundere younger sister. Oh yea, she’s also very insecure.',
            bg: chatListCard4,
            mobileBg: chatListCardMobile4
        },
        {
            id: 5,
            name: 'DOGE!',
            des: 'Manipulative, sociopathic megalomaniac but CUTE uwu. DOGE knows she can use her kawaii to get whatever she wants. And she WILL.',
            bg: chatListCard5,
            mobileBg: chatListCardMobile5
        },
        {
            id: 6,
            name: 'PEPE!',
            des: 'Dank hippie. Best troll (self-awarded). Chill and laid back with a chance of thoughtful. y use many word when few word do trick?',
            bg: chatListCard6,
            mobileBg: chatListCardMobile6
        }
    ])
    const shareList = ref([
        x1,
        tg1
    ])
    marked.setOptions({
        gfm: true, // 启用GitHub风格的Markdown
        breaks: true, // 启用换行符处理
        highlight: function (code, lang) {
            const Prism = require('prismjs');
            return Prism.highlight(code, Prism.languages[lang] || Prism.languages['plaintext'], lang);
        },
    });
    // const baseURL = 'https://botapi.cryptoaibank.com/'
    const baseURL = 'https://nabotapi.narralayer.ai/?token='
    const user_say = ref('')
    const userState = useUserState()
    const sessionList = ref([])
    const sessionGroupActive = ref(0)
    const fetchStopVisiable = ref(true)
    const controller = ref(null);
    const cursorId = ref(0)
    const _done = ref(false)
    const addGroupDone = ref(false)
    const appState = useAppState()
    const sendHandle = async () => {
        _done.value = false
        fetchStopVisiable.value = false
        controller.value = new AbortController()
        const signal = controller.value.signal;
        let time = new Date().getTime() + sessionList.value.length
        const params = user_say.value
        user_say.value = ''
        const callBackData = {
            id: time,
            type: 0,
            text: '',
        }
        sessionList.value = sessionList.value.map(i => {
            return {
                ...i,
                chatList: i.groupId === sessionGroupActive.value ? [...i.chatList, callBackData] : i.chatList
            }
        })
        cursorId.value = time
        try {
            const res = await fetch(baseURL + storage.get('token', userState.token), {
                method: 'post',
                body: JSON.stringify({
                    message: params,
                    bot_name: 'ZAI'
                }),
                // body: JSON.stringify(params),
                signal,
                headers: new Headers({
                    'Content-Type': 'application/json'
                })
            })
            const reader = res.body.getReader()
            while (1) {
                const {done, value} = await reader.read()
                if (done) {
                    clearCursorIdHandle()
                    fetchStopVisiable.value = true
                    console.log('done')
                    await nextTick(() => {
                        _done.value = true
                    })
                    break
                }
                const decoder = new TextDecoder()
                const text = decoder.decode(value)
                setText(text, time)
            }
        } catch (e) {
            const text = 'Connection failed, please try again!'
            setText(text, time)
            clearCursorIdHandle()
            fetchStopVisiable.value = true
            console.log('done')
            await nextTick(() => {
                _done.value = true
            })
        }

        // fetch('http://192.168.1.8:10088/chat',{
        //     method: 'post',
        //     body: JSON.stringify({
        //       user_say: 'who is John von Neumann? as detailed as possible'
        //     }),
        //     headers: new Headers({
        //       'Content-Type': 'application/json'
        //     })
        //   }) .then(response => {
        //   // 获取 reader
        //   const reader = response.body.getReader();
        //
        //   // 读取数据
        //   return reader.read().then(function process({ done, value }) {
        //     if (done) {
        //       console.log('Stream finished');
        //       return;
        //     }
        //
        //     // console.log('Received data chunk', value);
        //         const decoder = new TextDecoder()
        //         const text = decoder.decode(value)
        //         // console.log(text)
        //         setText(text)
        //     // 读取下一段数据
        //     return reader.read().then(process);
        //   });
        // })
        //     .catch(console.error);
    }

//设置文本内容
    const setText = (res, time) => {
        console.log(res)
        // console.log(JSON.parse(res))
        // const jsonStrings = res?.split('}')
        // console.log(jsonStrings)
        // const list = []
        // jsonStrings?.forEach(item => {
        //   console.log(item)
        // if (item.trim() !== '') {
        // 加上 '}'，因为 split() 函数会将分隔符从字符串中去掉
        // item += '}';
        // let obj = JSON.parse(item);
        // list.push(obj)
        // }
        // })
        // console.log(list)
        // console.log(res)
        // const data = {
        //   id: time,
        //   text: JSON.parse(res)?.detail||res.replaceAll('\n', '<br/>'),
        //   name: sessionGroupActive.value,
        // }
        let text = ''
        try {
            text = JSON.parse(res).detail
        } catch (err) {
            text = res
        }
        // sessionList.value = sessionList.value?.map(i => {
        //     return {
        //         ...i,
        //         text: (i.id === time) ? i.text + text : i.text,
        //     }
        // })
        sessionList.value = sessionList.value.map(i => {
            return {
                ...i,
                chatList: i.groupId === sessionGroupActive.value ? i.chatList.map(it => ({
                    ...it,
                    text: (it.id === time) ? it.text + text : it.text
                })) : i.chatList
            }
        })
        console.log(sessionList.value)
        storage.set('session' + userState.userInfo.Email, sessionList.value)
        // console.log(sessionList.value)
    }
    const submit = () => {
        // console.log(user_say.value)
        if (!storage.get('token', userState.token)) {
            appState.openModal({
                title: 'Notice',
                content: 'Please log in to chat with ZAI!'
            })
            return
        }
        if (user_say.value) {
            const data = {
                id: new Date().getTime(),
                type: 1,
                text: user_say.value,
            }
            sessionList.value = sessionList.value.map(i => {
                return {
                    ...i,
                    chatList: i.groupId === sessionGroupActive.value ? [...i.chatList, data] : i.chatList
                }
            })
            sendHandle()
        }
    }
    //清空光标
    const clearCursorIdHandle = () => {
        cursorId.value = 0
    }
    const send_ready = (event) => {
        // 是否按下enter键
        if (event.keyCode == 13) {
            if (!event.shiftKey) {
                //只有enter没有shift，或进行你的其他逻辑
                event.preventDefault();// 阻止默认行为，即不换行
                submit()
            } else {
            }
        }
    }
//中断请求
    const fetchStopHandle = () => {
        if (controller.value) {
            controller.value.abort();
            controller.value = null
        }
        fetchStopVisiable.value = true;
        sessionList.value.at(-1).text = sessionList.value?.at(-1)?.text + '(Response stopped!)'
        clearCursorIdHandle()
        nextTick(() => {
            textarea.value.focus()
        })
    }
    const addSessionGroupHandle = () => {
        // console.log(user_say.value)
        if (!storage.get('token', userState.token)) {
            appState.openModal({
                title: 'Notice',
                content: 'Please log in to chat with ZAI!'
            })
            return
        }
        addGroupDone.value = true
        sessionList.value.push({
            groupId: sessionList.value.length, groupName: 'CHAT-' + sessionList.value.length, chatList: [{
                id: new Date().getTime(),
                type: 0,
                text: 'Hello! How can I assist you today?'
            }]
        })
        sessionGroupActive.value = sessionList.value.length - 1
        storage.set('session' + userState.userInfo.Email, sessionList.value)
        addGroupDone.value = false
    }
    const chatList = computed(() => {
        console.log(sessionList.value.find(i => i.groupId === sessionGroupActive.value)?.chatList || [])
        return sessionList.value.find(i => i.groupId === sessionGroupActive.value)?.chatList || []
    })
    const code = computed(() => userState?.userInfo?.Invite_code && window.location.origin + '?ic=' + userState.userInfo.Invite_code)
    const loading = ref(false)
    const timer = ref(null)
    const copyHandle = () => {
        if (code.value) {
            if (!loading.value) {
                copyToClipboard(code.value)
                message.open('Success !')
                console.log(11111)
                loading.value = true
                setTimeout(() => {
                    loading.value = false
                }, 1500)
            }
        }
    }
    const load = ref(false)
    onMounted(() => {
        load.value = false
        // setTimeout(()=>{
        load.value = true
        // },0)
        sessionList.value = storage.get('session' + userState.userInfo.Email) || [
            {
                groupId: 0,
                groupName: 'CHAT-default',
                chatList: [
                    {
                        id: new Date(),
                        type: 0,
                        text: 'Hello! How can I assist you today?'
                    }
                ]
            }
        ]
    })
    onUnmounted(() => {
    })
    watch(()=>userState.userInfo.Email,()=>{
        sessionGroupActive.value = 0
        sessionList.value = storage.get('session' + userState.userInfo.Email) || [
            {
                groupId: 0,
                groupName: 'CHAT-default',
                chatList: [
                    {
                        id: new Date(),
                        type: 0,
                        text: 'Hello! How can I assist you today?'
                    }
                ]
            }
        ]
    })
    return {
        list,
        submit,
        fetchStopVisiable,
        sessionGroupActive,
        user_say,
        sessionList,
        cursorId,
        send_ready,
        fetchStopHandle,
        addSessionGroupHandle,
        chatList,
        _done,
        addGroupDone,
        code,
        copyHandle,
        shareList,
        load,
        marked
    }
}

import {onMounted, ref} from "vue";
import {useAppState} from "@/store/modules/app.js";
import {useUserState} from "@/store/modules/user.js";
import {useRoute} from "vue-router";

export const mascotList = [
    'https://oss.narralayer.ai/images/mascot-1.gif',
    'https://oss.narralayer.ai/images/mascot-2.gif',
    'https://oss.narralayer.ai/images/mascot-3.gif'
]
export default () => {
    const appState = useAppState()
    const swiperTextKey = ref(0);
    const enterCheck = ref(false);
    const count = ref(Math.ceil(Math.random() * 3));
    const timer = ref()
    const route = useRoute()
    const userState = useUserState()
    const setupSwiperTextKey = (isClear) => {
        clearInterval(timer.value)
        timer.value = setInterval(() => {
            if (swiperTextKey.value < 2) {
                swiperTextKey.value++;
            } else {
                swiperTextKey.value = 0
            }
            if (isClear) {
                clearInterval(timer.value)
            }
        }, 1000)
    }
    const code = ref('')
    const enterHandle = () => {
        enterCheck.value = true
        // appState.setMusicToggle(true)
    }
    onMounted(() => {
        setupSwiperTextKey()
    })
    return {mascotList, swiperTextKey, enterCheck, count, enterHandle}
}

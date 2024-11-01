import {computed, ref} from "vue";
import {useUserState} from "@/store/modules/user.js";
import {useAppState} from "@/store/modules/app.js";

export default ()=>{
    const userState = useUserState()
    const appState = useAppState()
    const textVisible =ref(false)
    const cardVisible =ref(false)
    const visible1=ref(false)
    const visible2=ref(false)
    const visible3=ref(false)
    const visible4=ref(false)
    const visible5=ref(false)
    const visible6=ref(false)
    const visible7=ref(false)
    const visible8=ref(false)
    const isCanMint =computed(()=>{
        // return true
        return userState.userInfo.Is_quiz&&!userState.userInfo.Is_mint
    })
    const  mintHandle = ()=>{
        userState.minrNftHandle()
    }
    return {textVisible,cardVisible,visible1,visible2,visible3,visible4,visible5,visible6,visible7,isCanMint,mintHandle,visible8}
}

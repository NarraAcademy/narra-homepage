import {useUserState} from "@/store/modules/user.js";
import router from "@/router/index.js";
import storage from "store";

router.beforeEach(async (to, from, next) => {
    const userState = useUserState()
    const token = storage.get('token',userState.token)
    if(token){
       userState.getUserInfo().catch(()=>{
           userState.logoutHandle()
       })
    }
    next()
})

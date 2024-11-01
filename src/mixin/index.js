import {onMounted, ref, watch} from "vue";
import {useRoute, useRouter} from "vue-router";
import {useUserState} from "@/store/modules/user.js";
import storage from "store";
import {useAppState} from "@/store/modules/app.js";

export default () => {
    const pageNum = ref(0)
    const code = ref('')
    const domainName = window.location.origin
    const route = useRoute()
    const router = useRouter()
    const userState = useUserState()
    const appState = useAppState()
    const endHandle = () => {
        pageNum.value++
        appState.isLoaded = true
    }
    onMounted(()=>{
        console.log('dasdas',appState.isLoaded)
        if(storage.get('token',userState.token)){
            pageNum.value++
            appState.isLoaded = true
        }else if(appState.isLoaded){
            pageNum.value++
            appState.isLoaded = true
        }else if(route.query?.code){
            const data = {
                redirect_uri: domainName,
                google_code: route.query.code,
                Invite_code:storage.get('ic')
            }
            userState.googleLoginHandle(data)
            pageNum.value++
            appState.isLoaded = true
            // window.history.pushState({},'',domainName)
        }else if(route.query?.ic|| storage.get('ic')){
            storage.set('ic',route.query.ic)
            pageNum.value++
            appState.isLoaded = true
        }
    })
    watch(()=>route,()=>{

    },{
        deep: true,
        immediate:true
    })

    return {pageNum, endHandle,domainName}
}

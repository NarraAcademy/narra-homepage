import {useRoute, useRouter} from "vue-router";
import {useAppState} from "@/store/modules/app.js";
import {computed, ref, watch} from "vue";
import logoSvg from "@/assets/images/pc/header/logo.svg";
import addIcon from "@/assets/images/pc/header/add-icon.svg";
import removeIcon from "@/assets/images/pc/header/remove-icon.svg";
import {useUserState} from "@/store/modules/user.js";
import storage from "store";
import {loginWhiteList} from "@/utils/whiteList.js";

export default () => {
    const appState = useAppState()
    const userState = useUserState()
    const route = useRoute()
    const router = useRouter()
    const pushHandle = (route) => {
        // document.querySelector(route).scrollIntoView({
        //     behavior: "smooth",
        //     block: "nearest",
        //     inline: "center",
        // })
        // console.log(document.querySelector(route).offsetTop);
        // window.scrollTo({
        //     top:document.querySelector(route).offsetTop-100,
        //     behavior:'smooth'
        // })
        if (route.startsWith('https://')) {
          window.open(route, '_blank')
          return
        }
        router.push(route)
        menuOpen.value = false
    }

    function onGoToHomePage() {
        // window.scrollTo({
        //     top:0,
        //     behavior:'smooth'
        // })
        router.push('/')
        menuOpen.value =false
    }

    const menuOpen = ref(false);
    const pageLinks = ref([
        // {
        //     name: 'Home',
        //     route: '/home',
        // },
        // {
        //     name: "Our Legacy",
        //     route: "/ourLegacy",
        // },
        // {
        //     name: "Our Legacy",
        //     route: "",
        //     children: [
        //         {
        //             name: "Our Legacy",
        //             route: "#ourLegacy",
        //         },
        // {
        //     name: "Chat",
        //     route: "chat",
        // },
        //     ]
        // },
        {
            name: "MemeAgent",
            route: "https://meme.narralayer.ai"
        },
        {
            name: "Everything Narra",
            route: "vision",
            // id: "#ourVision",
        },
        // {
        //     name: "Team",
        //     route: "#team",
        // },
        // {
        //     name: "News",
        //     id: "#news",
        // },
        // {
        //     name: "Company",
        //     id: "#team",
        // },
        // {
        //     name: "Media Kit",
        //     route: "mediakit",
        // },
    ]);

    const openHandle = (name) => {
        pageLinks.value = pageLinks.value.map(i => {
            if (i.children) {
                return {...i, open: i.name === name ? !i.open : false};
            } else {
                return i
            }
        })
    }
    const openToggle = () => {
        menuOpen.value = !menuOpen.value;
    }
    const clickHandle = (e) => {
        const menu = document.querySelector('.menu')
        if (!menu.contains(e.target)) {
            menuOpen.value = false
        }
    }
    const isLogin = computed(() => {
        return userState.token || storage.get('token')
    })
    const closeMenuHandle = (e)=>{
        const menu = document.querySelector('.menu-content')
        if(e.target === menu){
            menuOpen.value = false
        }
    }
    watch(menuOpen, () => {
        if (appState.media !== 'mobile') {
            if (menuOpen.value) {
                window.addEventListener('touchend', clickHandle)
                window.addEventListener("click", clickHandle, false);
            } else {
                window.removeEventListener('touchend', clickHandle)
                window.removeEventListener("click", clickHandle);
            }
        }
    })
    const permission = (vue) => {
        if (loginWhiteList.includes(route.path) && !isLogin.value) {
            router.back()
        }
    }
    return {
        openToggle,
        openHandle,
        pageLinks,
        menuOpen,
        pushHandle,
        onGoToHomePage,
        appState,
        logoSvg,
        addIcon,
        removeIcon,
        isLogin,
        permission,
        closeMenuHandle
    }
}

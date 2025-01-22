import X from "@/assets/images/pc/footer/x.png";
import TG from "@/assets/images/pc/footer/telegram.png";
import YT from "@/assets/images/pc/footer/youtube.png";
import TT from "@/assets/images/pc/footer/tiktok.png";
import discord from "@/assets/images/pc/footer/discord.png";
import IG from "@/assets/images/pc/footer/instagram.png";
import {computed, ref} from "vue";
import apis from "@/utils/apis.js";
import {emailRegex} from "@/utils/reg.js";
import {useRouter} from "vue-router";

export default ()=>{
    const router = useRouter()
    const shareIcons = [
        {
            icon: X,
            link: "https://x.com/narralayer",
        },
        {
            icon: discord,
            link: "",
          },
        
        
        // {
        //     icon: YT,
        //     link: "https://youtube.com/@narralayer",
        // },
        {
            icon: TT,
            link: "https://tiktok.com/@narralayer",
        },
        {
            icon: TG,
            link: "https://t.me/+aKBbOTDVwFs5YjI1",
        },
        // {
        //     icon: IG,
        //     link: "https://www.instagram.com/narralayer",
        // },
    ];
    const email = ref("");
    const emailSubmiting = ref(false);
    const emailSubmiteShowSucces = ref(false);
    const emailSubmiteShowErrorMessage = ref("");
    const submitDisabled = computed(() => {
        return emailSubmiteShowErrorMessage.value || !email.value;
    })
    const successOpen = ref(false)

    function onGoToShare(link) {
        if (link) {
            window.open(link);
        }
    }

    const pageLinks = [
        [
            {
                name: "Home",
                route: "/",
            },
        ],
        // [
        //     {
        //         name: "Chat",
        //         route: "chat",
        //     },
        // ],
        [
            {
                name: "Everything Narra",
                route: "vision",
            },
        ],
        // [
        //     {
        //         name: "News",
        //         id: "#news",
        //     },
        // ],
        // [
        //     {
        //         name: "Company",
        //         id: "#team",
        //     },
        // ],
        // [
        //   {
        //     name: "Trainer's Oath",
        //     route: "oath",
        //   },
        // ],
        [
        //     {
        //         name: "Resources",
        //         route: "",
        //     },
            {
                name: "Media Kit",
                blankRoute: "mediakit",
            },
        ],
    ];

    function onGoToPageLink(route) {
        if(document.querySelector(route)){
            window.scrollTo({
                top:document.querySelector(route).offsetTop-100,
                behavior:'smooth'
            })
        }
    }
    const pushHandle =(route)=>{
        router.push(route)
    }

    function submitEmail() {
        if (!emailRegex.test(email.value)) {
            emailSubmiteShowErrorMessage.value = "Please enter a valid email address";
            email.value = 'wrong email example'
            setTimeout(() => {
                emailSubmiteShowErrorMessage.value = "";
                email.value = ''
            }, 2000);
        } else {
            emailSubmiting.value = true;
            apis
                .submitEmail(email.value)
                .then((success) => {
                    if (success) {
                        email.value = "";
                        successOpen.value = true
                        // emailSubmiteShowSucces.value = true;
                        // setTimeout(() => {
                        //   emailSubmiteShowSucces.value = false;
                        // }, 2000);
                    }
                })
                .catch((error) => {
                    emailSubmiteShowErrorMessage.value = error;
                    setTimeout(() => {
                        emailSubmiteShowErrorMessage.value = "";
                    }, 2000);
                })
                .finally(() => {
                    emailSubmiting.value = false;
                });
        }
    }
    return {pushHandle,shareIcons,email,emailSubmiting,emailSubmiteShowSucces,emailSubmiteShowErrorMessage,submitDisabled,successOpen,onGoToShare,pageLinks,onGoToPageLink,submitEmail}
}

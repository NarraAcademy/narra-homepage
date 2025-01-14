import speechBubble1 from '@/assets/images/zaiGo/Speech Bubble-1.svg'
import speechBubble2 from '@/assets/images/zaiGo/Speech Bubble-2.svg'
import speechBubble3 from '@/assets/images/zaiGo/Speech Bubble-3.svg'
import speechBubble4 from '@/assets/images/zaiGo/Speech Bubble-4.svg'
import speechBubble5 from '@/assets/images/zaiGo/Speech Bubble-5.svg'
import speechBubble6 from '@/assets/images/zaiGo/Speech Bubble-6.svg'
import shapes1 from '@/assets/images/zaiGo/shapes-1.png'
import shapes2 from '@/assets/images/zaiGo/shapes-2.png'
import shapes3 from '@/assets/images/zaiGo/shapes-3.png'
import shapes4 from '@/assets/images/zaiGo/shapes-4.png'
import shapes5 from '@/assets/images/zaiGo/shapes-5.png'
import shapes6 from '@/assets/images/zaiGo/shapes-6.png'
import avatar1 from "@/assets/images/avatar-1.png"
import avatar2 from "@/assets/images/avatar-2.png"
import avatar3 from "@/assets/images/avatar-3.png"
import avatar4 from "@/assets/images/avatar-4.png"
import avatar5 from "@/assets/images/avatar-5.png"
import zaiSelector1 from "@/assets/images/zaiGo/Zai Selector-1.png"
import zaiSelector2 from "@/assets/images/zaiGo/Zai Selector-2.png"
import zaiSelector3 from "@/assets/images/zaiGo/Zai Selector-3.png"
import zaiSelector4 from "@/assets/images/zaiGo/Zai Selector-4.png"
import zaiSelector5 from "@/assets/images/zaiGo/Zai Selector-5.png"
import zaiSelector6 from "@/assets/images/zaiGo/Zai Selector-6.png"
import zaiSelectorActive1 from "@/assets/images/zaiGo/zaiSelector-active-1.png"
import zaiSelectorActive2 from "@/assets/images/zaiGo/zaiSelector-active-2.png"
import zaiSelectorActive3 from "@/assets/images/zaiGo/zaiSelector-active-3.png"
import zaiSelectorActive4 from "@/assets/images/zaiGo/zaiSelector-active-4.png"
import zaiSelectorActive5 from "@/assets/images/zaiGo/zaiSelector-active-5.png"
import zaiSelectorActive6 from "@/assets/images/zaiGo/zaiSelector-active-6.png"
import {ref} from "vue";

export const zaiGoBaseUrl  ='https://oss.narralayer.ai/images/zaiGo/'
export default () => {
    const cardList = [
        {
            id: 6,
            color:'#b5432b ',
            des: 'Oh, I’m sorry. I find it hard to remember the names of snacks. Are you a snack? Furthermore, ooga booga.',
            speechBubble: speechBubble6,
            shapes:shapes6,
            avatar:avatar5,
            zaiSelector:zaiSelector6,
            zaiSelectorActive:zaiSelectorActive6
        },
        {
            id: 3,
            color:'#F9490F',
            des: 'Listen up: we’re going to be the first ZAI崽 and human partnership ever. You in?',
            speechBubble: speechBubble3,
            shapes:shapes3,
            avatar:avatar3,
            zaiSelector:zaiSelector3,
            zaiSelectorActive:zaiSelectorActive3
        },
        {
            id: 4,
            color:'#47B6F4',
            des: 'By my calculations, adopting me will most likely result in an uptick in your personal fulfilment and happiness.',
            speechBubble: speechBubble4,
            shapes:shapes4,
            avatar:avatar4,
            zaiSelector:zaiSelector4,
            zaiSelectorActive:zaiSelectorActive4
        },
        {
            id: 2,
            color:'#AB4FEA',
            des: 'Don’t be mistaken: I’m not asking you to adopt me because I like you or anything, okay?',
            speechBubble: speechBubble2,
            shapes:shapes2,
            avatar:avatar2,
            zaiSelector:zaiSelector2,
            zaiSelectorActive:zaiSelectorActive2
        },
        {
            id: 5,
            color:'#DD812F',
            des: 'OMGOMGOMGOMG YOU’RE ADOPTING ME AREN’T YOU? I CAN SEE IT IN YOUR EYES (人◕ω◕)',
            speechBubble: speechBubble5,
            shapes:shapes5,
            avatar:avatar5,
            zaiSelector:zaiSelector5,
            zaiSelectorActive:zaiSelectorActive5
        },
        {
            id: 1,
            color:'#7F8929',
            des: 'Supppp my guy! Talk to me whenever, k?',
            speechBubble: speechBubble1,
            shapes:shapes1,
            avatar:avatar1,
            zaiSelector:zaiSelector1,
            zaiSelectorActive:zaiSelectorActive1
        },
    ].map((i,index)=>{
        return {
            ...i,
            // avatarActive:zaiGoBaseUrl+'avatar-active-'+(index+1)+'.png',
            // avatarDefault:zaiGoBaseUrl+'avatar-default-'+(index+1)+'.png',
            // avatarMobileActive:zaiGoBaseUrl+'avatar-mobile-active-'+(index+1)+'.png',
            // avatarMobileDefault:zaiGoBaseUrl+'avatar-mobile-default-'+(index+1)+'.png',
            cardActive:zaiGoBaseUrl+'card-active-'+(i.id)+'.png',
            cardDefault:zaiGoBaseUrl+'card-default ('+(i.id)+').png',
            figure:zaiGoBaseUrl+'figure-'+(i.id)+'.png',
            figureBg:zaiGoBaseUrl+'bg ('+(i.id)+').png',
        }
    })
    const visible = ref(false)
    const visible1 = ref(false)
    const visible2 = ref(false)
    const visible3 = ref(false)
    const visible4 = ref(false)
    const visible5 = ref(false)
    return {cardList,visible,visible1,visible2,visible3,visible4,visible5}
}

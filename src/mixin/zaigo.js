
import {ref} from "vue";

export const zaiGoBaseUrl  ='https://oss.narralayer.ai/images/zaiGo/'
export default () => {
    const cardList = [
        {
            id: 6,
            color:'#b5432b ',
            des: 'Oh, I’m sorry. I find it hard to remember the names of snacks. Are you a snack? Furthermore, ooga booga.',

        },
        {
            id: 3,
            color:'#F9490F',
            des: 'Listen up: we’re going to be the first ZAI崽 and human partnership ever. You in?',

        },
        {
            id: 4,
            color:'#47B6F4',
            des: 'By my calculations, adopting me will most likely result in an uptick in your personal fulfilment and happiness.',

        },
        {
            id: 2,
            color:'#AB4FEA',
            des: 'Don’t be mistaken: I’m not asking you to adopt me because I like you or anything, okay?',
           
        },
        {
            id: 5,
            color:'#DD812F',
            des: 'OMGOMGOMGOMG YOU’RE ADOPTING ME AREN’T YOU? I CAN SEE IT IN YOUR EYES (人◕ω◕)',
            
        },
        {
            id: 1,
            color:'#7F8929',
            des: 'Supppp my guy! Talk to me whenever, k?',
            
        },
    ].map((i,index)=>{
        return {
            ...i,
            // avatarActive:zaiGoBaseUrl+'avatar-active-'+(index+1)+'.png',
            // avatarDefault:zaiGoBaseUrl+'avatar-default-'+(index+1)+'.png',
            // avatarMobileActive:zaiGoBaseUrl+'avatar-mobile-active-'+(index+1)+'.png',
            // avatarMobileDefault:zaiGoBaseUrl+'avatar-mobile-default-'+(index+1)+'.png',
            speechBubble: `${zaiGoBaseUrl}Speech Bubble-${i.id}.svg`,
            shapes: `${zaiGoBaseUrl}shapes-${i.id}.png`,
            zaiSelector: `${zaiGoBaseUrl}Zai Selector-${i.id}.png`,
            zaiSelectorActive: `${zaiGoBaseUrl}zaiSelector-active-${i.id}.png`,
            cardActive: `${zaiGoBaseUrl}card-active-${i.id}.png`,
            cardDefault: `${zaiGoBaseUrl}card-default (${i.id}).png`,
            figure: `${zaiGoBaseUrl}figure-${i.id}.png`,
            figureBg: `${zaiGoBaseUrl}bg (${i.id}).png`,
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

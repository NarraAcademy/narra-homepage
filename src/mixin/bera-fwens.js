
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
            des: 'You see dis egg? It doesn’t struggle or try too hard. It only has to hatch. Be like this egg.',

        },
        {
            id: 4,
            color:'#47B6F4',
            des: 'Bodiak winter is upon us. So just set it, forget it, and let\'s majin the future together! And did I say... \'bodiak\'?',

        },
        {
            id: 2,
            color:'#AB4FEA',
            des: 'Hi, do you have a moment or 69-hours to talk about our lord and savior, Proof of Liquidity?',
           
        },
        {
            id: 5,
            color:'#DD812F',
            des: 'By BERA, for Beras!',
            
        },
        {
            id: 1,
            color:'#7F8929',
            des: 'Baddest in the land? You\'re lookin\' at HER.',
            
        },
    ].map((i,index)=>{
        return {
            ...i,
            // avatarActive:zaiGoBaseUrl+'avatar-active-'+(index+1)+'.png',
            // avatarDefault:zaiGoBaseUrl+'avatar-default-'+(index+1)+'.png',
            // avatarMobileActive:zaiGoBaseUrl+'avatar-mobile-active-'+(index+1)+'.png',
            // avatarMobileDefault:zaiGoBaseUrl+'avatar-mobile-default-'+(index+1)+'.png',
            // speechBubble: `${zaiGoBaseUrl}Speech Bubble-${i.id}.svg`,
            speechBubble:`${zaiGoBaseUrl}bf speech bubble.png`,
            shapes: `${zaiGoBaseUrl}shapes-${i.id}.png`,
            zaiSelector: `${zaiGoBaseUrl}Zai Selector-${i.id}.png`,
            zaiSelectorActive: `${zaiGoBaseUrl}zaiSelector-active-${i.id}.png`,
            cardActive: `${zaiGoBaseUrl}card-active-${i.id}.png`,
            cardDefault: `${zaiGoBaseUrl}card-default-${i.id}.png?v=5`,
            figure: `${zaiGoBaseUrl}figure-bf-${i.id}.png?v=2`,
            figureBg: `${zaiGoBaseUrl}bf bg ${i.id}.png?v=2`,
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

import card1bg1 from "@/assets/images/ourVision/card-1-bg-1.png";
import card1bg2 from "@/assets/images/ourVision/card-1-bg-2.png";
import card2bg1 from "@/assets/images/ourVision/card-2-bg-1.png";
import card2bg2 from "@/assets/images/ourVision/card-2-bg-2.png";
import card3bg2 from "@/assets/images/ourVision/card-3-bg-2.png";
import {ref} from "vue";

export default ()=>{
    const cardList = ref([
        {
            title: '+I',
            subtitle: 'Interact with your very own <br> AI companion, ZAI崽',
            des: 'You won\'t just chat with ZAI崽,<br> you will also be “talked to.”<br> Every interaction counts<br> towards nurturing it!',
            bg1: card1bg1,
            bg2: card1bg2
        },
        {
            title: '+V',
            subtitle: 'Valorize your creative data',
            des: 'Customize your ZAI崽, create<br> in-game assets, and contribute<br> to the Narra ecosystem at<br> large, and let smart contracts<br> fairly distribute the value <br> of these IPs and contributions. ',
            bg1: card2bg1,
            bg2: card2bg2

        },
        {
            title: '+E',
            subtitle: 'Earn with Narra',
            des: 'Train-and-earn: a new way to be rewarded! ',
            bg1: 'https://oss.narralayer.ai/images/card-3-bg-1.png',
            bg2: card3bg2
        },
    ])
    const visible = ref(false)
    const visible1 = ref(false)
    const visible2 = ref(false)
    const visible3 = ref(false)
    return{cardList,visible,visible1,visible2,visible3}
}

import {computed, ref} from "vue";
import {math} from "@/utils/math.js";

export const modules = import.meta.glob("@/assets/images/**/*.*");
export default ()=>{
    const fileList =[
        'ttps://oss.narralayer.ai/images/intro-card.gif',
        'https://oss.narralayer.ai/images/mascot-4.gif',
        'https://oss.narralayer.ai/images/home-page-bg-1.gif',
        'https://oss.narralayer.ai/images/zaiGo/card-active-1.png',
        'https://oss.narralayer.ai/images/zaiGo/card-active-2.png',
        'https://oss.narralayer.ai/images/zaiGo/card-active-3.png',
        'https://oss.narralayer.ai/images/zaiGo/card-active-4.png',
        'https://oss.narralayer.ai/images/zaiGo/card-active-5.png',
        'https://oss.narralayer.ai/images/zaiGo/card-default (1).png',
        'https://oss.narralayer.ai/images/zaiGo/card-default (2).png',
        'https://oss.narralayer.ai/images/zaiGo/card-default (3).png',
        'https://oss.narralayer.ai/images/zaiGo/card-default (4).png',
        'https://oss.narralayer.ai/images/zaiGo/card-default (5).png',
        'https://oss.narralayer.ai/images/zaiGo/figure-1.png',
        'https://oss.narralayer.ai/images/zaiGo/figure-2.png',
        'https://oss.narralayer.ai/images/zaiGo/figure-3.png',
        'https://oss.narralayer.ai/images/zaiGo/figure-4.png',
        'https://oss.narralayer.ai/images/zaiGo/figure-5.png',
        'https://oss.narralayer.ai/images/zaiGo/bg (1).png',
        'https://oss.narralayer.ai/images/zaiGo/bg (2).png',
        'https://oss.narralayer.ai/images/zaiGo/bg (3).png',
        'https://oss.narralayer.ai/images/zaiGo/bg (4).png',
        'https://oss.narralayer.ai/images/zaiGo/bg (5).png',
        ...Object.keys(modules)
    ]
    const loadedLength =ref(0)
    console.log(fileList.length)
    fileList.forEach(i => {
        var img = new Image();
        img.src = i;
        img.onload = function () {
            console.log(i)
            loadedLength.value++
            console.log(loadedLength.value)
        }
    })
    const schedule = computed(()=>{
        return Math.ceil(math.multiply(math.divide(loadedLength.value,fileList.length),100))
    })
    return {schedule}
}

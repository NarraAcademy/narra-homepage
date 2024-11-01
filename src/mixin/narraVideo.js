import {ref} from "vue";

export default ()=>{
    const visible = ref(false)
    const visible1 = ref(false)
    const videoList = ref([
        {
            id:1,
            img:'https://oss.narralayer.ai/images/narra-video-poster-2.png',
            src:'https://www.youtube.com/embed/_lkkLHDTbJY?si=9C6ggmz1dHrKeCTw&rel=0'
        },
        {
            id:2,
            img:'https://oss.narralayer.ai/images/narra-video-poster-1.png',
            src:'https://www.youtube.com/embed/RRgs-7fST70?si=egAxGaGthpIrQVXI&rel=0'
        },
        {
            id:3,
            img:'https://oss.narralayer.ai/images/narra-video-poster-3.png',
            src:'https://www.youtube.com/embed/KkBteM8ZsBc?si=sRmDx5ovW2mwapwJ&rel=0'
        }
    ])
    const activeId = ref(1)
    return {
        visible,
        videoList,
        activeId,
        visible1
    }
}

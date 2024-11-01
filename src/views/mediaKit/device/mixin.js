import Frame1Png from "@/assets/images/pc/mediakit/Frame 1212841.png";
import Frame2Png from "@/assets/images/pc/mediakit/Frame 1212841-1.png";
import Frame3Png from "@/assets/images/pc/mediakit/Frame 1212841-2.png";
import Frame4Png from "@/assets/images/pc/mediakit/Frame 1212841-3.png";
import Frame5Png from "@/assets/images/pc/mediakit/Frame 1212841-4.png";
import Frame6Png from "@/assets/images/pc/mediakit/Frame 1212841-5.png";
import Frame7Png from "@/assets/images/pc/mediakit/Frame 1212841-6.png";
import Frame8Png from "@/assets/images/pc/mediakit/Frame 1212841-7.png";
import Frame1Svg from "@/assets/images/pc/mediakit/Frame 1212841.svg";
import Frame2Svg from "@/assets/images/pc/mediakit/Frame 1212841-1.svg";
import Frame3Svg from "@/assets/images/pc/mediakit/Frame 1212841-2.svg";
import Frame4Svg from "@/assets/images/pc/mediakit/Frame 1212841-3.svg";
import Frame5Svg from "@/assets/images/pc/mediakit/Frame 1212841-4.svg";
import Frame6Svg from "@/assets/images/pc/mediakit/Frame 1212841-5.svg";
import Frame7Svg from "@/assets/images/pc/mediakit/Frame 1212841-6.svg";
import Frame8Svg from "@/assets/images/pc/mediakit/Frame 1212841-7.svg";

export default () => {
    const cardList = [
        {
            title:'Questing Asset',
            btn:true
        },
        {
            title: 'Logotype',
            list: [
                {
                    png:Frame1Png,
                    svg:Frame1Svg,
                    // url: 'https://oss.narralayer.ai/images/Frame%201212841'
                },
                {
                    png:Frame2Png,
                    svg:Frame2Svg,
                    // url: 'https://oss.narralayer.ai/images/Frame%201212841-1'
                },
                {
                    png:Frame3Png,
                    svg:Frame3Svg,
                    // url: 'https://oss.narralayer.ai/images/Frame%201212841-2'
                },
                {
                    png:Frame4Png,
                    svg:Frame4Svg,
                    // url: 'https://oss.narralayer.ai/images/Frame%201212841-3'
                }
            ]
        },
        {
            title: 'Simplified',
            list: [
                {
                    png:Frame5Png,
                    svg:Frame5Svg,
                    // url: 'https://oss.narralayer.ai/images/Frame%201212841-4'
                },
                {
                    png:Frame6Png,
                    svg:Frame6Svg,
                    // url: 'https://oss.narralayer.ai/images/Frame%201212841-5'
                },
                {
                    png:Frame7Png,
                    svg:Frame7Svg,
                    // url: 'https://oss.narralayer.ai/images/Frame%201212841-6'
                },
                {
                    png:Frame8Png,
                    svg:Frame8Svg,
                    // url: 'https://oss.narralayer.ai/images/Frame%201212841-7'
                }
            ]
        }
    ]
    const downloadAssetHandle =()=>{
        window.open('https://oss.narralayer.ai/medias/Narra%20Hero%20Assets%20(Bera).zip')
    }
    return {cardList,downloadAssetHandle}
}

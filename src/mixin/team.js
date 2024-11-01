import {reactive, ref, watch} from "vue";
import List11 from "@/assets/images/pc/ourVision/list-1-1.png";
import List12 from "@/assets/images/pc/ourVision/list-1-2.png";
import List13 from "@/assets/images/pc/ourVision/list-1-3.png";
import List14 from "@/assets/images/pc/ourVision/list-1-4.png";
import List21 from "@/assets/images/pc/ourVision/list-2-1.png";
import List22 from "@/assets/images/pc/ourVision/list-2-2.png";
import List23 from "@/assets/images/pc/ourVision/list-2-3.png";
import List31 from "@/assets/images/pc/ourVision/list-3-1.png";
import List34 from "@/assets/images/pc/ourVision/list-3-4.png";
import List35 from "@/assets/images/pc/ourVision/list-3-5.png";

export  default ()=>{

    const mainList = reactive([
        {
            title: 'Founders',
            description: 'Coupling a decade of entertainment industry expertise with advanced Web3 insights, our team stands at the vanguard of blending traditional entertainment with the revolutionary blockchain and crypto space.',
            list: [
                {
                    svg: List11,
                    name: 'Aileen',
                    description: 'Co-founder & CEO',
                    hoverText: 'As an avid explorer, Aileen has traversed multiple realms with her loyal cat, GG. From trailblazing marketing efforts at Netflix & Disney Asia, to creating the first metaverse reality show at Binance, they have been inseparable and thick as thieves. Now, they\'ve found a permanent home in Narra, where GG is still trying to figure out how to get ZAI崽 to play hide and seek with him.'
                },
                {
                    svg: List12,
                    name: 'Nicole',
                    description: 'Co-founder & CMO',
                    hoverText: 'Nicole is a creative gremlin that spends her days imagining new worlds and creating new universes (when she\'s not gaming). Having led entertainment marketing at Netflix & Prime Video, she now spends her days interacting with ZAI崽, prototyping new adventures for our Trainers (again, when she\'s not gaming).'
                },
                {
                    svg: List13,
                    name: 'TP',
                    description: 'Co-founder & COO',
                    hoverText: 'When TP’s not busy leading the charge for Google into Web3, or plotting the next big thing in Layer 1 & BTC Oracle projects, he’s diving deep into the world of rare finds and collectibles. Rumor has it that one of his treasure hunting expeditions had once led him to ZAI崽’s planet, but he’s never spilled the beans, preferring to keep it as his little secret.'
                },
                {
                    svg: List14,
                    name: 'Ryan',
                    description: 'Co-founder & CTO',
                    hoverText: 'Ryan is a tech lead crafting state-of-the-art hybrid cloud solutions for global giants, while building enterprise-grade AI in the finance industry. Beyond driving innovation for ultra-large systems, he was also once a sound creator at heart, selling beats and rocking vocals at different gigs. Now (when he has some downtime), he’s holed up in his studio, finding ways to give ZAI崽 a voice in this new world.'
                }
            ]
        },
        {
            title: 'Project Leads',
            description: 'Project leader team combines OG crypto developers, global user growth experts, and versatile designers skilled in animation and AI, offering a comprehensive mix of expertise.',
            list: [
                {
                    svg: List21,
                    name: 'Kyle',
                    description: 'Tech Lead',
                    hoverText: 'For the past 7 years, Kyle has delved deep into Web3 technology, crafting over 100 visionary projects and guiding a team of 30+ technical wizards. His expertise in product design and technical implementation is unparalleled. These days, he\'s building an exciting infrastructure for ZAI崽 and the future of Narra, brimming with boundless possibilities and thrilling prospects.\n'
                },
                {
                    svg: List22,
                    name: 'Ian',
                    description: 'Growth Lead',
                    hoverText: 'Ian is a growth, social, and marketing expert with a passion for storytelling, who pioneered Amazon Prime Video’s social media presence across Southeast Asia. After meeting ZAI崽, he is now focused on uncovering the mysterious history of ZAI崽—exploring its origins, journey, and motivations. He is on a dedicated quest to unravel a compelling story waiting to be discovered.'
                },
                {
                    svg: List23,
                    name: 'Rachel',
                    description: 'Design Lead',
                    hoverText: 'With 14 years of experience across diverse design backgrounds, strategy, and project management, she is a passionate and innovative creative leader. Known for her keen eye for detail and deep appreciation for indie design, she now focuses her expertise on designing ZAI崽\'s new home, ensuring it blends technological comfort with aesthetic charm.'
                }
            ]
        },
        {
            title: 'Advisors',
            description: "Narra's advisors specialize in pioneering strategic partnerships and technical structuring, offering innovative solutions to building a brand new ecosystem.",
            list: [
                {
                    svg: List34,
                    name: 'Dovey',
                    description: 'Advisor',
                    hoverText: ''
                },
                {
                    svg: List31,
                    name: 'Dr. Cathie',
                    description: 'AI & Blockchain Scientist',
                    hoverText: 'With a PhD in Neroscience, Dr. Cathie is a renowned AI and Crypto researcher. As the former ZKML research lead at the Ethereum Foundation, she co-authored ERC 7007 and ERC 7641. Currently, she is the Chief Scientist at ORA and founded a community of 500+ developers.'
                },
                {
                    svg: List35,
                    name: 'Matt',
                    description: 'Gamification & Community',
                    hoverText: ''
                },
                // {
                //     svg: List32,
                //     name: 'Sheldon',
                //     description: 'AI & Blockchain Architect',
                //     hoverText: 'Sheldon is a distinguished AI and Blockchain architect who has played a key role in integrating AI and blockchain technology into global enterprises. His expertise lies in translating AI and blockchain theories into practical applications, driving innovation and efficiency into mass adoption.'
                // },
                // {
                //     svg: List33,
                //     name: 'Gavin',
                //     description: 'Serial Founder',
                //     hoverText: 'Gavin, an astute investor with decades of experience in production, now heads Creator Engine—a boutique creative agency providing fully managed, highly engaged support to global creators, enabling them to efficiently produce their best content.'
                // }
            ]
        },
        // {
        //   title: 'Say Hello!',
        //   description: 'core@narralayer.ai.',
        //   list: []
        // }
    ])
    const visible =ref(false)
    const visible1 =ref(false)
    const visible2 =ref(false)
    const visible3 =ref(false)
    watch(()=>mainList,()=>{
        console.log(mainList)
    },{deep:true})
    return {mainList,visible,visible1,visible2,visible3}
}

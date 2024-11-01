import {ref} from "vue";
import partner1 from '@/assets/images/partner (1).svg'
import partner2 from '@/assets/images/partner (2).svg'
import partner3 from '@/assets/images/partner (3).svg'
import partner4 from '@/assets/images/partner (4).svg'
import partner5 from '@/assets/images/partner (5).svg'
import partner6 from '@/assets/images/partner (6).svg'
import partner7 from '@/assets/images/partner (7).svg'
import partner8 from '@/assets/images/partner (8).svg'
import partner9 from '@/assets/images/partner (9).svg'
import partner10 from '@/assets/images/partner (10).svg'
import partner11 from '@/assets/images/partner (11).svg'
import partner12 from '@/assets/images/partner (12).svg'
import partner13 from '@/assets/images/partner (13).svg'

export default ()=>{
    const aiList = ref([
        {
            icon:partner1,
        },
        {
            icon:partner2,
        },
        {
            icon:partner3,
        },
        {
            icon:partner4,
        },
        {
            icon:partner5,
        },
        {
            icon:partner6,
        },
        {
            icon:partner7,
        },
        {
            icon:partner8,
        },
        {
            icon:partner9,
        },
        {
            icon:partner10,
        },
        {
            icon:partner11,
        },
        {
            icon:partner12,
        },
        {
            icon:partner13,
        }
    ])
    const visible = ref(false);
    const visible1 = ref(false);
    const visible2 = ref(false);
    const visible3 = ref(false);
    const visible4 = ref(false);
    const visible5 = ref(false);
    return {aiList,visible,visible1,visible2,visible3,visible4,visible5}
}

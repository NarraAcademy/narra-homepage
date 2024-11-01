import {onMounted, onUnmounted, ref} from "vue";
import apis from "@/utils/apis.js";

export default ()=>{
    const list = ref([])
    const classList = ref([
        {
            name:'All',
            id:0
        },
        {
            name:'News',
            id:1
        },
        {
            name:'Activity',
            id:2
        },
    ])
    const classId = ref(0)
    const paginator = ref({
        pageSize: 10,
        page: 1,
        total: 0,
    })
    const getList = () => {
        apis.getNews(paginator.value).then((res) => {
            list.value = res.data
            // list.value = []
            // paginator.value.page = res.page
            paginator.value.pageSize = res.pageSize
            paginator.value.total = res.dataCount
            // window.document.documentElement.scrollTo({
            //     top: 0,
            //     behavior: "smooth"
            // })
        })
    }
    const PaginationChange = (page) => {
        paginator.value = {
            ...paginator.value,
            page: +page
        }
        getList()
    }
    const visible = ref(false);
    const visible1 = ref(false);
    const visible2 = ref(false);
    const visible3 = ref(false);
    const width = ref(1920)
    const setWidth = ()=>{
        width.value = +getComputedStyle(document.documentElement).getPropertyValue("--vw").replaceAll('px','');
    }
    onMounted(()=>{
        setWidth()
        getList()
        window.addEventListener('resize',setWidth)
    })
    onUnmounted(()=>{
        window.removeEventListener('resize',setWidth)
    })
    return {list,visible,classList,classId,width,paginator,PaginationChange,visible1,visible2,visible3}
}

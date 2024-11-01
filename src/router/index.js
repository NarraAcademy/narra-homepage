import {createRouter, createWebHistory} from "vue-router";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    scrollBehavior(to, from) {
        if (to.fullPath.includes("/about#Founders")) {
            return {el: "#Founders", top: 0};
        }
        return {top: 0};
    },
    routes: [
        {
            path: "/",
            name: "index",
            component: ()=>import('@/views/Index/index.vue')
        },
        // {
        //     path: "/home",
        //     name: "home",
        //     component: ()=>import('@/views/home/index.vue'),
        //     meta:{
        //         header:true,
        //         footer:true,
        //     }
        // },
        {
            path: "/mediaKit",
            name: "mediaKit",
            component: ()=>import('@/views/mediaKit/index.vue'),
        },
        {
            path: "/vision",
            name: "vision",
            component: ()=>import('@/views/vision/index.vue'),
        },
        {
            path: "/chat",
            name: "chat",
            component: ()=>import('@/views/chat/index.vue'),
        },
        {
            path: "/chatting/:id",
            name: "chatting",
            component: ()=>import('@/views/chatContent/index.vue'),
            props: true
        },
    ],
});

export default router;

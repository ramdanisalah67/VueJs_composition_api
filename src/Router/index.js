import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/',name:"racine", component: ()=> import("@/components/HelloWorld.vue") },
        { path: '/test',name:"test", component: ()=> import("@/components/firstTest.vue") },

    ]
})

router.beforeEach((to)=>{
    console.log(to.name)
})
export default router
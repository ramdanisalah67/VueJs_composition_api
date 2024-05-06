import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/',name:"racine", component: ()=> import("@/components/HelloWorld.vue") },
        { path: '/test',name:"test", component: ()=> import("@/components/firstTest.vue") },
        { path: '/directive',name:"directive", component: ()=> import("@/components/directiveComponent.vue") },
        { path: '/mixin',name:"mixin", component: ()=> import("@/components/testMixin.vue") },
        { path: '/provide',name:"provide", component: ()=> import("@/components/parentProvide.vue") },
        { path: '/hooks',name:"hooks", component: ()=> import("@/components/lifeCycleHooks.vue") },
        { path: '/mitt',name:"mitt", component: ()=> import("@/components/mittComponent.vue") },

    ]
})

router.beforeEach((to)=>{
    console.log(to.name)
})
export default router
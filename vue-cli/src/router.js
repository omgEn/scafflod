import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter); 

// const Shop = ()=>import('@/pages/shop.vue')

const routes = [
	{
		path: '/aside',
		component: (resolve)=>(['@/pages/aside.vue'],resolve)
	}
];

const router = new VueRouter({
  routes: routes
});
export default router
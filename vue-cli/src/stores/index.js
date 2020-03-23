import Vue from 'vue'
import Vuex from 'vuex'
import instance from './modules/instance'

//注册
Vue.use(Vuex);

const store = new Vuex.Store({
	mudules: {
		instance
	},
	state:{},
	getters:{},
	mutations:{},
	actions:{}
});
/* 
state原始数据
通过mutations操作state,(同步操作)
getters过滤state,
actions通过commit操作mutations,（异步操作）

可先从action中调接口获取数据，赋值给mutations中的方法，
在通过mutations修改state的值。

state:{
	A:[{}]
}
getters: {
	A1: state=>{return state.A.filter(value=>value.done)},
	A2: (state,getters)=>{return getters.A.length},
	
}



import {mapState} from 'vuex'

mapState([])
 */

export default store

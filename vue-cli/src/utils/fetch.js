import axios from 'axios'
import {Message} from 'element-ui'

// 测试:http://localhost:9090
// 上线:http://baidu.com
var baseURL = 'http://localhost:9999'

// axios实例
const fetch = axios.create({
	baseURL: baseURL,
	timeout: 1000,
	headers:{
		'Content-Type':'application/json;charset=UTF-8'
	}
});

// 添加请求拦截器,发生在请求发起之前
fetch.interceptors.request.use(function(config){
	console.log('请求拦截,ajax发起请求之前',config);
	// var token = localStorage.getItem('token');
	// config.headers.Authorization = token;
	return config;
},function(error){
	return Promise.reject(error);
});

// 添加响应拦截器,发生在客户端接收数据之前,此时服务器已经返回了数据
fetch.interceptors.response.use(response=>{
	var res = {};
	console.log('响应拦截,ajax接收数据之前',response);
	if(response.data &&response.data.code===0){//这个code需要看
		res = response.data.data || {}
	} else {
		var msg = response.data.message || '请求错误';
		Message({
			message: msg,
			type: 'error',
			duration: 3*1000
		})
	}
	return res;
},error=>{
	// 调接口失败,弹个框提示用户
	const msg = error.Message !== undefined ? error.Message: '';
	Message({
		message: '网络错误' + msg,
		type: 'error',
		duration: 3*1000
	})
	return Promise.reject(error);
})

export default fetch
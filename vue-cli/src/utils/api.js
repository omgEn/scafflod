// 这里放各种调接口的方法
import fetch from './fetch'

// 用于...的方法
export function Do(params){
	// 返回Promise
	return fetch({
		method: 'GET',
		params: params,
		url: ''
	})
}
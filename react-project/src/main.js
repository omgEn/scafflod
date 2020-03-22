// import React from 'react';
// import ReactDOM from 'react-dom';

// import App from './App.js';

// // 用于把react组件渲染在app这个DOM结点
// ReactDOM.render(<App/>,document.getElementById('app'));

// // 解决热更新的问题
// if (module.hot) {
// 	module.hot.accept('./App.js',function(){
// 		console.log('文件发生了变化');
// 		var NewApp = require('./App.js').default;
// 		ReactDom.render(<NewApp/>,document.getElementById('app'));
// 	})
// }

import React from 'react'
import ReactDOM from 'react-dom'

import App from './App.js'

// 用于把react组件渲染在app这个DOM节点
ReactDOM.render(<App />, document.getElementById('app'))

// 解决热更新的问题
if (module.hot) {
  module.hot.accept('./App.js', function() {
    console.log('文件发生了变化')
    var NewApp = require('./App.js').default
    ReactDOM.render(<NewApp />, document.getElementById('app'))
  })
}
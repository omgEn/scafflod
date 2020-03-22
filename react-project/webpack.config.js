var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

// 使用cross-env动态设置进程的环境变量
var env = process.env.NODE_ENV;

// 默认是生成环境打包 env=production,上线
var config = {
	mode: 'production',
	// 自定义入口文件
	entry: path.join(__dirname,'./src/main.js'),
	// 输出
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname,'./dist')
	},
	resolve: {
		// 别名
		alias: {
			// 配置绝对路径
			'@': path.resolve(__dirname,'./src')
		}
	},
	// 插件
	plugins: [
		new HtmlWebpackPlugin({
			template:path.join(__dirname,'./public/index.html')
		})
	],
	module: {
		rules: [
			// 第一条规则
			{
				test: /\.(css|scss)$/,
				use: [
					// 这三个loader顺序,是固定的
					{ loader: 'style-loader' },//将js字符串生成style节点
					{ loader: 'css-loader' },//将css转化成CommonJS模块
					{ loader: 'sass-loader' }//j将Sass编译成css
				]
			},
			// 第二条规则
			{
				test: /\.(js|jsx)$/,
				// 忽略node_modules
				exclude: /node_modules/,
				use: [
					{ loader:'babel-loader' }
				]
			},
			// 第三条规则
			{
				test:/\.(png|jpg|gif)$/,
				use: [
					{ loader: 'file-loader' }
				]
			}
		]
	}
};

// 开发环境运行 env=development
if (env==='development') {
	config.mode = 'development';
	config.output = {
		filename: 'bundle.js',
		path: path.resolve(__dirname,'./public')
	};
	// 本地服务器和热更新
	config.devServer = {
		port: '9090',
		contentBase: path.join(__dirname,'./public'),
		hot: true
	};
	// 添加第三条loader规则
	config.module.rules.push({
		test: /\.(js|jsx)$/,
		exclude: /node_modules/,
		// 前置处理
		enforce: 'pre',
		use: [
			{ loader: 'eslint-loader' }
		]	
	})
	// 添加一个热更新插件,表示开启devServer中的热更新功能HMR
	config.plugins.push(new webpack.HotModuleReplacementPlugin());
};

// CommonJS模块
module.exports = config;

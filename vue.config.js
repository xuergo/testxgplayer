const webpack = require('webpack')
module.exports = {
	//vuecli@3.x版本把基本的配置文件都封装到了./node_modules/@vue/cli-sevice/lib/config下
	lintOnSave: false,
	publicPath: './',
	 chainWebpack: config => {
	        const svgRule = config.module.rule('svg')
	        // 清除已有的所有 loader。
	        // 如果你不这样做，接下来的 loader 会附加在该规则现有的 loader 之后。
	        svgRule.uses.clear()
	        // 添加要替换的 loader
	        svgRule
	            .use('raw-loader')
	            .loader('raw-loader')
	    },
	devServer: {
		
	},
	configureWebpack: {
		plugins: [
			new webpack.ProvidePlugin({
				$: "jquery",
				jQuery: "jquery",
				"windows.jQuery": "jquery"
			})
		]
	}
}

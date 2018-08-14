const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry:'./src/main.js',
	output:{
		path:__dirname+'/dist',
		filename: 'js/app.js'
	},
	plugins: [
        new HtmlWebpackPlugin({
            template: './static/index.html',
            filename: 'index.html'
        })
    ],
	module:{
		loaders:[
			{test:/\.(js|jsx)$/,loader:'babel-loader', exclude: /node_modules/}
		]
	}
}

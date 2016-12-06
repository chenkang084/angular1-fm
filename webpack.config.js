var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var env = process.argv[3];
console.log(env + "=============================11");

module.exports = {
    devtool: 'inline-source-map', //配置生成Source Maps，选择合适的选项
    entry: __dirname + "/app/main.ts", //已多次提及的唯一入口文件
    output: {
        // publicPath:__dirname + "/public",
        path: __dirname + "/public", //打包后的文件存放的地方
        filename: "bundle[hash].js" //打包后输出文件的文件名
    },
    devServer: {
        contentBase: "./public", //本地服务器所加载的页面所在的目录
        colors: true, //终端中输出结果为彩色
        historyApiFallback: true, //不跳转
        inline: true, //实时刷新
        hot: true,
        progress: true,
        compress: true
    },
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
    },
    module: { //在配置文件里添加JSON loader
        loaders: [
            {
                test: /\.json$/,
                loader: "json"
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel', //在webpack的module部分的loaders里进行配置即可
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.tsx?$/,
                loader: 'ts-loader'
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + "/public/index.html"//new 一个这个插件的实例，并传入相关的参数
        }),

    ],

}
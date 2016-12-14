var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var env = process.env.NODE_ENV;

console.log("=============================" + process.env.NODE_ENV + "=============================");

module.exports = {
    devtool: 'inline-source-map', //配置生成Source Maps，选择合适的选项
    entry: {
        app: __dirname + "/app/core/bootstrap.js", //已多次提及的唯一入口文件
        vendor: [
            'angular',
            'angular-route',
            'angular-ui-bootstrap',
            'lodash',
            'jquery'
        ],
    },

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
    // resolve: {
    //     extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
    // },
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
                test: /\.scss$/,
                loader: 'style!css!postcss!sass'
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /bootstrap\/dist\/js\/umd\//,
                loader: 'imports?jQuery=jquery'
            },
            {
                test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif)(\?\S*)?$/,
                loader: 'file'
            },
            // {
            //     test: /\.tsx?$/,
            //     loader: 'ts-loader'
            // }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + "/public/index.html"//new 一个这个插件的实例，并传入相关的参数
        }),
        new webpack.DefinePlugin({
            'process.env': "'" + env + "'",
        }),
        new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js"),

        new webpack.ProvidePlugin({
            jQuery: 'jquery',
            $: 'jquery',
            jquery: 'jquery'
        })


    ],

}
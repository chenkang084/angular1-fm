var webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    autoprefixer = require('autoprefixer'),
    ngAnnotatePlugin = require('ng-annotate-webpack-plugin'),
    _ = require('lodash'),
    env = _.trim(process.env.NODE_ENV);

console.log("=============================" + env + "=============================");

var webpackConfig = {
    devtool: 'cheap-module-source-map', //generate source map for developing
    entry: {
        app: __dirname + "/app/core/bootstrap.js", //the main file for start app
        vendor: [
            'angular',
            'angular-route',
            // 'angular-ui-bootstrap',
            'lodash',
            // 'bootstrap',
            // 'bootstrap-loader',
            'jquery'
        ],
    },

    output: {
        // publicPath: __dirname + "/public",
        path: __dirname + "/public", //打包后的文件存放的地方
        // filename: "bundle[hash].js" //打包后输出文件的文件名
        filename: "bundle.js" //打包后输出文件的文件名
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
        loaders: [{
                test: /\.json$/,
                loader: "json"
            },
            {
                test: /\.js$/,
                // exclude: /node_modules/,
                exclude: /node_modules/,
                loader: 'babel', //在webpack的module部分的loaders里进行配置即可
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.scss$/,
                loader: 'style!css!postcss!sass',
                exclude: /node_modules/,
            },
            {
                test: /\.html$/,
                loader: 'html-loader',
                exclude: /node_modules/
            },
            // {
            //     test: /bootstrap\/dist\/js\/umd\//,
            //     loader: 'imports?jQuery=jquery'
            // },
            // {
            //     test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif)(\?\S*)?$/,
            //     loader: 'file'
            // },
            // {
            //     test: /\.tsx?$/,
            //     loader: 'ts-loader'
            // }
        ]
    },

    postcss: function() {
        return [autoprefixer];
    },

    plugins: [
        new HtmlWebpackPlugin({

            template: __dirname + "/public/index.html" //new 一个这个插件的实例，并传入相关的参数
        }),
        new webpack.DefinePlugin({
            'process.env': "'" + env + "'",
        }),
        new webpack.optimize.CommonsChunkPlugin( /* chunkName= */ "vendor", /* filename= */ "vendor.bundle.js"),

        new webpack.ProvidePlugin({
            jQuery: 'jquery',
            $: 'jquery',
            jquery: 'jquery'
        }),

        new ngAnnotatePlugin({ add: true }),

    ],

}

if (env == 'prod') {
    console.log("=============================start uglify=============================");
    webpackConfig.plugins = webpackConfig.plugins.concat([
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]);
}

module.exports = webpackConfig;
var webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    autoprefixer = require('autoprefixer'),
    ngAnnotatePlugin = require('ng-annotate-webpack-plugin'),
    CopyWebpackPlugin = require('copy-webpack-plugin'),
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
        path: __dirname + "/dist", //the path saving packed file 
        // filename: "bundle[hash].js" //the out put file name
        filename: "bundle.js"
    },
    devServer: {
        contentBase: "./public", //webpack server read file path
        colors: true, //terminal shows log with color
        historyApiFallback: true, //
        inline: true, //
        hot: true,
        progress: true,
        compress: true
    },
    // resolve: {
    //     extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
    // },
    module: { //
        loaders: [{
                test: /\.json$/,
                loader: "json"
            },
            {
                test: /\.js$/,
                // exclude: /node_modules/,
                exclude: /node_modules/,
                loader: 'babel',
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
            filename: './index.html',
            template: __dirname + "/app/index.html" //packed js append to index.html,set index.html path
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
        new CopyWebpackPlugin([{
            from: './app/assets',
            to: 'assets'
        }]),

        new ngAnnotatePlugin({ add: true })

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
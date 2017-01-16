const webpack = require('webpack'),
    path = require('path');

const vendors = [
    'jquery',
    'angular',
    'lodash',
    'angular-route',
    'angular-ui-bootstrap',
    'bootstrap',
    'bootstrap-loader'
];

module.exports = {
    output: {
        filename: '[name].dll.js',
        path: path.resolve(__dirname, './app/assets/dll'),
        library: "[name]"
    },
    entry: {
        vendor: vendors,
    },

    module: { //
        loaders: [{
                test: /\.json$/,
                loader: "json"
            },
            {
                test: /\.js$/,
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

        new webpack.ProvidePlugin({
            jQuery: 'jquery',
            $: 'jquery',
            jquery: 'jquery'
        }),

        new webpack.DllPlugin({
            path: path.resolve(__dirname, './app/assets/dll/[name]-manifest.json'),
            name: "[name]"
        }),

        // new webpack.optimize.UglifyJsPlugin({
        //     compress: {
        //         warnings: false
        //     }
        // })
    ],
};
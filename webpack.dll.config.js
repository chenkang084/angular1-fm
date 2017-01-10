const webpack = require('webpack'),
    path = require('path');

const vendors = [
    'angular',
    'angular-route',
    'angular-ui-bootstrap',
    // 'lodash',
    // 'bootstrap',
    // 'bootstrap-loader',
    // 'jquery'
];

module.exports = {
    // output: {
    //     path: path.resolve(__dirname, './app/dll'),
    //     filename: '[name].dll.js',
    //     library: '[name]',
    // },
    output: {
        filename: '[name].dll.js',
        path: path.resolve(__dirname, './app/assets'),
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
        new webpack.DllPlugin({
            path: path.resolve(__dirname, './app/assets/[name]-manifest.json'),
            name: "[name]"
        }),
    ],
};
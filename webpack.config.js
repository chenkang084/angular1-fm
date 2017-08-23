var webpack = require("webpack"),
  HtmlWebpackPlugin = require("html-webpack-plugin"),
  autoprefixer = require("autoprefixer"),
  ngAnnotatePlugin = require("ng-annotate-webpack-plugin"),
  CopyWebpackPlugin = require("copy-webpack-plugin"),
  _ = require("lodash"),
  path = require("path"),
  ExtractTextPlugin = require("extract-text-webpack-plugin"),
  env = _.trim(process.env.NODE_ENV);

console.log(
  "=============================" + env + "============================="
);
console.log(
  "=============================" + __dirname + "============================="
);

var webpackConfig = {
  devtool: "cheap-module-source-map", //generate source map for developing
  entry: {
    app: __dirname + "/app/core/bootstrap.js", //the main file for start app
    vendor: [
      // 'angular',
      // 'angular-route',
      // 'angular-ui-bootstrap',
      // 'lodash',
      // 'bootstrap',
      // 'bootstrap-loader',
      // 'jquery'
    ]
  },

  output: {
    // publicPath: __dirname + "/public",
    path: __dirname + "/dist", //the path saving packed file
    // filename: "bundle[hash].js" //the out put file name
    filename: "bundle.js"
  },
  devServer: {
    contentBase: "./", //webpack server read file path
    colors: true, //terminal shows log with color
    historyApiFallback: true, //
    progress: true,
    compress: true,
    disableHostCheck: true,
    port: 9000,
    proxy: {
      "/game-be": {
        target: "http://127.0.0.1:8888/",
        secure: false,
        pathRewrite: {"^/game-be" : ""}        
      }
    }
  },
  resolve: {
    extensions: ["", ".webpack.js", ".web.js", ".ts", ".js"],
    alias: {
      moment: path.join(
        __dirname,
        "/node_modules/moment/min/moment-with-locales.js"
      ),
      "font-awesome": path.join(
        __dirname,
        "/node_modules/font-awesome/scss/font-awesome.scss"
      )
    }
  },
  module: {
    //
    noParse: [/moment-with-locales/],

    loaders: [
      {
        test: /\.json$/,
        loader: "json"
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel",
        query: {
          presets: ["es2015"]
        }
      },
      {
        test: /\.scss$/,
        // loader: 'style!css!postcss!sass',
        loader: ExtractTextPlugin.extract([
          "css-loader",
          "postcss-loader",
          "sass-loader"
        ])
        // exclude: /node_modules/,
      },
      {
        test: /\.html$/,
        loader: "html-loader",
        exclude: /node_modules/
      },
      {
        test: /dist\/js\/umd\//,
        loader: "imports?jQuery=jquery"
      },
      {
        test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif)(\?\S*)?$/,
        loader: "file"
      }
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
      filename: "./index.html",
      template: __dirname + "/app/index.html" //packed js append to index.html,set index.html path
    }),
    new webpack.DefinePlugin({
      "process.env": "'" + env + "'"
    }),
    new webpack.optimize.CommonsChunkPlugin(
      /* chunkName= */ "vendor",
      /* filename= */ "vendor.bundle.js"
    ),

    new webpack.ProvidePlugin({
      jQuery: "jquery",
      $: "jquery",
      jquery: "jquery"
    }),

    new ngAnnotatePlugin({ add: true }),

    new webpack.DllReferencePlugin({
      context: __dirname + "",
      manifest: require("./app/assets/dll/vendor-manifest.json")
    }),

    new CopyWebpackPlugin([
      {
        from: "./app/assets",
        to: "assets"
      }
    ]),

    new ExtractTextPlugin("style.css", {
      allChunks: true
    })
  ]
};

if (env == "prod") {
  console.log(
    "=============================start uglify============================="
  );
  webpackConfig.plugins = webpackConfig.plugins.concat([
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]);
}

module.exports = webpackConfig;

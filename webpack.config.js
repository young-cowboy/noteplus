var webpack = require('webpack');
var vue = require('vue-loader')
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
 
module.exports = {
    //插件项
    plugins: [
        new ExtractTextPlugin("[name].css")
    ],
    //页面入口文件配置
    entry: {
        index : './src/index.js',
        background : './src/background.js'
    },
    //入口文件输出配置
    output: {
        path: './dist/',
        filename: '[name].js'
    },
    module: {
        //加载器配置
        loaders: [
            { test: /\.css$/, loader: ExtractTextPlugin.extract("css") },
            { test: /\.less$/, loader: ExtractTextPlugin.extract("css!less") },
            { test: /\.js$/, loader: "babel",query: {presets: ['es2015']},exclude: /node_modules/ },
            { test: /\.vue$/, loader: 'vue'}
        ]
    },
    vue : {
      loaders: {
        css: ExtractTextPlugin.extract("css"),
        less: ExtractTextPlugin.extract("css!less")
      },
      autoprefixer: { browsers: ["ios_saf >= 7", "android >= 4"] }
    },
    externals: {
        vue: "window.Vue"
    }
};

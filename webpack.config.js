//path 是node.js 的基本包，用来处理路径的
const path = require('path')

const vueLoaderPlugin = require("vue-loader/lib/plugin")

//var HtmlWebpackPlugin = require('html-webpack-plugin'); //引入插件

module.exports = {

    //声明入口
    //__dirname 代表当前这个文件所在的目录地址
    entry: path.join(__dirname, 'src/index.js'),
    //输出 ，weppack 会打包一个bundle.js 可以在浏览器运行的完整代码
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, 'dist')
    },
    plugins: [

        new vueLoaderPlugin(),
        // new HtmlWebpackPlugin()
    ],
    module: {
        /*    rules: [
                {
                    test: /.vue$/, /!*test检测一个文件类型，他是不是以 .vue结尾，正则表达式写法 *!/
                    loader: 'vue-loader'

                }
            ]*/
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            }
        ]
    }, mode: 'production',

}

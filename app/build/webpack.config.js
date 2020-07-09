const path = require('path')
const webpack = require('webpack')
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')
const ExtractTextWebpackPlugin = require("extract-text-webpack-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const config = {
    // __dirname 指向当前build目录（绝对路径）
    entry: {
        index: path.join(__dirname, '../src/index.js'),
        // test: path.join(__dirname, '../src/test.js')
    }, //入口文件，src下的index.js
    output: {
        path: path.join(__dirname, '../dist'), // 出口目录，dist文件
        filename: '[name]_[hash].js', //这里name就是打包出来的文件名，因为是单入口，就是main
        publicPath: '/'
    },
    // 代码分离
    optimization: {
        splitChunks: {
            chunks: 'all',
        }
    },
    //开发环境推荐：cheap-module-eval-source-map     生产环境推荐：cheap-module-source-map
    devtool: "cheap-module-eval-source-map",
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: path.join(__dirname, 'src'), //限制范围，提高打包速度
                exclude: /node_modules/, // 排除
                query: {
                    presets: ['es2015'] // env转换es6 stage-0转es7 react转react
                }
            },
            // {
            //     test: /\.css$/,
            //     use: ['style-laoder', 'css-loader'],
            //     include: path.join(__dirname, 'src'), //限制范围，提高打包速度
            //     exclude: /node_modules/
            // },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/, // 转换文件的匹配正则
                use: ExtractTextWebpackPlugin.extract({
                    fallback: 'style-loader',
                    // publicPath: '../../',
                    //如果需要，可以在 sass-loader 之前将 resolve-url-loader 链接进来
                    use: ['css-loader', 'postcss-loader']
                })
            },
            {

                test: /\.less$/,
                use: ExtractTextWebpackPlugin.extract({
                    use: ["style-loader", "css-loader", "less-loader"], //从前往后执行
                    fallback: 'style-loader'
                })
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)/,
                use: {
                    loader: 'url-loader',
                    options: {
                        name: '[name]_[hash].[ext]',
                        outputPath: 'images/', // 图片输出的路径
                        limit: 5 * 1024 // 小于这个值的时候把图片转成base64
                    }
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf|woff|svg)$/,
                use: 'url-loader'
            },
            {
                test: /\.(htm|html)$/,
                use: 'html-withimg-loader'
            }
        ]
    },

    plugins: [
        new ExtractTextWebpackPlugin({
            filename: '[name]_[hash].css' //放到dist下
        }),
        // new UglifyjsWebpackPlugin(),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        }),
        // 在dist下生成html文件，html原型为template
        new HtmlWebpackPlugin({
            template: 'app/index.html',
            filename: 'index.html',
            chunks: 'index.js',
        }),
        //删除dist目录
        new CleanWebpackPlugin(['dist'], {
            root: path.join(__dirname, '../')
        }),
        new webpack.ProgressPlugin(), // 打包进度
        new webpack.HotModuleReplacementPlugin(), //热更新
        new VueLoaderPlugin(),
        // new webpack.ProvidePlugin({
        //     $: "jquery",
        //     jquery: "jquery"
        // })
    ],
    devServer: {
        contentBase: path.join(__dirname, "../dist"), //静态文件根目录
        port: 9090, // 端口
        host: 'localhost',
        // overlay: true,
        open: true,
        hot: true,
        // hotOnly: false,
        proxy: {
            "/api": {
                target: "http://localhost:3789",
                logLevel: 'debug',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }, //模拟请求
        compress: true // 服务器返回浏览器的时候是否启动gzip压缩
    },
    resolve: {
        alias: {
            '@assets': path.join(__dirname, '../src/assets'),
            '@': path.join(__dirname, '../src'),
            '@dist': path.join(__dirname, '../dist'),
            vue: 'vue/dist/vue.js'
            // $: './src/jquery.js'
        },
        // 省略后缀
        extensions: ['.js', '.json', '.css']
    }

}

// 构建结果输出分析
// if (config.build.bundleAnalyzerReport) { 
//     varBundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin; 
//     webpackConfig.plugins.push(newBundleAnalyzerPlugin()); 
// }


console.log('entry: ' + config.entry)
console.log('output: ' + path.join(__dirname, '../dist'))
console.log('path.resolve: ' + path.resolve())
console.log('__dirname: ' + __dirname)

module.exports = config;


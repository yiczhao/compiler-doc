/**
 * 单独组件打包
 */
var fs = require('fs')
var path = require('path')
var colors = require('colors')
var webpack = require('webpack')
var cssnano = require('cssnano')
var CleanWebpackPlugin = require('clean-webpack-plugin')
var webpack_merge = require('webpack-merge')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var mkdirp = require('mkdirp')
var webpackConfig = require('../webpack.config.js')
var _package = require('../package.json')
var util = require('./util')

var dependFile = util.getFilePath
var readFile = util.readFile



var plugins = webpackConfig.plugins.filter((plugin)=>{
    if(plugin instanceof CleanWebpackPlugin) return false
    return true
})
webpackConfig.plugins = plugins


var dirMap = {
    directives:path.resolve(__dirname, '../src/ks/directives'),
    components:path.resolve(__dirname, '../src/ks/components')
}

Object.keys(dirMap).map((key)=>{
    
    dependFile(dirMap[key])
        .then((vals)=>{
            // console.log(vals)
            vals.forEach((val)=>{
                // console.log(val)
                build(val.fileName,val.filePath,val.version,key)
            })
        })
        .catch((err)=>{
            console.log(err.red)
        })
})






var count = 0

// 调整配置、打包
function build(name, file_path,version,root) {
    // console.log(file_path)
    var output_path = path.resolve(__dirname, '../min/ks/'+ root +'/' + name.toLowerCase() + '/')
    version = version ? '.'+version : ''
    // console.log(output_path)

    var config = webpack_merge.smart(webpackConfig, {
            entry: {},
            output: {
                path: output_path,
                libraryTarget: 'umd',
                filename: 'index'+version+'.js'
                    // library : converName(name)
            },
            vue: {
                loaders: {
                    css: ExtractTextPlugin.extract('vue-style-loader', 'css-loader'),
                    scss: ExtractTextPlugin.extract('vue-style-loader', 'css-loader!ks-autobem-loader?type=css!sass-loader'),
                    sass: ExtractTextPlugin.extract('vue-style-loader', 'css-loader!ks-autobem-loader?type=css!sass-loader'),
                    html: 'vue-html-loader!ks-autobem-loader?type=html'
                }
            },
            plugins: [
                // new CleanWebpackPlugin(['ks'], {
                //     root: path.resolve(__dirname,'../min'),
                //     verbose: true,
                //     dry: false
                // }),
                new webpack.optimize.UglifyJsPlugin({
                    compress: {
                        warnings: false
                    }
                }),
                new webpack.optimize.OccurenceOrderPlugin()
            ]
        })
        // config = webpack_merge.smart(config,append_config)
    config.entry[name] = [path.resolve(__dirname, file_path)]

    var time_start = new Date().getTime()
        // touch(config.output.path)
        // return
    webpack(config, function(err, stats) {
        if (err) throw err

        // console.log(path.resolve(output_path, './style.css'))
        // return 
        ++count
        // console.log(count)
        readFile(path.resolve(output_path, './app.css'))
            .then((res) => {
                return cssnano.process(res.data.toString(), {
                    zindex: false
                })
            }).then((result) => {
                fs.writeFileSync(path.resolve(output_path, './style'+version+'.css'), result.css)
                fs.unlinkSync(path.resolve(output_path, './app.css'))
                trace_progress(stats, name, count, time_start)
            }).catch((e) => {
                console.log('无样式...'.red)
                trace_progress(stats, name, count, time_start)
            })

    })
}


// 打印进度
function trace_progress(stats, name, count, time_start) {
    var assets = stats.toJson().assets[0]
    var offset = Math.round((new Date().getTime() - time_start) / 1000)
    var message = `[${count < 10 ? ('0' + count) : count}]  ` + fill_white_space(`${offset}s`, 10) + fill_white_space('umd ' + name, 25) + `${(name, assets.size / 1024).toFixed(2)}k`
    console.log(message.green)
}


// 创建目录
var touch = function(filePath) {
    mkdirp(filePath, function() {
        fs.open(filePath + '/style.css', 'w', function(err) {})
    })
}

// 补齐命令行中的空白
function fill_white_space(str, len) {
    return (str + ' '.repeat(20)).substr(0, len)
}
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
var argv = getArgv()
// console.log(argv)

webpackConfig.plugins = webpackConfig.plugins.filter((plugin)=>{
    if(plugin instanceof CleanWebpackPlugin) return false
    return true
})


var dirMap = {
    directives:path.resolve(__dirname, '../src/ks/directives'),
    components:path.resolve(__dirname, '../src/ks/components')
}


Object.keys(dirMap).map((key)=>{
    
    dependFile(dirMap[key])
        .then((vals)=>{
            // console.log(vals)
            var matchStrs = ''
            if(argv.length){
                vals = vals.filter((val)=>{
                    return ~argv.indexOf(val.fileName)
                })
                matchStrs = vals.map((val)=>{
                    return val.fileName
                })

                argv = argv.sort()
                matchStrs = matchStrs.sort()
                // console.log((argv.join(' ')))
                // console.log((matchStrs.join(' ')))
                matchStrs = (argv.join(' ')).replace(matchStrs.join(' '),'')
                if(matchStrs) {
                    console.warn((`${key}中没找到模块:${matchStrs} ✘ `).grey.bgWhite)
                }else{
                    console.log((`${key}中找到模块 : ${argv.join(' ')} ️✔`).green)
                    console.log(('☞  构建中 ...').green)
                }
                    
            }
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
    // console.log(file_path,name)
    var outPath = path.resolve(__dirname, '../min/ks/'+ root +'/' + name + '/')
    var dotVersion = ''

    version = version || ''
    dotVersion = version && '.'+version
    // console.log(outPath)

    var config = webpack_merge.smart(webpackConfig, {
            entry: {},
            output: {
                path: outPath,
                libraryTarget: 'umd',
                filename: 'index'+dotVersion+'.js'
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

        // console.log(path.resolve(outPath, './style.css'))
        // return 
        ++count
        // console.log(count)
        readFile(path.resolve(outPath, './app.css'))
            .then((res) => {
                return cssnano.process(res.data.toString(), {
                    zindex: false
                })
            }).then((result) => {
                fs.writeFileSync(path.resolve(outPath, './style'+dotVersion+'.css'), result.css)
                fs.unlinkSync(path.resolve(outPath, './app.css'))
                traceProgress(stats, name, version, count, time_start)
            }).catch((e) => {
                console.warn('无样式...'.yellow)
                traceProgress(stats, name, version, count, time_start)
            })

    })
}


// 打印进度
function traceProgress(stats, name, version, count, time_start) {
    var assets = stats.toJson().assets[0]
    var offset = Math.round((new Date().getTime() - time_start) / 1000)
    var message = `[${count < 10 ? ('0' + count) : count}]  `
                    + fillWhiteSpace(`${offset}s`, 10) 
                    + fillWhiteSpace('umd ' + name , 25) 
                    + fillWhiteSpace('V:' + version , 15) 
                    + `${(name, assets.size / 1024).toFixed(2)}k`
    console.log(message.green)
}


// 创建目录
var touch = function(filePath) {
    mkdirp(filePath, function() {
        fs.open(filePath + '/style.css', 'w', function(err) {})
    })
}

// 补齐命令行中的空白
function fillWhiteSpace(str, len) {
    return (str + ' '.repeat(20)).substr(0, len)
}

/**
 * [getArgv 获取npm run 中的参数]
 * @return {[type]} [description]
 */
function getArgv() {
    var argv
    try {
        argv = JSON.parse(process.env.npm_config_argv).original
    } catch (ex) {
        argv = process.argv
    }
    return argv.slice(2)
}

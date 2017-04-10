var fs = require('fs')
var path = require('path')


// console.log(path.extname('/Users/zdzdesigner/Documents/KS/KS-FED/compiler-doc/src/ks/directives/index.js/KsLimitNumberFixed.js/index.js'))

module.exports = {
    getFilePath:getFilePath,
    readFile:readFile
}

var VERSION_RE = /VERSION[\s+]?:[\s+]?['|"](.+?)['|"]/gm
var IMPORT_RE = /import\s+([\s\S]+?)\s+from\s+'(.+?)'/gm

function getFilePath(dir){
    
    var rootDir = dir

    path.extname(dir) || (dir = dir+'/index.js')
    
    return new Promise((resolve,reject)=>{

        readFile(dir)
            .then((result)=>{
                // console.log(result.data)
                getDirs(result.data,rootDir).then((inners)=>{
                        // console.log(inners)
                        // console.log(Array.prototype.slice.call(inners))
                        
                        var files = inners.reduce((arr,inner)=>{
                            return arr.concat(inner)
                        },[])
                        // files.forEach((val)=>{
                        //     console.log(val)
                        // })
                        resolve(files)
                        
                    })

                // console.log(dirs.toString())
            })

    })
}




/**
 * [getDirs 解析文件中的 import key from path ,返回fileName and filePath]
 * @param  {[type]} data [内容]
 * @param  {[type]} dir  [文件路径]
 * @return {[type]}      [Promise]
 */
function getDirs(data,dir){
    // console.log(data,dir)
    
    var dirs = matchFrom(data)
    // console.log(dirs)

    // return
    
    var filePaths = []
    
    var promiseAllDir = dirs.map((file)=>{

        var subDirPath = path.resolve(dir,file.val)
        // return
        return new Promise((resolve,reject)=>{
            // var curDir = subDirPath
            if(path.extname(subDirPath)){
                resolve({
                    fileName:file.name,
                    filePath:subDirPath
                })
                return
            }
            // console.log(subDirPath)
            readFile(subDirPath+'/index.js')
                .then((result)=>{
                    // console.log(inner)
                    var dirs = matchFrom(result.data).map((file)=>{
                        return {
                            fileName:file.name,
                            filePath:path.resolve(subDirPath,file.val)
                        }
                    })
                    // console.log(dirs.length)
                    
                    var fileInfos = dirs.map((fileInfo)=>{
                        return readFile(fileInfo.filePath)
                    })
                    // console.log(fileInfos)
                    Promise.all(fileInfos)
                        .then((res)=>{
                                
                            res.forEach((item)=>{
                                // console.log(item.path)    
                                if(item.data.match(VERSION_RE)){
                                    // console.log(dirs)
                                    dirs.forEach((sub)=>{
                                        if(sub.filePath == item.path){
                                            sub.version = VERSION_RE.exec(item.data)[1]
                                        }
                                    })
                                    // console.log(item.path,VERSION_RE.exec(item.data)[1])
                                }
                            })
                            // console.log(dirs)
                            resolve(dirs)
                            
                        }).catch((err)=>{
                            console.log(err)
                        })
                    
                })
                .catch((err)=>{
                    console.error(err)
                })
        })
    })

    
    return Promise.all(promiseAllDir)
    // console.log(promiseAllDir)
}


function matchFromVal(data){
    return data.match(/from\s+('.+?')/gm).map((matchVal)=>{
        return matchVal.match(/'(.+?)'/)[1]
    })
}
/**
 * [matchFrom 匹配名和文件路径]
 * @param  {[type]} data [description]
 * @return {[type]}      [description]
 */
function matchFrom(data){
    var fileInfos = []
    data.replace(IMPORT_RE,function(val,$1,$2){
        fileInfos.push({name:$1,val:$2})
    })
    return fileInfos
}

// 读取文件，返回内容
function readFile(filePath) {
    return new Promise(function(resolve, reject) {
        filePath = path.extname(filePath) ? filePath : filePath+'.js'
        fs.readFile(filePath,'utf8', function(err, data) {
            if (err) {
                // console.log('read file error',filePath)
                reject(err)
            }

            resolve({path:filePath,data:data})
        })
    })
}

var fs = require('fs')
var path = require('path')


// console.log(path.extname('/Users/zdzdesigner/Documents/KS/KS-FED/compiler-doc/src/ks/directives/index.js/KsLimitNumberFixed.js/index.js'))

module.exports = {
    getFilePath:getFilePath,
    readFile:readFile
}

var VERSION_RE = /VERSION[\s+]?:[\s+]?['|"](.+?)['|"]/gm
var IMPORT_RE = /import\s+([\s\S]+?)\s+from\s+'(.+?)'/gm
var BIG_VERSION_RE = /\sKs[A-Z].*_v\d+$/g

function getFilePath(dir){
    
    var rootDir = dir

    path.extname(dir) || (dir = dir+'/index.js')
    
    return new Promise((resolve,reject)=>{

        readFile(dir)
            .then((result)=>{
                // console.log(result.data)
                // console.log(getDirs(result.data,rootDir))
                getDirs(result.data,rootDir)
                    .then((inners)=>{
                        // console.log(inners)
                        // console.log(Array.prototype.slice.call(inners))
                        
                        var files = inners.reduce((arr,inner)=>{
                            return arr.concat(inner)
                        },[])
                        // files.forEach((val)=>{
                        //     console.log(val)
                        // })
                        resolve(files)
                        
                    }).catch((err)=>{
                        console.error(err)
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

    var filePaths = []
    
    var promiseAllDir = dirs.map((file)=>{

        return new Promise((resolve,reject)=>{
            // resolve('fileInfos')
            targetFile(file,dir)
                .then((result)=>{
                    // console.log(result)
                    // Promise.all(result)
                    var finalDirs = result.reduce((arr,item)=>{
                        return arr.concat(item)
                    },[])

                    // console.log(finalDirs)
                    var fileInfos = finalDirs.map((fileInfo)=>{
                        return readFile(fileInfo.filePath)    
                    })
                    // resolve('fileInfos')
                    // console.log(fileInfos)
                    Promise.all(fileInfos)
                        .then((res)=>{
                                
                            res.forEach((item)=>{
                                // console.log(item.path)    
                                if(item.data.match(VERSION_RE)){
                                    // console.log(dirs)
                                    finalDirs.forEach((sub)=>{
                                        if(sub.filePath == item.path){
                                            sub.version = VERSION_RE.exec(item.data)[1]
                                        }
                                    })
                                    // console.log(item.path,VERSION_RE.exec(item.data)[1])
                                }
                            })
                            // console.log(finalDirs)
                            resolve(finalDirs)
                            
                        }).catch((err)=>{
                            console.log(err)
                        })
                })
                    
        }).catch((err)=>{
            console.error(err)
        })
       
    })

    
    // console.log(promiseAllDir)
    // return promiseAllDir
    return Promise.all(promiseAllDir)
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


function filterFile(filePath){
    var temp

    if(~['.js','.vue'].indexOf(path.extname(filePath))){
        temp = {}
    }else{
        readFile(filePath+'/index.js')
            .then((res)=>{
                matchFrom(res.data).reduce((arr,key)=>{
                    filterFile(filePath+key)
                },[])
                
            })
    }
    return temp

}

function targetFile(file,dir){
    var subDirPath = path.resolve(dir,file.val)
    return new Promise(function(resolve,reject){
        if(~['.js','.vue'].indexOf(path.extname(subDirPath))){
            // console.log(path.extname(subDirPath))
            resolve({
                fileName:file.name,
                filePath:subDirPath
            })
        }else{
            // console.log(subDirPath)
            var result = readFileSync(subDirPath+'/index.js')
                    
                    
            var dirs = matchFrom(result.data).reduce((arr,file)=>{
                            // console.log(subDirPath,file)
                            return arr.concat(targetFile(file,subDirPath))
                        },[])
            // console.log(dirs)
            // return dirs
            Promise.all(dirs)
                .then((result)=>{
                    resolve(result)
                }).catch((err)=>{
                    console.error(err)
                })
        }    
    }).catch((err)=>{
        console.error(err)
    })
    
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

function readFileSync(filePath) {
    filePath = path.extname(filePath) ? filePath : filePath+'.js'
    var data = fs.readFileSync(filePath,'utf8')
    if(data) return {path:filePath,data:data}
}

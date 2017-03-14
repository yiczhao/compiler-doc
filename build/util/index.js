var fs = require('fs')
var path = require('path')


// console.log(path.extname('/Users/zdzdesigner/Documents/KS/KS-FED/compiler-doc/src/ks/directives/index.js/KsLimitNumberFixed.js/index.js'))

module.exports = getFilePath

function getFilePath(dir){
    
    var rootDir = dir

    path.extname(dir) || (dir = dir+'/index.js')
    
    return new Promise((resolve,reject)=>{

        read_file(dir)
            .then((data)=>{
                // console.log(data)
                getDirs(data,rootDir).then((inners)=>{
                    
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





function getDirs(data,dir){
    
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
            }
            
            read_file(subDirPath+'/index.js')
                .then((inner)=>{
                    // console.log(inner)
                    var dirs = matchFrom(inner).map((file)=>{
                        return {
                            fileName:file.name,
                            filePath:path.resolve(subDirPath,file.val)
                        }
                    })
                    resolve(dirs)
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
    data.replace(/import\s+([\s\S]+?)\s+from\s+'(.+?)'/gm,function(val,$1,$2){
        fileInfos.push({name:$1,val:$2})
    })
    return fileInfos
}

// 读取文件，返回内容
function read_file(file_path) {
    return new Promise(function(resolve, reject) {
        fs.readFile(file_path,'utf8', function(err, data) {
            if (err) {
                console.log('read file error',file_path)
                reject(err)
            }

            resolve(data)
        })
    })
}
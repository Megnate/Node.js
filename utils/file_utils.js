//读取文件的工具方法
const fs = require('fs')  //拿到fs这个模块
module.exports.getFileJsonData = (filePath) => {
    //此时return的数据就会在浏览器中展示出来，所以需要根据文件路径来读取文件内容
    //return 'hello'，但是读取文件时异步的，所以不能使用return返回文件数据

    //对于异步任务，可以包含在一个Promise的对象之中
    return new Promise((resolve, reject) => {
        //fs.readFile(文件路径, 文件编码, 文件获取成功或失败的函数)
        //error:读取失败之后对文件的布置
        //data:读取成功之后对文件数据的布置
        //据说readFile有可以异步读取数据的方法，所以这个方法不一定正确
        fs.readFile(filePath, 'utf-8', (error, data) => {
            if (error) {
                //读取文件失败，将读取的数据传递到reject中
                reject(data)
            } else {
                //读取文件成功，将读取成功后的数据传递到resolve参数中
                resolve(data)
            }
        })
    })
}
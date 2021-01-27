//处理业务逻辑的中间件，读取json文件中的数据并响应给前端浏览器
const path = require('path')
const fileUtils = require('../utils/file_utils')
module.exports = async (ctx, next) => {
    //根据url获取数据，需要的是文件数据的绝对路径
    const url = ctx.request.url
    let filePath = url.replace('/api', '')
    filePath = '../data' + filePath + '.json'
    path.join(__dirname, filePath)

    try {
        //调用在file_utils.js文件中写入的方法来返回一定的值
        //通过await方法来获取Promise对象中的数据
        const ret = await fileUtils.getFileJsonData(filePath)
        //设置响应体，这样就可以将数据返回到响应体中
        ctx.response.body = ret
    } catch (e) {
        const Msg = {
            message: '读取文件内容失败，文件资源不存在',
            status: 404
        }
        ctx.response.body = JSON.stringify(Msg)
    }
    await next()
}
//想获取某一个json文件中的数据内容的话，可以在网址中输入其名字产看就可以了
//127.0.0.1:端口/api/json文件名
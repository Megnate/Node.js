//设置响应头的中间件
module.exports = async (ctx, next) => {
    const contentType = 'application/json; charset=utf-8'
    ctx.set('Conten-Type', contentType)
    //此时这里可以设置响应体：ctx.response.body = '{"success" : true}'
    //响应体也可以在koa_response_data.js文件中设置，这样的话就可以动态地获取数据然后返回到响应体中了
    await next()
}
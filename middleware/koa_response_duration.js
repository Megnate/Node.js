//计算服务器消耗时长的中间件
//这个是第一层中间件
//这个响应头可以在浏览器中检查所得，可以发现在Response Header中多了一项：X-Response-Time
module.exports = async (ctx, next) => {
    //记录开始时间
    const start = Date.now()
    //让内层中间件得到执行
    await next()
    //记录结束时间
    const end = Date.now()
    const duration = end - start
    //设置响应头
    ctx.set('X-Response-Time'. duration + 'ms')
}
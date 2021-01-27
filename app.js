//服务器的入口文件
//创建koa对象
const Koa = require('koa')
const app = new Koa()
//第一层中间件
const DurationWare = require('./middleware/koa_response_duration')
app.use(DurationWare)
//第二层中间件
const HeaderWare = require('./middleware/koa_response_header')
app.use(HeaderWare)
//第三层中间件
const DataWare = require('./middleware/koa_response_data')
app.use(DataWare)
//绑定端口号 3000
app.listen(3000)
//通过在终端中输入：node app.js 启动服务器
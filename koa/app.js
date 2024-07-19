// 导入koa
const Koa = require('koa')
const router = require('./Router/index')
// 创建koa服务器
const app = new Koa()

// 导入cors跨域
const cors = require('koa-cors')
// 导入获取post数据
const {koaBody} = require('koa-body')
// 使用中间件
app.use(koaBody())
app.use(cors())
// 开始处理请求

// 继续处理请求
// ...

app.use(router)
// 监听端口号
app.listen(8080, () => {
console.log('服务启动成功: http://localhost:8080')
})
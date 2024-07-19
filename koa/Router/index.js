const Router = require('koa-Router')
const userdata=require('../data/User.json')
const jwt=require('jsonwebtoken')

const router = new Router()
router.post('/login',ctx=>{
    let {username,password}=ctx.request.body;
    let User=userdata.find(item=>item.username===username&&item.password===password)
    const token=jwt.sign({
  data: User
}, '李冰旭', { expiresIn: 60 * 60 });
    if(User){
        ctx.body={
            code:200,
            msg:"登录成功",
            user:User,
            token
        }
    }else{
        ctx.body={
            code:403,
            msg:"登录失败"
        }
    }
})
router.get('/list',ctx=>{
    ctx.body={
        code:200,
        msg:"获取成功"
    }
})
module.exports = router
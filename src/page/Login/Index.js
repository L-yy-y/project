import React from 'react'
import './index.scss'
import { Button, Checkbox, Form, Input,message } from 'antd';
import { UserLogin } from '../../api';

function Index() {
  const [messageApi, contextHolder] = message.useMessage();

  const onFinish = (values) => {
  console.log('Success:', values);
  let params={
    username:values.username, 
    password:values.password,
  }
   //登录接口调用
UserLogin(params).then(res=>{
  console.log(res)
  if(res.data.code===200)
  {
     messageApi.open({
      type: 'success',
      content:res.data.msg,
    });
   setInterval(()=>{
     window.location.href='/'
   },1000)
  }else{
     messageApi.open({
      type: 'error',
      content: res.data.msg,
    });
  }

})

  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
 

  return (
    <div className='box'>
     
        <div className='main'>
           <div className='box-title'>可画</div>
              <div className='LgDiv'>
                <h2>欢迎回来!</h2>
                 {contextHolder}
                   <Form
                    name="basic"
                    labelCol={{
                      span: 8,
                    }}
                    wrapperCol={{
                      span: 16,
                    }}
                    style={{
                      maxWidth: 600,
                    }}
                    initialValues={{
                      remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                  >
                    
                    <Form.Item
                      label="用户名:"
                      name="username"
                      rules={[
                        {
                          required: true,
                          message: 'Please input your username!',
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>

                    <Form.Item
                      label="密码:"
                      name="password"
                      rules={[
                        {
                          required: true,
                          message: 'Please input your password!',
                        },
                      ]}
                    >
                      <Input.Password />
                    </Form.Item>

                    <Form.Item
                      name="remember"
                      valuePropName="checked"
                      wrapperCol={{
                        offset: 8,
                        span: 16,
                      }}
                    >
                      <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item
                      wrapperCol={{
                        offset: 8,
                        span: 16,
                      }}
                    >
                      <Button type="primary" htmlType="submit">
                        登录
                      </Button>
                    </Form.Item>
                  </Form>
              </div>
        </div>
    </div>
  )
}

export default Index

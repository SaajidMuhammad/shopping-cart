import React from 'react'
import "./Auth.css"
import { Form, Input, Checkbox, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';


const Login = () => {
  const [form] = Form.useForm();

  const onFinish = (() => {

  })

  return (
    <div className='wrapper__Auth'>

      <div className='login-header__Auth'>User Login</div>

      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          className='input-wrapper__Auth'
          rules={[{ required: true, message: 'Please input your Username!' }]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="password"
          className='input-wrapper__Auth'
          rules={[{ required: true, message: 'Please input your Password!' }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>


        <Form.Item
          className='input-wrapper__Auth'

        >
          <Button type="primary" block htmlType="submit" className="login-form-button">
            Log in
          </Button>

          <div style={{ textAlign: "center", marginTop: "20px" }}>
            Or <a href="">register now!</a>
          </div>

        </Form.Item>
      </Form>
    </div>
  )
}

export default Login
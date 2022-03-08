import React from 'react'
import "./Auth.css"
import { Form, Input, Checkbox, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';


const Signup = () => {
  const [form] = Form.useForm();

  const onFinish = (() => {

  })

  return (
    <div className='wrapper__Auth'>

      <div className='login-header__Auth'>User Signup</div>

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
          name="phone"
          className='input-wrapper__Auth'
          rules={[{ required: true, message: 'Please input your Phone Number!' }]}
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
            Sign up
          </Button>

          <div style={{ textAlign: "center", marginTop: "20px" }}>
            Already have an account? <a href="">login now!</a>
          </div>

        </Form.Item>
      </Form>
    </div>
  )
}

export default Signup
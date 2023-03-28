import React from 'react';
import { Button, Form, Input} from 'antd';
const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  function SignupForm() {
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
      label="Firstname"
      name="Firstname"
      placeholder="First Name"
      rules={[
        {
          required: true,
          message: 'Please input your first name!',
        },
      ]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      label="Lastname"
      name="Lastname"
      placeholder="Last Name"
      rules={[
        {
          required: true,
          message: 'Please input your first name!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Username"
      name="username"
      placeholder="Username"
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
      label="Password"
      name="password"
      placeholder="Password"
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
    </Form.Item>

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
  }

  export default SignupForm;
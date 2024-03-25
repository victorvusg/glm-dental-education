import { Checkbox, Form, Input } from 'antd';
import { credentials } from '../../../constants';
import { useState } from 'react';

interface LoginInformation {
  username: string;
  password: string;
  remember: boolean;
}

const Login = () => {
  const [errorMessage, setErrorMessage] = useState<string>();
  const onLogin = (value: LoginInformation) => {
    if (credentials[value.username] === value.password) {
      console.info('login success');
      onLoginSuccess(value);
    } else {
      setErrorMessage('Wrong username or password');
      console.info('login failed');
    }
  };

  const onLoginSuccess = (value: LoginInformation) => {
    localStorage.setItem('authentication', JSON.stringify(value));
    window.location.href = '/chat';
  };

  return (
    <div>
      <h3 className='font-bold mb-16'>Please login to use the application</h3>
      <Form
        name='basic'
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 800 }}
        initialValues={{ remember: true }}
        onFinish={(value) => {
          onLogin(value);
        }}
        onFinishFailed={() => {}}
        autoComplete='off'
      >
        <Form.Item
          label='Username'
          name='username'
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label='Password'
          name='password'
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name='remember'
          valuePropName='checked'
          wrapperCol={{ offset: 12, span: 16 }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ span: 24 }}>
          <a href='/sign-up' className='mr-8'>
            Sign up for new account
          </a>
          <button className='bg-blue-500'>
            <p className='text-white'>Login</p>
          </button>
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 5, span: 24 }}>
          <span className='text-red-500'>{errorMessage}</span>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;

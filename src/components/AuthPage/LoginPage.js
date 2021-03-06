import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { initializeForm, login } from '../../state/actions-creators';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './LoginPage.css';

function LoginPage(props) {
  const dispatch = useDispatch();

  const { errorMessage, pending } = useSelector(state => state.auth);
  const [error, setError] = useState(null);
  const [form] = Form.useForm();
  const onSubmitHandler = values => {
    // event.preventDefault();
    let body = {
      userId: values.Id,
      password: values.password
    };
    console.log(body);

    // login 요청
    dispatch(login(body));
  };

  useEffect(() => {
    if (errorMessage) {
      console.log(errorMessage);
      if (errorMessage === '아이디비밀번호오류') {
        setError('아이디/비밀번호 오류');
        form.resetFields(['Id', 'password']);
        return;
      }
    }
  }, [form, errorMessage, setError]);

  useEffect(() => {
    dispatch(initializeForm());
  }, [dispatch]);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100vh',
        flexDirection: 'column'
      }}
    >
      <Form
        form={form}
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true
        }}
        onFinish={onSubmitHandler}
      >
        <h2> 관리자 로그인</h2>
        <Form.Item
          name="Id"
          rules={[
            {
              required: true,
              message: '아이디를 입력해 주세요'
            }
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Id"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: '비밀번호를 입력해주세요'
            }
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        {
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              color: 'red'
            }}
          >
            {error}
          </div>
        }
        <Form.Item>
          <Button
            style={{ float: 'right' }}
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            로그인{' '}
          </Button>
        </Form.Item>
      </Form>

      <Form
        style={{
          alignItems: 'center',
          color: 'gray'
        }}
      >
        <Link to="/register" className="Footer">
          회원가입
        </Link>
      </Form>
    </div>
  );
}

export default LoginPage;

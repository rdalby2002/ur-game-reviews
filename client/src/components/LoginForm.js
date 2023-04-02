import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate} from 'react-router-dom';

const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

function LoginForm() {
  const navigate = useNavigate();
  
  return (
    <div>

    <Form
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
    >

      <Form.Group className="mb-3" controlId="username">
        <Form.Label>Username</Form.Label>
        <Form.Control type="username" placeholder="username" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Button variant="dark" type="submit" onClick={() => navigate("/dashboard")}>
        Welcome!
      </Button>
      {' '}
      <Button variant='dark' onClick={() => navigate(-1)}>Go back</Button>
    </Form>
    </div>
  );
}

export default LoginForm;
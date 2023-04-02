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



function SignupForm() {
  const navigate = useNavigate();

  return (
    <Form
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
    >
      <Form.Group className="mb-3" controlId="firstname">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="email" placeholder="Enter first name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="lastname">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="lastname" placeholder="Enter last name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Button variant="dark" type="submit" onClick={() => navigate("/dashboard")}>
        Submit
      </Button> {' '}
      <Button variant='dark' onClick={() => navigate(-1)}>Go back</Button>
    </Form>
  );
}

export default SignupForm;
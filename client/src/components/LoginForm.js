import React from 'react';
import { useNavigate} from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/Auth';


function LoginForm() {
  const navigate = useNavigate();
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  function LoginUser() {

     if ( username === '' || password === '') {
      // error
      alert("Please input requested information above!")
      return;
    }

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "test", username, password }),
    })
      .then(() => alert("Message sent!"))
      .catch((error) => alert(error));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await LoginUser()
      navigate("/dashboard")
    } catch (error) {
      navigate("/login")
    }

  }

  return (
    <div>

    <Form onSubmit={handleSubmit}>

      <Form.Group onSubmit={handleSubmit} className="mb-3" controlId="username">
        <Form.Label className='info'>Username</Form.Label>
        <Form.Control type="text" required placeholder="username" onChange={(e) => setUsername(e.target.value)} />
      </Form.Group>

      <Form.Group onSubmit={handleSubmit} className="mb-3" controlId="formBasicPassword">
        <Form.Label className='info'>Password</Form.Label>
        <Form.Control  type="password" required placeholder="password" onChange={(e) => setPassword(e.target.value)} />
      </Form.Group>

      <Button variant="dark" className='button' type="submit">
        Welcome!
      </Button>
      {' '}
      <Button variant='dark' className='button' onClick={() => navigate(-1)}>Go back</Button>
    </Form>
    </div>

 
  );
};

export default LoginForm;

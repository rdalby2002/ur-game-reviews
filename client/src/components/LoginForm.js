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

  const CheckTextInput = (event) => {
    const blurredEl = event.target.getAttribute("id");

    if (blurredEl === "username") {
      // error
      alert('Please enter a username!')
      return;
    } else if (blurredEl === "password") {
      // error
      alert('Please enter your password!')
      return;
    }

    //Checked Successfully
    //Do whatever you want
    alert('Success');
  };

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  function handleSubmit(e) {
    e.preventDefault();

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

  return (
    <div>

    <Form>

      <Form.Group onSubmit={handleSubmit} className="mb-3" controlId="username">
        <Form.Label>Username</Form.Label>
        <Form.Control type="username" placeholder="username" onBlur={CheckTextInput} onChange={(e) => setUsername(e.target.value)} />
      </Form.Group>

      <Form.Group onSubmit={handleSubmit} className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control  type="password" placeholder="password" onBlur={CheckTextInput} onChange={(e) => setPassword(e.target.value)} />
      </Form.Group>

      <Button variant="dark" type="submit" onClick={() => navigate("/dashboard")}>
        Welcome!
      </Button>
      {' '}
      <Button variant='dark' onClick={() => navigate(-1)}>Go back</Button>
    </Form>
    </div>

 
  );
};

export default LoginForm;

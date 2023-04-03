import React from 'react';
import { useNavigate} from 'react-router-dom';
import { Form, Button,} from 'react-bootstrap';


import { useMutation } from '@apollo/react-hooks'
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/Auth';

function SignupForm() {
  const navigate = useNavigate();

  const [firstname, setFistname] = React.useState("");
  const [lastname, setLastname] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");


  const CheckTextInput = (event) => {
    const blurredEl = event.target.getAttribute("id");

    if (blurredEl === "firstname") {
      // error
      alert('Please enter your first name!')
      return;
    } else if (blurredEl === "lastname") {
      // error
      alert('Please enter your last name!')
      return;
    }  else if (blurredEl === "email") {
      // error
      alert('Please enter email!')
      return;
    } else if (blurredEl === "username") {
      // error
      alert('Please enter username!')
      return;
    } else if (blurredEl === "password") {
      // error
      alert('Please enter password!')
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

    if (firstname === '' || lastname === '' || username === '' || email === '' || password === '') {
      // error
      alert("Please input requested information above!")
      return;
    }

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "test", firstname, lastname, username, email, password }),
    })
      .then(() => alert("Message sent!"))
      .catch((error) => alert(error));
  }

  return (
    <>
    <Form
  
    >
      <Form.Group className="mb-3" controlId="firstname" onSubmit={handleSubmit}>
        <Form.Label>First Name</Form.Label>
        <Form.Control type="email" placeholder="Enter first name" onBlur={CheckTextInput} onChange={(e) => setFistname(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="lastname" onSubmit={handleSubmit}>
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="lastname" placeholder="Enter last name" onBlur={CheckTextInput} onChange={(e) => setLastname(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="username" onSubmit={handleSubmit}>
        <Form.Label>Username</Form.Label>
        <Form.Control type="username" placeholder="Enter username" onBlur={CheckTextInput} onChange={(e) => setUsername(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail" onSubmit={handleSubmit}>
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onBlur={CheckTextInput} onChange={(e) => setEmail(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword" onSubmit={handleSubmit}>
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onBlur={CheckTextInput} onChange={(e) => setPassword(e.target.value)}/>
      </Form.Group>

      <Button variant="dark" type="submit" onClick={() => navigate("/dashboard")}>
        Submit
      </Button> {' '}
      <Button variant='dark' onClick={() => navigate(-1)}>Go back</Button>
    </Form>  
    </>
  );
};

export default SignupForm;
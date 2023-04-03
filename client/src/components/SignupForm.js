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

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  function createUser() {
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
      .then(() => alert("User created!"))
      .catch((error) => alert(error));

  }

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(e.target)

    try {
      await createUser()
      navigate("/dashboard")
    } catch (error) {
      navigate("/signup")
    }
    
  }

  return (
    <>
    <Form 
  onSubmit={handleSubmit}
    >
      <Form.Group className="mb-3" controlId="firstname" onSubmit={handleSubmit}>
        <Form.Label className='info'>First Name</Form.Label>
        <Form.Control type="text" required placeholder="Enter first name"  onChange={(e) => setFistname(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="lastname" onSubmit={handleSubmit}>
        <Form.Label className='info'>Last Name</Form.Label>
        <Form.Control type="text" required placeholder="Enter last name"  onChange={(e) => setLastname(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="username" onSubmit={handleSubmit}>
        <Form.Label className='info'>Username</Form.Label>
        <Form.Control type="text" required placeholder="Enter username"  onChange={(e) => setUsername(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail" onSubmit={handleSubmit}>
        <Form.Label className='info'>Email address</Form.Label>
        <Form.Control type="email" required placeholder="Enter email"  onChange={(e) => setEmail(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword"  onSubmit={handleSubmit}>
        <Form.Label className='info'>Password</Form.Label>
        <Form.Control type="password" required placeholder="Password"  onChange={(e) => setPassword(e.target.value)}/>
      </Form.Group>

      <Button variant="dark" className='button' type="submit">
        Submit
      </Button> {' '}
      <Button variant='dark' className='button' onClick={() => navigate(-1)}>Go back</Button>
    </Form>  
    </>
  );
};

export default SignupForm;
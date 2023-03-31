import React from "react";
import { QUERY_NEW } from "../utils/queries";
import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function NewReleases() {

  const { loading, data } = useQuery(QUERY_NEW);
  const newReleases = data?.newReleases || [];

  const token = Auth.loggedIn() ? Auth.getToken() : null;

  if (!token) {
    return false;
  }

  if (loading) {
    return <h2>LOADING...</h2>;
  }
  
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top">{newReleases}</Card.Img>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default NewReleases;
import React from "react";
import { QUERY_NEW } from "../utils/queries";
import Auth from '../utils/Auth';
import { useQuery } from '@apollo/client';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function TopRated() {

  const { loading, data } = useQuery(QUERY_NEW);
  const topRated = data?.topRated || [];

  const token = Auth.loggedIn() ? Auth.getToken() : null;

  if (!token) {
    return false;
  }

  if (loading) {
    return <h2>LOADING...</h2>;
  }
  
  return (
  <section id="toprated">
    <div>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top">{topRated}</Card.Img>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="dark">Go somewhere</Button>
      </Card.Body>
    </Card>

    </div>
    </section>
    

  );
}

export default TopRated;
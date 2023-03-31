import React, { useState, useEffect } from 'react';
import {
  Container,
  Card,
  Col,
  Button,
  Row,
} from 'react-bootstrap';

import { GET_ME } from '../utils/queries';
import { REMOVE_GAME } from '../utils/mutations'
import { useQuery, useMutation } from '@apollo/react-hooks';
import Auth from '../utils/Auth';

import { removeGameId } from '../utils/LocalStorage';


const SavedGames = () => {
  const { loading, data } = useQuery(GET_ME);
  const userData = data?.me || [];
  const [ removeGame, { error }] = useMutation(REMOVE_GAME);


  const handleDeleteGame = async (gameId) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      const response = await removeGame({
        variables: {gameId: gameId}
      });

      if (!response) {
        throw new Error ('something went wrong!');
      }

      removeGameId(gameId);
    } catch (err) {
      console.error(err);
    }
  };


  if (loading) {
    return <h2>LOADING...</h2>;
  }

  return (
    <>
      <div fluid className='text-light bg-dark'>
        <Container>
          <h1>Viewing favorites list!</h1>
        </Container>
      </div>
      <Container>
        <h2 className='pt-5'>
          {userData.savedGames.length
            ? `Viewing ${userData.savedGames.length} saved ${userData.savedGames.length === 1 ? 'game' : 'games'}:`
            : 'You have no saved games!'}
        </h2>
        <Row>
          {userData.savedGames.map((game) => {
            return (
                <Col md= "4">
                <Card key={game.gameId} border='dark'>
                  {game.image ? <Card.Img src={game.image} variant='top' /> : null}
                  <Card.Body>
                    <Card.Title>{game.title}</Card.Title>
                    <p className='small'>Game: {game.title}</p>
                    <Card.Text>{game.description}</Card.Text>
                    <Button className='btn-block btn-danger' onClick={() => handleDeleteGame(game.gameId)}>
                      Delete this Game!
                    </Button>
                  </Card.Body>
                </Card>
                </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default SavedGames;

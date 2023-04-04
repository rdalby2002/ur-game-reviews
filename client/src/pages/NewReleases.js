import React, { useEffect, useState } from "react";
import { GET_ME } from "../utils/queries";
import Auth from '../utils/Auth';
import Button from 'react-bootstrap/Button';
import { Card, Row } from 'react-bootstrap';
import SavedGames from "./SavedGames";
import { getSavedGameIds } from "../utils/LocalStorage";
import { SAVE_GAME, } from "../utils/mutations";
import { useMutation } from '@apollo/client';


function NewReleases() {

  const [savedGameIds, setSavedGameIds] = useState(getSavedGameIds());

  const saveGame = useMutation(SAVE_GAME)

  useEffect(() => {
    return () => getSavedGameIds(savedGameIds)
  })

  const handleSaveGame = async (gameId) => {
    const gameTosave = NewReleases.find((game) => game.gameId === gameId);

    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      await saveGame({
        variables: { game: gameTosave },
        update: cache => {
          const { me } = cache.readQuery({ query: GET_ME });

          cache.writeQuery({ query: GET_ME, data: { me: { ...me, SavedGames: [...me.SavedGames], gameTosave } } })
        }
      });

      setSavedGameIds([...savedGameIds, gameTosave.gameId]);
    } catch (err) {
      console.error(err);
    }

    //  const { loading, data } = useQuery(QUERY_NEW);
    // const newReleases = data?.newReleases || [];

    // if (loading) {
    //   return <h2>LOADING...</h2>;
    // }

  };

  return (
    <>
      <div id='#newreleases'>

        <Row>
          {NewReleases.map((game) => {
            return (
              <Card style={{ width: '18rem' }} key={game.gameId}>
                {game.cover ? (
                  <Card.Img src={game.cover} alt={`Cover for ${game.name}`} variant='top' />
                ) : null}
                <Card.Body>

                  <Card.Title>{game.name}</Card.Title>
                  <Card.Text>
                    {game.summary}
                  </Card.Text>
                  {Auth.loggedIn() && (
                    <Button
                      disabled={SavedGames?.some((getSavedGameIds) => getSavedGameIds === game.gameId)}
                      variant='dark'
                      onClick={() => handleSaveGame(game.gameId)}>
                      {savedGameIds?.some((savedGameId) => savedGameId === game.gameId)
                        ? 'This book has already been saved!'
                        : 'Save this Book!'}
                    </Button>
                  )}
                </Card.Body>
              </Card>
            );
          })}
        </Row>

      </div>
    </>
  );
}

export default NewReleases;
import React from "react";
import { QUERY_NEW } from "../utils/queries";
import Auth from '../utils/Auth';
import { useQuery, useMutation, useState } from '@apollo/client';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import apicalypse from 'apicalypse';
import { SAVE_GAME} from '../utils/mutations';

function TopRated() {

  const { loading, data } = useQuery(QUERY_NEW);
  const topRated = data?.topRated || [];
    const [savedGameIds, setSavedGameIds] = useState(getSavedGameIds());

 //Use the Apollo useMutation() Hook to execute the SAVE_BOOK mutation in the handleSaveBook() function instead of the saveBook() function imported from the API file.
 const [saveGame] = useMutation (SAVE_GAME)
  
 // set up useEffect hook to save `savedBookIds` list to localStorage on component unmount
  // learn more here: https://reactjs.org/docs/hooks-effect.html#effects-with-cleanup
  useEffect(() => {
    return () => saveGameIds(savedGameIds);
  });

   const handleSavGame = async (gameId) => {
    const gameToSave = topRated.find((game) => game.gameId === gameId);

    // get token
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }
     if (loading) {
    return <h2>LOADING...</h2>;
  }
   try {
      const response = await saveGame(gameToSave, token);

      if (!response.ok) {
        throw new Error('something went wrong!');
      }
      setSavedGameIds([...savedGameIds, gameToSave.gameId]);
    } catch (err) {
      console.error(err);
    }
  };


  return (
  <section id="toprated">
    <div>
    <Card style={{ width: '18rem' }}>
      <Card.Img src={game.cover} alt={`The cover for ${game.name}`} variant="top">{topRated}</Card.Img>
      <Card.Body>
        <Card.Title>{game.name}</Card.Title>
        <Card.Text>
          {game.description}
        </Card.Text>
        {Auth.loggedIn() && (
        <Button variant="dark"
        disabled={savedGameIds?.some((savedGameId) => savedGameId === game.gameId)}
                        className='btn-block btn-info'
                        onClick={() => handleSaveGame(game.gameId)}>
                        {savedGameIds?.some((savedGameId) => savedGameId === game.gameId)
                          ? 'This game has already been saved!'
                          : 'Save this Game!'}</Button>
                          )}
      </Card.Body>
    </Card>

    </div>
    </section>
    
  );
}

export default TopRated;
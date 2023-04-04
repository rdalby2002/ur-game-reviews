import React, { useEffect, useState }  from "react";
import { QUERY_NEW , getSavedGameIds} from "../utils/queries";
import Auth from '../utils/Auth';
import { useQuery, useMutation } from '@apollo/client';
import Button from 'react-bootstrap/Button';
import { Card, Row, Col } from 'react-bootstrap';
import { SAVE_GAME} from '../utils/mutations';
import Navbar from "../components/Navbar";

function TopRated() {

//   const { loading, data } = useQuery(QUERY_NEW);
//   const topRated = data?.topRated || [];
//     const [savedGameIds, setSavedGameIds] = useState(getSavedGameIds());

//  //Use the Apollo useMutation() Hook to execute the SAVE_BOOK mutation in the handleSaveBook() function instead of the saveBook() function imported from the API file.
//  const [saveGame] = useMutation (SAVE_GAME)
  
//  // set up useEffect hook to save `savedBookIds` list to localStorage on component unmount
//   // learn more here: https://reactjs.org/docs/hooks-effect.html#effects-with-cleanup
//   useEffect(() => {
//     return () => getSavedGameIds(savedGameIds);
//   });

//    const handleSaveGame = async (gameId) => {
//     const gameToSave = topRated.find((game) => game.gameId === gameId);

//     // get token
//     const token = Auth.loggedIn() ? Auth.getToken() : null;

//     if (!token) {
//       return false;
//     }
//      if (loading) {
//     return <h2>LOADING...</h2>;
//   }
//    try {
//       const response = await saveGame(gameToSave, token);

//       if (!response.ok) {
//         throw new Error('something went wrong!');
//       }
//       setSavedGameIds([...savedGameIds, gameToSave.gameId]);
//     } catch (err) {
//       console.error(err);
//     }
//   };


  return (
    <>
    <Row>

      <Col sm={3}>
        <Navbar />
      </Col>
      <Col sm={9}>
        <Row className="scroll" sm={9} style={{height: '20rem', width: '40rem'}}>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://image.api.playstation.com/vulcan/ap/rnd/202211/0914/TvcIHkYqqln1RGbaFqBeuFp6.jpg?w=440" />
            <Card.Body>
              <Card.Title className="cardinfo">The Witcher 3: The Wild Hunt</Card.Title>
              <Card.Text className="cardinfo">
                Rating: 95%<br/>
                The Witcher 3: Wild Hunt is a 2015 action role-playing game developed and published by CD Projekt. It is the sequel to the 2011 game The Witcher 2: Assassins of Kings and the third game in The Witcher video game series, played in an open world with a third-person perspective.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://cdn.cloudflare.steamstatic.com/steam/apps/367520/capsule_616x353.jpg?t=1667006028" />
            <Card.Body>
              <Card.Title className="cardinfo">Hollow Knight</Card.Title>
              <Card.Text className="cardinfo">
                Rating: 94%<br/>
                Hollow Knight is a challenging 2D action-adventure. You'll explore twisting caverns, battle tainted creatures and escape intricate traps, all to solve an ancient long-hidden mystery. Explore vast, interconnected worlds. Encounter a bizarre collection of friends and foes. Evolve with powerful new skills and abilities.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://assets1.ignimgs.com/2018/10/08/grand-theft-auto-4-and-all-dlc-now-playable-on-xbox-one-kgw7-1539032764777_160w.jpg?width=1280" />
            <Card.Body>
              <Card.Title className="cardinfo">Dredge</Card.Title>
              <Card.Text className="cardinfo">
                Rating: 98%<br/>
                Grand Theft Auto IV is a 2008 action-adventure game developed by Rockstar North and published by Rockstar Games. It is the sixth main entry in the Grand Theft Auto series, following 2004's Grand Theft Auto: San Andreas, and the eleventh instalment overall.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/en/4/46/Video_Game_Cover_-_The_Last_of_Us.jpg" />
            <Card.Body>
              <Card.Title className="cardinfo">The Last Of Us</Card.Title>
              <Card.Text className="cardinfo">
                Rating: 97%<br/>
                The Last of Us is an action-adventure survival horror game franchise created by Naughty Dog and Sony Interactive Entertainment. The series is set in a post-apocalyptic United States ravaged by cannibalistic creatures infected by a mutated fungus in the genus Cordyceps.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://image.api.playstation.com/vulcan/ap/rnd/202207/1210/8jHGChKiNVguguezuyE35X2n.png" />
            <Card.Body>
              <Card.Title className="cardinfo">God Of War</Card.Title>
              <Card.Text className="cardinfo">
                Rating: 94%<br/>
                God of War Ragnarök is an action-adventure game developed by Santa Monica Studio and published by Sony Interactive Entertainment. It was released worldwide on November 9, 2022, for both the PlayStation 4 and PlayStation 5, marking the first cross-gen release in the God of War series.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://static.bandainamcoent.eu/high/elden-ring/elden-ring/00-page-setup/elden-ring-new-header-mobile.jpg" />
            <Card.Body>
              <Card.Title className="cardinfo">Elder Ring</Card.Title>
              <Card.Text className="cardinfo">
                Rating: 92%<br/>
                Elden Ring is a 2022 action role-playing game developed by FromSoftware and published by Bandai Namco Entertainment. Directed by Hidetaka Miyazaki with worldbuilding provided by fantasy writer George R. R. Martin, it was released for PlayStation 4, PlayStation 5, Windows, Xbox One, and Xbox Series X/S on February 25..
              </Card.Text>
            </Card.Body>
          </Card>

        </Row>
      </Col>
    </Row>


  </>
    

  );
}

export default TopRated;
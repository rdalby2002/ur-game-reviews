import React from 'react';
import apicalypse from 'apicalypse';
import {
  Card,
  Col,
  Row,
} from 'react-bootstrap';
import Navbar from '../components/Navbar';

// import { GET_ME } from '../utils/queries';
// import { REMOVE_GAME } from '../utils/mutations'
// import { useQuery, useMutation } from '@apollo/react-hooks';
// import Auth from '../utils/Auth';

// import { removeGameId } from '../utils/LocalStorage';


function SavedGames() {
  // const { loading, data } = useQuery(GET_ME);
  // const userData = data?.me || [];
  // const [ removeGame ] = useMutation(REMOVE_GAME);


  // const handleDeleteGame = async (gameId) => {
  //   const token = Auth.loggedIn() ? Auth.getToken() : null;

  //   if (!token) {
  //     return false;
  //   }

  //   try {
  //     const response = await removeGame({
  //       variables: {gameId: gameId}
  //     });

  //     if (!response) {
  //       throw new Error ('something went wrong!');
  //     }

  //     removeGameId(gameId);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };


  // if (loading) {
  //   return <h2>LOADING...</h2>;
  // }

  return (
    <>
      <Row>

        <Col sm={3}>
          <Navbar />
        </Col>
        <Col sm={9}>
          <Row className="scroll" sm={9} style={{height: '20rem', width: '40rem'}}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://img.youtube.com/vi/Id2EaldBaWw/maxresdefault.jpg" />
              <Card.Body>
                <Card.Title className="cardinfo">Resident Evil 4</Card.Title>
                <Card.Text className="cardinfo">
                  Release Date: 3/23/2023<br/>
                  Resident Evil 4 is a 2023 survival horror game developed and published by Capcom. It is a remake of the 2005 game Resident Evil 4. Players control the US agent Leon S. Kennedy, who must save Ashley Graham, the daughter of the United States president, from the mysterious Los Iluminados cult.
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
              <Card.Img variant="top" src="https://cdn1.epicgames.com/offer/e97659b501af4e3981d5430dad170911/EGS_HogwartsLegacy_AvalancheSoftware_S1_2560x1440-2baf3188eb3c1aa248bcc1af6a927b7e" />
              <Card.Body>
                <Card.Title className="cardinfo">Hodwarts Legacy</Card.Title>
                <Card.Text className="cardinfo">
                  Release Date: 2/10/2023<br/>
                  Hogwarts Legacy is a 2023 action role-playing game developed by Avalanche Software and published by Warner Bros. Games under its Portkey Games label. The game is set in the Wizarding World universe, taking place in the late 1800s, a century prior to the events chronicled in the Harry Potter novels.
                </Card.Text>
              </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://cdn1.epicgames.com/offer/e97659b501af4e3981d5430dad170911/EGS_HogwartsLegacy_AvalancheSoftware_S1_2560x1440-2baf3188eb3c1aa248bcc1af6a927b7e" />
              <Card.Body>
                <Card.Title className="cardinfo">Wo Long: Fallen Dynasty</Card.Title>
                <Card.Text className="cardinfo">
                  Release Date: 3/20/2023<br/>
                  Wo Long: Fallen Dynasty is a historical fantasy action role-playing video game developed by Team Ninja and published by Koei Tecmo. The game was released on March 3, 2023 on PlayStation 4, PlayStation 5, Windows, Xbox One and Xbox Series X/S.
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

          </Row>
        </Col>
      </Row>


    </>
  );
}

export default SavedGames;

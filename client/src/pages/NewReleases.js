import React, { useEffect, useState } from "react";
import { GET_ME, getSavedGameIds } from "../utils/queries";
import Auth from '../utils/Auth';
import Button from 'react-bootstrap/Button';
import { Card, Row, Col } from 'react-bootstrap';
import { SAVE_GAME } from "../utils/mutations";
import { useMutation } from '@apollo/client';
import { newGames } from "../data";
import Navbar from "../components/Navbar";

function NewReleases() {

  // const [savedGameIds, setSavedGameIds] = useState(getSavedGameIds());

  // const saveGame = useMutation(SAVE_GAME)

  // useEffect(() => {
  //   return () => getSavedGameIds(savedGameIds)
  // })

  // const handleSaveGame = async (gameId) => {
  //   const gameTosave = NewReleases.find((game) => game.gameId === gameId);

  //   const token = Auth.loggedIn() ? Auth.getToken() : null;

  //   if (!token) {
  //     return false;
  //   }

  //   try {
  //     await saveGame({
  //       variables: { game: gameTosave },
  //       update: cache => {
  //         const { me } = cache.readQuery({ query: GET_ME });

  //         cache.writeQuery({ query: GET_ME, data: { me: { ...me, SavedGames: [...me.SavedGames], gameTosave } } })
  //       }
  //     });

  //     setSavedGameIds([...savedGameIds, gameTosave.gameId]);
  //   } catch (err) {
  //     console.error(err);
  //}

  //  const { loading, data } = useQuery(QUERY_NEW);
  // const newReleases = data?.newReleases || [];

  // if (loading) {
  //   return <h2>LOADING...</h2>;
  // }

  //};

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
              <Card.Img variant="top" src="https://i0.wp.com/news.xbox.com/en-us/wp-content/uploads/sites/2/2023/01/Hibiki-News-Hero-Image-4916fb477b67e704ab35.jpg?resize=1200%2C675&ssl=1" />
              <Card.Body>
                <Card.Title className="cardinfo">Hi-Fi Rush</Card.Title>
                <Card.Text className="cardinfo">
                  Release Date: 1/25/23<br/>
                  Hi-Fi Rush is a rhythm-based action game developed by Tango Gameworks and published by Bethesda Softworks for the Windows and Xbox Series X/S platforms.
                </Card.Text>
              </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://cdn.akamai.steamstatic.com/steam/apps/1562430/header.jpg?t=1680256832" />
              <Card.Body>
                <Card.Title className="cardinfo">Dredge</Card.Title>
                <Card.Text className="cardinfo">
                  Release Date: 3/30/2023<br/>
                  DREDGE is a single-player fishing adventure with a sinister undercurrent. Sell your catch, upgrade your boat, and dredge the depths for long-buried secrets. Explore a mysterious archipelago and discover why some things are best left forgotten.
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
              <Card.Img variant="top" src="https://cdn.akamai.steamstatic.com/steam/apps/668580/capsule_616x353.jpg?t=1676995676" />
              <Card.Body>
                <Card.Title className="cardinfo">Atomic Heart</Card.Title>
                <Card.Text className="cardinfo">
                  Release Date: 2/21/2023<br/>
                  Atomic Heart is a single-player first-person shooter developed by Mundfish and published by Focus Entertainment and 4Divinity. The game was released for the PlayStation 4, PlayStation 5, Windows, Xbox One, and Xbox Series X/S on February 21, 2023. The game received generally positive reviews upon release.
                </Card.Text>
              </Card.Body>
            </Card>

          </Row>
        </Col>
      </Row>


    </>
  );
}

export default NewReleases;
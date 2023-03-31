import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

// import { QUERY_MAIN } from '../utils/queries';

function Section() {
  // const { loading, data } = useQuery(QUERY_MAIN);
  // const main = data?.main || [];
  const main = {
    games: [
      {
        _id: '12312asldja1',
        cover: '//images.igdb.com/igdb/image/upload/t_thumb/co2dc0.jpg',
        name: 'Kingdom Hearts - The Story So Far',
        rating: 95
      },
      {
        _id: '12312asldja2',
        cover: '//images.igdb.com/igdb/image/upload/t_thumb/co2dc0.jpg',
        name: 'Other game',
        rating: null
      }
    ],
    //some other data ???
  };

  return (
    <div className="carousel">
     <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={main.games.cover}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>{main.games.title}</h3>
          <p>{main.games.rating}</p>
        </Carousel.Caption>
      </Carousel.Item>

      {/* <Carousel.Item>
        <img
          className="d-block w-100"
          src={cover}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>{title}</h3>
          <p>{rating}</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={cover}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>{title}</h3>
          <p>{rating}</p>
        </Carousel.Caption>
      </Carousel.Item> */}

    </Carousel>
      <p>
        Are you a Twitch streamer looking to showcase the best or newest in the gaming industry? Then look no further than <b>Ur Game Reviews</b>. We are your one stop shop for the latest and greatest! Join our Community to see what the buzz is all about!
      </p>
      <div>
      <ButtonGroup aria-label="Basic example">
      <Button className="loginBtn"  href="./LoginForm" variant="secondary">Login!</Button>
      <Button className="signuptBtn" href="./SignupForm" variant="secondary">Sign up!</Button>
    </ButtonGroup>
      </div>
    </div>
  );
}

export default Section;
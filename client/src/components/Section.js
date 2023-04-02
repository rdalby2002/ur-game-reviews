import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Button } from 'react-bootstrap';
import { useNavigate} from 'react-router-dom';

// import { QUERY_MAIN } from '../utils/queries';

function Section() {
  const navigate = useNavigate();

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
    <>
    <section>
      <div className="carousel">
        <Carousel fade>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={main.games}
              alt="First slide"
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src={main.games}
              alt="second slide"
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src={main.games}
              alt="third slide"
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src={main.games}
              alt="fourth slide"
            />
          </Carousel.Item>

        </Carousel>
        <div className='info'>
          <div>
          <p>
            Are you a Twitch streamer looking to showcase the best or newest in the gaming industry? Then look no further than <b>Ur Game Reviews</b>. We are your one stop shop for the latest and greatest! Join our Community to see what the buzz is all about!
          </p>
          </div>
          <div>
          <Button variant='dark' onClick={() => navigate("/login")}>Login</Button>
          {' '}  
          <Button variant='dark' onClick={() => navigate("/signup")}>Sign up</Button>
            </div>
        </div>  
      </div>
     </section>
    </>

  );
}

export default Section;
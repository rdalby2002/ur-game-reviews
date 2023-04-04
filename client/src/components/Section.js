import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { carouselGames } from '../data';

// import { QUERY_MAIN } from '../utils/queries';

function Section() {
  const navigate = useNavigate();

  // const { loading, data } = useQuery(QUERY_MAIN);
  // const main = data?.main || [];
  const main = {
    games: [
      {
        _id: '12312asldja1',
        cover: 'https://images.igdb.com/igdb/image/upload/t_thumb/co2dc0.jpg',
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
        <div className='carousel'>
        <Carousel fade className='carousel'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn1.epicgames.com/f4a904fcef2447439c35c4e6457f3027/offer/DS_wide-2560x1440-c3d7bbf8ee36dd025610088381a5235a.jpg"
          alt="Death Stranding"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn1.epicgames.com/offer/77f2b98e2cef40c8a7437518bf420e47/EGS_Cyberpunk2077_CDPROJEKTRED_S1_03_2560x1440-359e77d3cd0a40aebf3bbc130d14c5c7"
          alt="Cyberpunk 2077"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/en_US/games/switch/p/persona-5-royal-switch/hero"
          alt="Persona 5 Royal"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.cloudflare.steamstatic.com/steam/apps/1235140/capsule_616x353.jpg?t=1677167527"
          alt="Yakuza: Like A Dragon"
        />
      </Carousel.Item>
      </Carousel>
      </div>
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
        
      </section>
    </>

  );
}

export default Section;
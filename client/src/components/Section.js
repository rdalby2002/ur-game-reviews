import React from 'react';
import { Carousel } from 'antd';
import {
  Button
} from 'antd/es/radio';

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
    <div>
      <Carousel autoplay>
        <div>
          <h3>{main.games.cover }</h3>
          <p>{main.games.name}</p>
          <p>{main.games.rating}</p>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
      </Carousel>
      <p>
        Are you a Twitch streamer looking to showcase the best or newest in the gaming industry? Then look no further than <b>Ur Game Reviews</b>. We are your one stop shop for the latest and greatest! Join our Community to see what the buzz is all about!
      </p>
      <div>
        <Button type="submit" id="login-btn" class="btn btn-dark">Login!</Button>
        <a class="btn btn-dark" href='/register'>Register</a>
      </div>
    </div>
  );
}

export default Section;
import React from 'react';
import { Carousel } from 'antd';
import { Button
 } from 'antd/es/radio';
export default function Home() {
  return (
    <div>
        <Carousel autoplay>
            <div>
                
            </div>
        </Carousel>
      <p>
        Are you a Twitch streamer looking to showcase the best or newest in the gaming industry? Then look no further than Ur <b>Game Reviews</b>. We are your one stop shop for the latest and greatest! Join our Community to see what the buzz is all about!
      </p>
      <div>
      <Button type="submit" id="login-btn"  class="btn btn-dark">Login!</Button>
      <a class="btn btn-dark" href='/register'>Register</a> 
</div>
    </div>
  );
}

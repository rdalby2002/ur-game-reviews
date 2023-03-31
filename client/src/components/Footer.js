import React from "react";
import { SocialIcon } from 'react-social-icons'

function Footer() {
  return (
    <footer>
       <div className="center">
          <p className="social">
          <SocialIcon url="https://twitter.com/" />
          <SocialIcon url="https://www.instagram.com/" />
          <SocialIcon url="https://www.twitch.com/" />
       </p>
      </div>
    </footer>
  );
}

export default Footer;
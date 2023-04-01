import React from "react";
import { SocialIcon } from 'react-social-icons'

function Footer() {
  return (
    <footer className="center">
          <SocialIcon url="https://twitter.com/" />
          <SocialIcon url="https://www.instagram.com/" />
          <SocialIcon url="https://www.twitch.com/" />
    </footer>
  );
}

export default Footer;
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Footer() {
  return (
    <footer id="footer">
       <div className="">
          <p className="">
          <FontAwesomeIcon icon="fa-brands fa-instagram" href=""/>
          <FontAwesomeIcon icon="fa-brands fa-twitter" href=""/>
          <FontAwesomeIcon icon="fa-brands fa-twitch" href="" />
       </p>
      </div>
    </footer>
  );
}
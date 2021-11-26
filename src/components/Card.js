import React from "react";
import './Card.css'

const Card = () => {
  return (
    <div className="card">
      <div className="circleBorder">
        <div className="cardImage"></div>
      </div>
      <div className="cardName">Om Prakash</div>
      <div className="cardTitle">UI / UX & Graphic design Team Lead</div>
      <div className="cardSocial">
        <a>
          <box-icon type="logo" name="github"></box-icon>
        </a>

        <a>
          <box-icon name="instagram-alt" type="logo"></box-icon>
        </a>
        <a>
          <box-icon name="twitter" type="logo"></box-icon>
        </a>
        <a>
          <box-icon type="logo" name="linkedin-square"></box-icon>
        </a>
        <a>
          <box-icon type="logo" name="github"></box-icon>
        </a>    
      </div>

      <div className="cardSmallTitles"> 
        <div className="cardSmallTitle title1">UI/UX</div>
        <div className="cardSmallTitle title2">Web Dev</div>

      </div>
    </div>
  );
};

export default Card;

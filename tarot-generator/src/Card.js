import React, { useState } from "react";
import axios from "axios";
import "./Card-details.css";

const tarotUrl = "https://rws-cards-api.herokuapp.com/api/v1/cards";

const Card = () => {
  const [cardData, setCardData] = useState({});
  const handleFetch = (e) => {
    axios
      .get(`${tarotUrl}/random?n=1`)
      .then((res) => {
        setCardData(res.data.cards[0]);
        console.log(res.data.cards[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <header className="Card-header">{cardData.name}</header>
      <div className="Meaning-holder">
        <p className="Card-meaning">{cardData.meaning_up}</p>
      </div>
      <button onClick={handleFetch}>Fetch a card</button>
    </div>
  );
};
export default Card;

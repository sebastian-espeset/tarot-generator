import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Card-details.css";

const tarotUrl = "https://rws-cards-api.herokuapp.com/api/v1/cards";
const cardCount = 4;

const Card = () => {
  const [cardData, setCardsData] = useState([]);

  const drawCards = () => {
    axios
      .get(`${tarotUrl}/random?n=${cardCount}`)
      .then((res) => {
        setCardsData(res.data.cards);
        console.log(res.data.cards);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleFetch = (e) => {
    e.preventDefault();
    drawCards();
  };

  return (
    <div>
      {cardData.map((card) => {
        return <header className="Card-header">{card.name}</header>;
      })}
      <button onClick={handleFetch}>Fetch a card</button>
    </div>
  );
};
export default Card;

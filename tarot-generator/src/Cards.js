import React, { useState, useEffect } from "react";
import axios from "axios";

const tarotUrl = "https://rws-cards-api.herokuapp.com/api/v1/cards";
const cardCount = 5;

const Cards = () => {
  const initialCardReveal = {
    card_one: false,
    card_two: false,
    card_three: false,
    card_four: false,
    card_five: false,
  };
  const [cardData, setCardsData] = useState([]);
  const [cardReveal, setCardReveal] = useState(initialCardReveal);

  useEffect(() => {
    axios
      .get(`${tarotUrl}/random?n=${cardCount}`)
      .then((res) => {
        setCardsData(res.data.cards);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleCardReveal = (e) => {
    const targetedCard = e.target.getAttribute("name");
    setCardReveal({
      ...cardReveal,
      [e.target.getAttribute("name")]: !cardReveal[targetedCard],
    });
  };

  return (
    
    <div>

    </div>
  );
};
export default Cards;

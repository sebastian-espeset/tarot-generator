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
        // console.log(res.data.cards);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleCardReveal = (e) => {
    // const { name, value } = e.target;
    console.log(e.target.className);
    setCardReveal({ ...cardReveal, card_one: !cardReveal.card_one });
  };

  return (
    <div className="container">
      <div className="columns">
        <div
          className="column is-offset-one-third"
          value="card_one"
          id="card_one"
          name="card_one"
          onClick={handleCardReveal}
        >
          <div className="title" name='card_one' value="card_one">
            {cardData[0] ? cardData[0].name : "This is a cards title"}
          </div>
          <div className="content" name='card_one'>
            {cardData[0] ? cardData[0].meaning_up : "this is a cards meaning"}
          </div>
        </div>
      </div>
      {/* <div className="columns">
        <div className="column">
          <div className="title">{cardData[1].name}</div>
          <div className="content">{cardData[1].meaning_up}</div>
        </div>
        <div className="column">
          <div className="title">{cardData[2].name}</div>
          <div className="content">{cardData[2].meaning_up}</div>
        </div>
        <div className="column">
          <div className="title">{cardData[3].name}</div>
          <div className="content">{cardData[3].meaning_up}</div>
        </div>
      </div>
      <div className="columns">
        <div className="column is-offset-one-third">
          <div className="title">{cardData[4].name}</div>
          <div className="content">{cardData[4].meaning_up}</div>
        </div>
      </div> */}
    </div>
  );
};
export default Cards;

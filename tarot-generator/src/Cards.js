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
    const targetedCard = e.target.getAttribute("name");
    setCardReveal({
      ...cardReveal,
      [e.target.getAttribute("name")]: !cardReveal[targetedCard],
    });
    console.log(targetedCard)
  };

  return (
    <div className="container">
      <div className="columns">
        <div className="column is-offset-one-third">
          <div
            onClick={handleCardReveal}
            name="card_one"
            className={
              cardReveal.card_one ? "title" : "title has-background-danger"
            }
          >
            {cardData[0] ? cardData[0].name : "This is a cards title"}
          </div>
          <div className="content">
            {cardData[0] ? cardData[0].meaning_up : "this is a cards meaning"}
          </div>
        </div>
      </div>
      <div className="columns">
        <div className="column">
          <div
            onClick={handleCardReveal}
            className={
              cardReveal.card_two ? "title" : "title has-background-danger"
            }
            name="card_two"
          >
            {cardData[1] ? cardData[1].name : "This is a cards title"}
          </div>
          <div className="content">
            {cardData[1] ? cardData[1].meaning_up : "this is a cards meaning"}
          </div>
        </div>
        <div className="column">
          <div
            onClick={handleCardReveal}
            className={
              cardReveal.card_three ? "title" : "title has-background-danger"
            }
            name="card_three"
          >
            {cardData[2] ? cardData[2].name : "This is a cards title"}
          </div>
          <div className="content">
            {cardData[2] ? cardData[2].meaning_up : "This is a cards meaning"}
          </div>
        </div>
        <div className="column">
          <div
            onClick={handleCardReveal}
            className={
              cardReveal.card_four ? "title" : "title has-background-danger"
            }
            name="card_four"
          >
            {cardData[3] ? cardData[3].name : "This is a cards title"}
          </div>
          <div className="content">
            {cardData[3] ? cardData[3].meaning_up : "This is a cards meaning"}
          </div>
        </div>
      </div>
      <div className="columns">
        <div className="column is-offset-one-third">
          <div
            onClick={handleCardReveal}
            className={
              cardReveal.card_five ? "title" : "title has-background-danger"
            }
            name="card_five"
          >
            {cardData[4] ? cardData[4].name : "This is a cards title"}
          </div>
          <div className="content">
            {cardData[4] ? cardData[4].meaning_up : "This is a cards meaning"}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cards;

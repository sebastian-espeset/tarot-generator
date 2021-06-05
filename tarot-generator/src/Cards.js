import React, { useState, useEffect } from "react";
import axios from "axios";
import './card.css';

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
  };

  return (
    
    <div className="container is-cards-container">
      <div className="tile is-ancestor">
      <div className="tile is-4"></div>{/*This is a blank tile for adding space */}
      
        <div className="tile is-4 is-bordered">
          <div
            onClick={handleCardReveal}
            name="card_one"
            className={
              cardReveal.card_one ? "content is-large" : "content has-background-danger is-large"
            }
          >
            {cardData[0] ? cardData[0].name : "This is a cards title"}
          <div className="content">
            {cardData[0] ? cardData[0].meaning_up : "this is a cards meaning"}
          </div>
          </div>
        </div>
      </div>
      <div className="tile is-4"></div>
      <div className="tile is-ancestor">
        <div className="tile is-4 is-bordered" onClick={handleCardReveal}>
          <div
            
            className={
              cardReveal.card_two ? "content is-large" : "content has-background-danger is-large"
            }
            name="card_two"
          >
            {cardData[1] ? cardData[1].name : "This is a cards title"}
          <div className="content">
            {cardData[1] ? cardData[1].meaning_up : "this is a cards meaning"}
          </div>
          </div>
        </div>
        <div className="tile is-4 is-bordered" onClick={handleCardReveal}>
          <div
            
            className={
              cardReveal.card_three
                ? "content is-large"
                : "content has-background-danger is-large"
            }
            name="card_three"
          >
            {cardData[2] ? cardData[2].name : "This is a cards title"}
          <div className="content">
            {cardData[2] ? cardData[2].meaning_up : "This is a cards meaning"}
          </div>
          </div>
        </div>
        <div className="tile is-4 is-bordered"  onClick={handleCardReveal}>
          <div
           
            className={
              cardReveal.card_four ? "content is-large" : "content has-background-danger is-large"
            }
            name="card_four"
          >
            {cardData[3] ? cardData[3].name : "This is a cards title"}
          <div className="content">
            {cardData[3] ? cardData[3].meaning_up : "This is a cards meaning"}
          </div>
          </div>
        </div>
      </div>
       <div className="tile is-ancestor">
      <div className="tile is-4"></div>
        <div className="tile is-4 is-bordered" onClick={handleCardReveal}>
          <div
            
            className={
              cardReveal.card_five ? "content is-large" : "content has-background-danger is-large"
            }
            name="card_five"
          >
            {cardData[4] ? cardData[4].name : "This is a cards title"}
            <div className="content">
              {cardData[4] ? cardData[4].meaning_up : "This is a cards meaning"}
            </div>
          </div>
        </div>
      </div>
      <div className = "tile is-4"></div>
      </div>
  );
};
export default Cards;

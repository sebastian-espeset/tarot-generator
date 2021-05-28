import React from "react";
import axios from 'axios';

const Card = () => {
    const handleFetch=(e)=>{
        axios.get("https://rws-cards-api.herokuapp.com/api/v1/cards/random?n=10")
        .then(res=>{console.log(res.data.cards)})
        .catch(err=>{console.log(err)})
    };
  return (
    <div>
      <h1>Hello bubbleGum</h1>
      <button onClick = {handleFetch}>Fetch a card</button>
    </div>
  );
};
export default Card;

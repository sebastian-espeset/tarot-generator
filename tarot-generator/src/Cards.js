import React, { useState, useEffect } from "react";
import axios from "axios";
import {Card, CardContent, Grid, Typography} from "@material-ui/core";
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
        console.log(res.data.cards)
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
    <>
      <Grid container spacing={2}>
        <Grid item xs={6} align="center">
          <Card>
            <CardContent>
              <Typography>
                {cardData[0] ? cardData[0].name : "Loading"}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card>

          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card>
            <CardContent>
              <Typography>
              {cardData[1] ? cardData[1].name : "Loading"}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card>
            <CardContent>
              <Typography>
              {cardData[2] ? cardData[2].name : "Loading"}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card>
            <CardContent>
              <Typography>
              {cardData[3] ? cardData[3].name : "Loading"}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card>
            <CardContent>
              <Typography>
              {cardData[4] ? cardData[4].name : "Loading"}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};
    
export default Cards;

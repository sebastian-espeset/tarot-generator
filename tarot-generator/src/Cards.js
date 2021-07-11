import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, CardContent, Grid, Typography, Button } from "@material-ui/core";
const tarotUrl = "https://rws-cards-api.herokuapp.com/api/v1/cards";
const cardCount = 5;

const Cards = () => {
  let initialCardReveal = false;

  const [cardData, setCardsData] = useState([]);
  const [cardReveal, setCardReveal] = useState(initialCardReveal);

  useEffect(() => {
    axios
      .get(`${tarotUrl}/random?n=${cardCount}`)
      .then((res) => {
        console.log(res.data.cards);
        setCardsData(res.data.cards);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  
  function redrawCards(){
    axios
      .get(`${tarotUrl}/random?n=${cardCount}`)
      .then((res) => {
        console.log(res.data.cards);
        setCardsData(res.data.cards);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  
  function cardRevealToggle() {
    setCardReveal(!initialCardReveal);
  }

  if (cardReveal) {
    return (
      <>
      <Button onClick={redrawCards}>Re-draw?</Button>
        <Grid container spacing={3} padding="10px" alignItems="center">
          <Grid item xs={2}>
            <Card>
              <CardContent>
                <Typography variant="title">
                  {cardData[0] ? cardData[0].name : "Loading "}
                </Typography>
              </CardContent>
              <Typography padding="10px" variant="content1">
                {cardData[0] ? cardData[0].meaning_up : "Loading"}
              </Typography>
            </Card>
          </Grid>
          <Grid item>
            <Card></Card>
          </Grid>
          <Grid item xs={2}>
            <Card>
              <CardContent>
                <Typography variant="title">
                  {cardData[1] ? cardData[1].name : "Loading"}
                </Typography>
              </CardContent>
              <Typography padding="10px" variant="content1">
                {cardData[1] ? cardData[1].meaning_up : "Loading"}
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={2}>
            <Card>
              <CardContent>
                <Typography variant="title">
                  {cardData[2] ? cardData[2].name : "Loading"}
                </Typography>
              </CardContent>
              <Typography padding="10px" variant="content1">
                {cardData[2] ? cardData[2].meaning_up : "Loading"}
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={2}>
            <Card>
              <CardContent>
                <Typography variant="title">
                  {cardData[3] ? cardData[3].name : "Loading"}
                </Typography>
              </CardContent>
              <Typography padding="10px" variant="content1">
                {cardData[3] ? cardData[3].meaning_up : "Loading"}
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={2}>
            <Card>
              <CardContent>
                <Typography variant="title">
                  {cardData[4] ? cardData[4].name : "Loading"}
                </Typography>
              </CardContent>
              <Typography padding="10px" variant="content1">
                {cardData[4] ? cardData[4].meaning_up : "Loading"}
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </>
    );
  }
  return (
    <>
    <Button onClick={cardRevealToggle}> 
      draw Cards 
    </Button>
    </>
  );
};

export default Cards;

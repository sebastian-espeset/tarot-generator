import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, CardContent, Grid, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
const tarotUrl = "https://rws-cards-api.herokuapp.com/api/v1/cards";
const cardCount=5;

const useStyles = makeStyles((theme)=>({
  drawButton:{
    display:'flex',
    marginLeft:'48%',
    marginTop:'20%'
  },
  reDrawButton:{
    marginLeft:'45%',
    marginTop:"10px"
  },
  cardsFull:{
    display:"block",
    width:"15vw",
    height:"15vw",
    padding:"10px"
  },
  mainGrid:{
    marginLeft:"6%",
    padding:"30px"
  }
})); 
const Cards = () => {
  const classes=useStyles();
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
      <Button onClick={redrawCards} color="primary" className={classes.reDrawButton} variant="contained">Shuffle the deck and redraw?</Button>
        <Grid container spacing={2} className={classes.mainGrid}>
          <Grid item>
            <Card className={classes.cardsFull}>
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
          <Grid item >
            <Card className={classes.cardsFull}>
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
          <Grid item>
            <Card className={classes.cardsFull}>
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
          <Grid item>
            <Card className={classes.cardsFull}>
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
          <Grid item>
            <Card className={classes.cardsFull}>
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
    <Button className={classes.drawButton} color="primary" onClick={cardRevealToggle} variant='contained'> 
      Draw your cards...
    </Button>
    </>
  );
};

export default Cards;

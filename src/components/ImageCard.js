import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { CardActionArea, Collapse } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 140,
    background: 'rgba(0,0,0,0.5)',
    margin: '22px',
  },
  media: {
    height: 340,
  },
  title: {
    fontFamily: 'Nunito',
    fontWeight: 'bold',
    fontSize: '1.25rem',
    color: '#fff',
  },
  desc: {
    fontFamily: 'Nunito',
    fontSize: '1.1rem',
    color: '#ddd',
  },

});


  
  




export default function ImageCard({ place, checked }) {
  const classes = useStyles();

  function clickHandler(e) {
    console.log(e.target);
}

  return (
    <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})}>
      <Card className={classes.root}>
      <CardActionArea onClick={clickHandler} >
        <CardMedia
          className={classes.media}
          image={place.imageUrl}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="h1"
            className={classes.title}
          >
            {place.title}
          </Typography>
        
          
        </CardContent>
       </CardActionArea>
      </Card>
    </Collapse>
  );
}

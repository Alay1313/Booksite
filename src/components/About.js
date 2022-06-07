import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { CardActionArea, Collapse } from '@material-ui/core';


const useStyles = makeStyles({
  root: {
    maxWidth: 440,
    background: 'rgba(0,0,0,0.5)',
    margin: '20px',
  },
  media: {
    height: 340,
  },
  title: {
    fontFamily: 'Nunito',
    fontWeight: 'bold',
    fontSize: '1rem',
    color: '#fff',
  },
  desc: {
    fontFamily: 'Nunito',
    fontSize: '1.1rem',
    color: '#ddd',
  },
  genre: {
    fontFamily: 'Nunito',
    fontSize: '1.1rem',
    color: '#ddd',
  },
  price: {
    fontFamily: 'Nunito',
    fontSize: '1.1rem',
    color: '#ddd',
  }
});

function About({ place, checked }) {
    const classes = useStyles();
    

    
    

  return (

    
        <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})}>
          <Card className={classes.root}>
          <CardActionArea href="https://google.com">
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
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                className={classes.desc}
              >
                {place.description}
              </Typography>

              <Typography>
                variant="body2"
                color="textSecondary"
                component="p"
                className={classes.genre}
                {place.genre}
              </Typography>
            

              <Typography>
                variant="body2"
                color="textSecondary"
                component="p"
                className={classes.price}
                {place.price}
              </Typography>
            </CardContent>
           </CardActionArea>
          </Card>
        </Collapse>
      
  )
}

export default About

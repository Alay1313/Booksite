import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import ImageCard from './ImageCard';
import places from '../static/places';
import useWindowPosition from '../hook/useWindowPosition';
import About from './About';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '150vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      flexGrow: 1,
    },
  },
}));
export default function () {
  const classes = useStyles();
  const checked = useWindowPosition('header');
  
  const bool = true;

  

  

  return (
    <div  className={classes.root} id="place-to-visit">

      
      <ImageCard id='01' place={places[0]} checked={checked} />
      <ImageCard id='02' place={places[1]} checked={checked} />
      <ImageCard id='03' place={places[2]} checked={checked} />
      <ImageCard id='04' place={places[3]} checked={checked} />
      <ImageCard id='05' place={places[4]} checked={checked} />
      <ImageCard id='06' place={places[5]} checked={checked} />
      <ImageCard id='07' place={places[6]} checked={checked} />
      <ImageCard id='08' place={places[7]} checked={checked} />
      <ImageCard id='09' place={places[8]} checked={checked} />
      <ImageCard id='10' place={places[9]} checked={checked} />
      
      
      
      
    </div>
    
    
  );
  
}

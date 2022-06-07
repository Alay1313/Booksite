import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Header from './components/Header';
import PlaceToVisit from './components/PlaceToVisit';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import afterClick from './components/afterClick';


const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/hero.jpg'})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
}));
export default function App() {
  const classes = useStyles();
  return (
    <Router>
      
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      
      <PlaceToVisit />
      <afterClick />
    </div>
    </Router>
  );
}

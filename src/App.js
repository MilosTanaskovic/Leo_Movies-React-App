import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
// import components
import { Header } from './components/Header';
import { LeoMoviesSearch } from './components/LeoMoviesSearch';
import { WatchMovList } from './components/WatchMovList';
import { FavouritesMov } from './components/FavouritesMov';
// import style
import './App.css';
import './lib/font-awesome/css/all.min.css';

function App() {
  return (
    // <div className="App">
    //   <h1>Dancing With The React!</h1>
    //   <h2>LeoMovies App</h2>
    // </div>
    <Router>
      <Header/>

      <Switch>
        <Route exact path='/watchlmlist'>
          <WatchMovList/>
        </Route>
        <Route exact path='/favouritesmov'>
          <FavouritesMov/>
        </Route>
        <Route exact path='/'>
          <LeoMoviesSearch/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

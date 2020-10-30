import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
// import components
import { Navbar } from './components/pages/Navbar';
import { LeoMoviesSearch } from './components/pages/LeoMoviesSearch';
import { WatchList } from './components/pages/WatchList';
import { Favourites } from './components/pages/Favourites';
// import context
import {GlobalProvider} from './context/GlobalState';
// import style
import './App.css';
import './lib/font-awesome/css/all.min.css';

function App() {
  return (
    // <div className="App">
    //   <h1>Dancing With The React!</h1>
    //   <h2>LeoMovies App</h2>
    // </div>
    <GlobalProvider>
      <Router>
        <Navbar/>

        <Switch>
          <Route exact path='/watchlmlist'>
            <WatchList/>
          </Route>
          <Route exact path='/favouritesmov'>
            <Favourites/>
          </Route>
          <Route exact path='/'>
            <LeoMoviesSearch/>
          </Route>
        </Switch>
      </Router>
    </GlobalProvider>   
  );
}

export default App;

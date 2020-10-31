import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
// import components
import { Navbar } from './pages/Navbar';
import { MainPage } from './pages/MainPage';
import { WatchList } from './pages/WatchList';
import { Favourites } from './pages/Favourites';
// import context
import {GlobalProvider} from './context/GlobalState';
// import routes
import Routes from './constants/routes';
// import style
import './App.scss';
import './lib/font-awesome/css/all.min.css';

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path={ Routes.watchlist } component={WatchList} />
          <Route exact path={Routes.favourites} component={Favourites} />
          <Route exact path={Routes.root} component={MainPage} />     
        </Switch>
      </Router>
    </GlobalProvider>   
  );
}

export default App;

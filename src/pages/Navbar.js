import React from 'react'
import {Link} from 'react-router-dom';
// import routes
import Routes from '../constants/routes';

export const Navbar = () => {
 return (
  <div>
   <header>
    <div className='container'>
     <div className='inner-content'>
      <div className='brand'>
       <Link to={Routes.root}>LeoMovies</Link>
      </div>
      <ul className='nav-links'>
       <li>
        <Link to={Routes.watchlist}>Watch LM List</Link>
       </li>
       <li>
        <Link to={Routes.favourites}>Favourites LM</Link>
       </li>
       <li>
        <Link to={Routes.root} className='btn'>Choose LM</Link>
       </li>
      </ul>
     </div>
    </div>
   </header>
  </div>
 )
}

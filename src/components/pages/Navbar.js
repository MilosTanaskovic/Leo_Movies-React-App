import React from 'react'
import {Link} from 'react-router-dom';

export const Navbar = () => {
 return (
  <div>
   <header>
    <div className='container'>
     <div className='inner-content'>
      <div className='brand'>
       <Link to='/'>LeoMovies</Link>
      </div>
      <ul className='nav-links'>
       <li>
        <Link to='/watchlmlist'>Watch LM List</Link>
       </li>
       <li>
        <Link to='/favouritesmov'>Favourites LM</Link>
       </li>
       <li>
        <Link to='/' className='btn'>Choose LM</Link>
       </li>
      </ul>
     </div>
    </div>
   </header>
  </div>
 )
}

import React from 'react'

export const MovieControls = ({movie, type}) => {
 return (
  <div className='inner-card-controls'>
   {
    type === 'watchlist' && (
     <>
     <button className='ctrl-btn'>
     <i class="fa-fw far fa-star"></i>
     </button>
     <button className='ctrl-btn'>
      <i class="fa-fw fa fa-times"></i>
     </button>
     </>
    )
   }
  </div>
 )
}

import React, { useState} from 'react';
import { Button } from '@mui/material';
import './Banner.css';

function Banner() {
    const [showSearch, setShowSearch]= useState (false);

  return (
    <div className='banner'>
      <div className='banner_search'> {showSearch && <h1> SHOW DATE PICKER</h1>}
        <Button onClick={()=>setShowSearch(!showSearch)} className='banner_searchButton' variant='outlined'> Search Dates
        </Button>
      </div>
      <div className='banner_info'>
        <h1>Get out and stretch your feet</h1>
        <h5>Plan a different kind of getaway</h5>
        <Button variant='outlined'> Explore Nearby
        </Button>
      </div>
    </div>
  )
}

export default Banner
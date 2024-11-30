import React, { useState} from 'react';
import { Button } from '@mui/material';
import './Banner.css';
import Search from './Search';
import { useHistory } from "react-router-dom";


function Banner() {
    const [showSearch, setShowSearch]= useState (false);
    const history = useHistory();

    const handleClick = () => {
      history.push('/search'); // Navigate to '/new-route'
    };
  return (
    <div className='banner'>
      <div className='banner_search'> {showSearch && <Search />}
        <Button onClick={() => setShowSearch(!showSearch)} className='banner_searchButton' variant='outlined'> {showSearch ? "Hide" : "Search Dates"}
        </Button>
      </div>
      <div className='banner_info'>
        <h1>Get out and stretch your feet</h1>
        <h5>Plan a different kind of getaway</h5>
        <Button onClick={handleClick} variant='outlined'>Explore Nearby</Button>

        {/* <Button onClick={() => history.push('/search')} variant='outlined'>Explore Nearby</Button> */}
      </div>
    </div>
  )
}

export default Banner
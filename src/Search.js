import React, { useState } from 'react';
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; //theme css file
import { DateRangePicker } from 'react-date-range';
import PeopleIcon from '@mui/icons-material/People';
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

import './Search.css';


// DATE PICKER
function Search() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const navigate = useNavigate();

  const handleSelect=(ranges)=> {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };
 
  const selectionRange = {
     startDate: startDate,
     endDate: endDate,
     key: 'selection',
  };
  
  return (

    <div className='search'>
      <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
      <h2>
          Number of guests <PeopleIcon />
      </h2>
      <input min={0} defaultValue={2} type="number" />
      <Button onClick={() => navigate("/search")} >Search Airbnb</Button>
    </div>
  )
  
}
export default Search
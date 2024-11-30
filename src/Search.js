import React, { useState } from 'react';
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; //theme css file
import { DateRangePicker } from 'react-date-range';
// import DateRangePicker from '@wojtekmaj/react-daterange-picker';
import PeopleIcon from '@mui/icons-material/People';
import { Button } from "@mui/material";
// import { useHistory } from "react-router-dom";
import { createHashHistory } from 'history'
import './Search.css';


// DATE PICKER
function Search() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  // const history = useHistory();
  const history = createHashHistory();



  const handleClick = () => {
    history.push('/search'); // Navigate to '/new-route'
  };

  const handleSelect=(ranges)=> {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  // const handleSelect = (ranges) => {
  //   setState([ranges.selection]);
  // };
  const selectionRange = {
     startDate: startDate,
     endDate: endDate,
     key: 'selection',
  };
  
  return (

      <div className='search'>
        /<DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
     
        {/* <DateRangePicker
                  onChange={handleSelect}
                  showSelectionPreview={true}
                  moveRangeOnFirstSelection={false}
                  months={2}
                  ranges={state}
                  direction="horizontal"
                  /> */}
        <h2>
          Number of guests <PeopleIcon />
        </h2>
        <input min={0} defaultValue={2} type="number" />
        <Button onClick={handleClick}>Search Airbnb</Button>
      </div>
  )
  
}
export default Search
import React, { useState } from "react";
import { DateRangePicker } from "react-date-range";
import Button from "@mui/material/Button";
import PeopleIcon from "@mui/icons-material/People";
import { useNavigate } from "react-router-dom";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import "./Search.scss";

const Search = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const navigate = useNavigate()

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  function handleSelect(ranges) {
    console.log(ranges);
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }

  return (
    <div className="search">
      <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
      <h2>
        Number of guests
        <PeopleIcon />
      </h2>
      <input className="search-guests" min={0} defaultValue={2} type="number" />
      <Button
        className="search__btn"
        onClick={() => navigate('/search')}
      >
        Search properties
      </Button>
    </div>
  );
};

export default Search;

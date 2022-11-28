import React, { useState } from "react";
import Button from "@mui/material/Button";
import Search from "../Search/Search";
import { useNavigate } from "react-router-dom";
import "./Banner.scss";

const Banner = () => {
  const [showDates, setShowDates] = useState(false);
  const navigate = useNavigate()

  return (
    <div className="banner">
      <div className="banner-search">
        {showDates && <Search />}
        <Button
          className="banner-search__button"
          onClick={() => setShowDates(!showDates)}
          variant="outlined"
        >
          {showDates ? "Hide" : "Search Dates"}
        </Button>
      </div>
      <div className="banner-info">
        <h1>Get out and strech yout imagination</h1>
        <h5>
          Plan a different kind of gateway to uncover the hidden gems near you
        </h5>
        <Button
          onClick={() => navigate('/search')}
          variant="outlined"
          >Explore nearby
        </Button>
      </div>
    </div>
  );
};

export default Banner;

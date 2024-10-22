import React from "react";
import { FiSearch } from "react-icons/fi";
import Button from '@mui/material/Button';

const SearchBox = () => {
  return (
      <>
          <div className="headerSearch mr-3 ml-4">
              <input type="text" placeholder="Search for products..." />
              <Button><FiSearch /></Button>
          </div>
      </>
  )
};

export default SearchBox;

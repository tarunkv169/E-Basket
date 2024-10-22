import React from "react";
import Button from '@mui/material/Button';
import { FaAngleDown } from "react-icons/fa6";

export const CountryDropDown = () => {
  return (
    <>
      <Button
        className="countryDrop"
        sx={{
          width: '180px',
          height: '60px',
          minWidth: '150px',
          color:'#000',
          border: '1px solid rgba(0,0,0,0.2)',
          borderRadius: '7px',
          justifyContent: 'flex-start',
          textAlign: 'left',
          padding: '15px 15px',
        }}
      >
        <div className="info d-flex flex-column"
          style={{ display: 'flex', flexDirection: 'column' }}
        >
          <span
            className="label"
            style={{
              fontSize: '12px',
              textTransform: 'capitalize',
              color: 'rgba(0,0,0,0.7)',
            }}
          >
            Your Location
          </span>
          <span
            className="name"
            style={{
              fontSize: '14px',
              textTransform: 'capitalize',
              color: '#233a95',
              fontWeight: 700,
              lineHeight: '16px'
            }}
          >
            India
          </span>
        </div>
        <span className="ml-auto" style={{ marginLeft: 'auto' }}>
          <FaAngleDown />
        </span>
      </Button>
    </>
  );
};

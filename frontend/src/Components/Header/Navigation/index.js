import React from "react";
import Button from '@mui/material/Button';
import { IoMdMenu } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa";

const Navigation = () => {
  return (
    <>
      <nav>
           <div className="container mt-5">
              
              <div className="row">
                 
                 <div className="navpart1 col-sm-3 ">
                      <Button className="allcatTab">
                         <span><IoMdMenu /></span>
                         <span className="text">All Categories</span>
                         <span><FaAngleDown /></span>
                      </Button>
                 </div>

                 <div className="navpart2 col-sm-9">

                 </div>

              </div>

           </div>
      </nav>
    </>
  )
};

export default Navigation;

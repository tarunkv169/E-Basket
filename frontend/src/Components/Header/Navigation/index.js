import React from "react";
import Button from '@mui/material/Button';
import { IoIosMenu } from "react-icons/io";
import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <nav>
        <div className="container p-0">
          <div className="row align-items-center">
            {/* Categories button */}
            <div className="navpart1 col-sm-3 d-flex justify-content-start pl-0">
              <Button className="allcatTab">
                <span className="icon1 mr-2"><IoIosMenu /></span>
                <span className="text">All Categories</span>
                <span className="icon2 ml-4"><FaChevronDown /></span>
              </Button>
            </div>

            {/* Navigation links */}
            <div className="navpart2 col-sm-9">
              <ul className="list list-inline ml-auto d-flex justify-content-end align-items-center">
                <li className="list-inline-items"><Link to="/">Home</Link></li>
                <li className="list-inline-items"><Link to="/">Fashion</Link></li>
                <li className="list-inline-items"><Link to="/">Electronic</Link></li>
                <li className="list-inline-items"><Link to="/">Bakery</Link></li>
                <li className="list-inline-items"><Link to="/">Grocery</Link></li>
                <li className="list-inline-items"><Link to="/">Mobiles</Link></li>
                <li className="list-inline-items"><Link to="/">Blog</Link></li>
                <li className="list-inline-items"><Link to="/">Contact Us</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;

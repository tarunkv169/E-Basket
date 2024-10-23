  import React from "react";
  import { Link } from "react-router-dom";
  // @ts-ignore
  import Logo from '../../assets/images/logo_final.png';
  import {CountryDropDown} from "../CountryDropDown";
 
  import Button from '@mui/material/Button';
  import { FiUser } from "react-icons/fi";
  import { IoBagOutline } from "react-icons/io5";
import SearchBox from "./SearchBox";
import Navigation from "./Navigation";


  export const Header = () => {
    return (
      <>
        <div className="header_wrapper">

              <div className="bg-blue top_strip">
                  <div className="container">
                        <p className="mb-0 mt-0 text-center">Due to the <strong>COVID 19</strong> epidemic, orders may be processed with a slight delay</p>
                  </div>
              </div>


              <div className="header">
                  <div className="container p-0">

                        <div className="row">

                            <div className="logowrapper d-flex align-items-center col-sm-2 pl-0">
                                <Link to={'/'}><img src={Logo} alt="Logo" /></Link>
                            </div>
                            
                            <div className="d-flex align-items-center part_2 col-xl ml-3 mr-0">
                              
                                  <CountryDropDown/>                             
                                  
                                  <SearchBox/>
    
                                  <div className="part3 d-flex align-items-center ml-auto">
                                       <Button className="circle ml-3" sx={{   minWidth:'40px',
                                                                          width: '40px',
                                                                          height: '40px',
                                                                          borderRadius: '50%',
                                                                          border: '1px solid rgba(0,0,0,0.2)', // Removed the border
                                                                          display: 'flex',
                                                                          alignItems: 'center',
                                                                          justifyContent: 'center',
                                                                          color: '#000',
                                                                          fontSize: '21px',
                                                                          background: '#f3f4f7',
                                                                      }}  >
                                             <FiUser />
                                         </Button>


                                        <div className="ml-auto cartTab d-flex align-items-center">
                                           <span className="price ml-3">$3.19</span>

                                           <div className="position-relative ml-2 mr-0">
                                              <Button className="circle"  sx={{   minWidth:'40px',
                                                                          width: '40px',
                                                                          height: '40px',
                                                                          borderRadius: '50%',
                                                                          border: '1px solid rgba(0,0,0,0.2)', // Removed the border
                                                                          display: 'flex',
                                                                          alignItems: 'center',
                                                                          justifyContent: 'center',
                                                                          color: '#000',
                                                                          fontSize: '21px',
                                                                          background: '#fff1ee',
                                                                          
                                                                      }} ><IoBagOutline style={{ color: '#ea2b0f' }}/></Button>
                                              <span className="count d-flex align-items-center justify-content-center">1</span>
                                           </div>

                                        </div>
    
                                  </div>

                            </div>

                        </div>

                  </div>
              </div>

              <Navigation/>

        </div>
      </>
    );
  };



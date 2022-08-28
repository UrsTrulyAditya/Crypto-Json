import React, { useState } from 'react';
import './header.css';
import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const Header = () => {
    const [btn,setbtn]=useState(false); 
    const location=useLocation();
     
     
    // if(location.pathname=="/"){
    //     setbtn(true);
    // }else{
    //     setbtn(false);
    // }
    const clickedsave=()=>{
        setbtn(true);
    }

    const clickedhome=()=>{
        setbtn(false);
    }
   
    return (


        <nav className="container-fluid navbar navbar-expand-lg navbar-red navbar-dark">
            <div className="wrapper"></div>
            <div className="container-fluid all-show d-flex justify-content-betwen">
                <Link to="/">
                    <h2 className="navbar-brand" >
                        Crypto Tracker <i className="fa fa-codepen" />
                    </h2>
                </Link>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="d-flex flex-column sim ">
                        <span >Bitcoin is the biggest opportunity set we can think of over the next decades</span>

                    </div>
                     
                       
                </div>
                
                    {!btn && <Link to="/view"><button onClick={clickedsave} className='btn btn-outlined-light text-light'>
                                Saved Crypto
                            </button></Link>}
                            {btn && <Link to="/"><button onClick={clickedhome} className='btn btn-outlined-light text-light'>
                                Back to home 
                            </button></Link>}
                             
                 
            </div>
        </nav>



    )
}

export default Header



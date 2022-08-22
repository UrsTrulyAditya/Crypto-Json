import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';

const Header = () => {
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
                <Link to="/view">

                            <button className='btn btn-outlined-light text-light'>
                                Saved Crypto
                            </button>
                </Link>
            </div>
        </nav>



    )
}

export default Header



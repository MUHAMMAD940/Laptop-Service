import React from 'react';
import HeaderDisplayImg from '../../../../assets/laptop.jpg'
import './HeaderDisplay.css'

const HeaderDisplay = () => {
    return (
        <div className='container pb-5'>
            <div className='row d-flex align-items-center'>
                        <main style={{height: '600px'}} className="row d-flex align-items-center">
                            <div className="col-lg-12"> 
                                <div className="header-main text-center">
                                <h1>LAPTOP DISPLAY <br/><span>BROKEN COMPLETELY.?</span></h1>
                                <p> Our Experts Diagnosis and Provide Quality Solutions Within 24 hours !  </p>
                                <button className="btn btn-warning text-white">BOOK AN APPOINTMENT</button>
                                </div>
                            </div>
                        </main>
            </div>
        </div>
    );
};

export default HeaderDisplay;
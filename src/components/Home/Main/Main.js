import React from 'react';
import Contact from './Contact/Contact';
import Services from './Services/Services';
import Testimonials from './Testimonials/Testimonials';
import Gallery from './Gallery/Gallery';

const Main = () => {
    return (
        <div className='container'>
            <Services></Services>
            <Testimonials></Testimonials>
            
            <Gallery></Gallery>
            <Contact></Contact>
        </div>
    );
};

export default Main;
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then((res) => res.json())
            .then((data) => setServices(data));
    }, []);
    return (
        <div className='container py-3'>
            <h2 className='text-center py-3'>Services</h2>
            <div className='row g-4 py-5'>
                {services.length === 0 && (
                    <div className='d-flex justify-content-center'>
                        <div className='spinner-border' role='status'>
                            <span className='visually-hidden'>Loading...</span>
                        </div>
                    </div>
                )}
                {services.map((service) => (
                    <div className='col-lg-4'>
                        <Link
                            to={`/purchase/purchase/${service._id}`}
                            className='text-decoration-none'
                        >
                            <div className='card h-100 p-3 border-0 shadow text-center blog-shadow-dreamy'>
                                <figure>
                                    <img src={service.imageURL} className='card-img-top book-cover' alt='...' />
                                </figure>
                                <div className='card-body'>
                                    <h4 className='card-title fw-bold text-danger'>
                                        {service.title}
                                    </h4>
                                    <div className='col fs-5 fw-bold'>
                                        ${service.price}
                                    </div>
                                    <p className='card-text text-secondary'>
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;

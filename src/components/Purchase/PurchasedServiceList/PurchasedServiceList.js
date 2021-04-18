import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import SideNav from '../../Admin/SideNav/SideNav';

const PurchasedServiceList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [purchasedService, setPurchasedService] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/purchasedServices?email=' + loggedInUser.email)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setPurchasedService(data);
            });
    }, [loggedInUser.email]);
    return (
        <div className='row'>
            <SideNav></SideNav>
            <div className='col-lg-9'>
                <h1>Purchased Service List</h1>
                <div className='row g-4 container py-3'>
                    {purchasedService.length === 0 && (
                        <div className='d-flex justify-content-center'>
                            <div className='spinner-border' role='status'>
                                <span className='visually-hidden'>
                                    Loading...
                                </span>
                            </div>
                        </div>
                    )}
                    {purchasedService.map((service) => (
                        <div className='col-lg-4'>
                            <div className='card h-100 p-3 border-0 shadow'>
                                <div className='card-body'>
                                    <div className='d-flex'>
                                        <h4 className='card-title fw-bold text-danger'>
                                            {service.title}
                                        </h4>
                                        <h4 className='col fs-5 fw-bold text-end'>
                                            ${service.price}
                                        </h4>
                                    </div>
                                    <p className='card-text text-secondary'>
                                        {service.description}
                                    </p>
                                    <button className='btn btn-success'>
                                        {service.status}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PurchasedServiceList;

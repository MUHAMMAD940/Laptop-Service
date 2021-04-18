import React, { useContext, useEffect, useState } from 'react';
import SideNav from '../../Admin/SideNav/SideNav';
import { useForm } from 'react-hook-form';
import PaymentProcess from '../PaymentProcess/PaymentProcess';
import { UserContext } from '../../../App';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { _id } = useParams();
    const [service, setService] = useState([]);
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then((res) => res.json())
            .then((data) => {
                const info = data.filter((service) => _id == service._id);
                setService(info[0]);
            });
    }, [_id]);

    const onSubmit = (data) => {
        const { imageURL, title, description, price } = service;
        const newPurchase = {
            ...loggedInUser,
            name: data.name,
            email: data.email,
            imageURL,
            title,
            description,
            price,
            status: 'Pending'
        };
        const url =
            'http://localhost:5000/purchaseService';
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(newPurchase),
        }).then((res) => {
            console.log(res);
            alert('Service purchased successfully!');
        });
    };
    return (
        <div className='row'>
            <SideNav></SideNav>
            <div className='col-lg-9'>
                <h1>Purchase</h1>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className='p-3 rounded-3'
                >
                    <div className='col-lg-6'>
                        <div className='mb-3'>
                            <input
                                type='text'
                                className='form-control'
                                name='name'
                                id='name'
                                placeholder='Enter Name'
                                defaultValue={loggedInUser.username}
                                {...register('name')}
                            />
                        </div>
                        <div className='mb-3'>
                            <input
                                type='email'
                                className='form-control'
                                name='email'
                                id='email'
                                placeholder='Enter Email'
                                defaultValue={loggedInUser.email}
                                {...register('email')}
                            />
                        </div>
                        <div className='mb-3'>
                            <input
                                type='text'
                                className='form-control'
                                name='service'
                                id='service'
                                placeholder='Enter Service'
                                defaultValue={service.title}
                                {...register('service')}
                            />
                        </div>
                        <div className='mb-3'>
                            <PaymentProcess></PaymentProcess>
                        </div>
                    </div>
                    <p>Your service charge will be ${service.price}</p>
                    <input type='submit' className='btn btn-primary' />
                </form>
            </div>
        </div>
    );
};

export default Purchase;

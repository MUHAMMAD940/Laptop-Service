import React from 'react';
import SideNav from '../SideNav/SideNav';
import { useForm } from 'react-hook-form';

const MakeAdmin = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        fetch('https://blooming-bayou-15660.herokuapp.com/makeAdmin', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((result) => {
                if (result) alert('Admin added successfully!');
            });
    };
    return (
        <div className='row'>
            <SideNav></SideNav>
            <div className='col-lg-9 bg-light'>
                <h2>Make Admin</h2>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className='p-3 rounded-3'
                >
                    <div className='row'>
                        <div className='col-lg-6'>
                            <div className='mb-3'>
                                <label htmlFor='email' className='form-label'>
                                    Email
                                </label>
                                <input
                                    type='email'
                                    className='form-control'
                                    name='email'
                                    id='email'
                                    placeholder='Enter Email'
                                    {...register('email')}
                                />
                            </div>
                        </div>
                    </div>
                    <input type='submit' className='btn btn-primary' />
                </form>
            </div>
        </div>
    );
};

export default MakeAdmin;

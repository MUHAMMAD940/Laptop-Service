import React, { useState } from 'react';
import SideNav from '../SideNav/SideNav';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const AddService = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const [imageURL, setImageURL] = useState(null);
    const handleUploadFile = (event) => {
        const imageData = new FormData();
        imageData.set('key', '8768f8c2ea66c07b958a93a038d4067a');
        imageData.append('image', event.target.files[0]);
        axios
            .post('https://api.imgbb.com/1/upload', imageData)
            .then((response) => setImageURL(response.data.data.display_url))
            .catch((error) => console.log(error));
    };

    const onSubmit = (data) => {
        console.log(data)
        const serviceData = {
            title: data.title,
            imageURL: imageURL,
            description: data.description,
            price: data.price,
        };
        console.log(serviceData)
        const url = `http://localhost:5000/addService`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(serviceData),
        }).then((res) => {
            console.log(res);
            alert('Service added successfully!');
        });
    };
    return (
        <div className='row'>
            <SideNav></SideNav>
            <div className='col-lg-9 bg-light'>
                <div className='container'>
                    <h2>Add Service</h2>
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className='p-3 rounded-3'
                    >
                        <div className='row'>
                            <div className='col'>
                                <div className='mb-3'>
                                    <label
                                        htmlFor='name'
                                        className='form-label'
                                    >
                                        Service Title
                                    </label>
                                    <input
                                        type='text'
                                        className='form-control'
                                        name='title'
                                        id='title'
                                        placeholder='Enter title'
                                        {...register('title')}
                                    />
                                </div>
                            </div>
                            <div className='col'>
                                <div className='mb-3'>
                                    <label
                                        htmlFor='serviceCoverPhoto'
                                        className='form-label'
                                    >
                                        Image
                                    </label>
                                    <input
                                        type='file'
                                        className='form-control'
                                        onChange={handleUploadFile}
                                        id='serviceCoverPhoto'
                                        placeholder='Upload image'
                                        {...register}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <div className='mb-3'>
                                    <label
                                        htmlFor='price'
                                        className='form-label'
                                    >
                                        Description
                                    </label>
                                    <input
                                        type='text'
                                        className='form-control'
                                        name='description'
                                        id='description'
                                        placeholder='Enter Description'
                                        {...register('description')}
                                    />
                                </div>
                            </div>
                            <div className='col'>
                                <div className='mb-3'>
                                    <label
                                        htmlFor='price'
                                        className='form-label'
                                    >
                                        Service Price
                                    </label>
                                    <input
                                        type='text'
                                        className='form-control'
                                        name='price'
                                        id='price'
                                        placeholder='Enter Book Price'
                                        {...register('price')}
                                    />
                                </div>
                            </div>
                        </div>
                        <input type='submit' className='btn btn-primary' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddService;

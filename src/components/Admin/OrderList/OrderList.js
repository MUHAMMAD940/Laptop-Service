import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import SideNav from '../SideNav/SideNav';
import { useForm } from 'react-hook-form';

const OrderList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [purchasedService, setPurchasedService] = useState([]);
    useEffect(() => {
        fetch(
            'http://localhost:5000/adminPurchasedServices'
        )
            .then((res) => res.json())
            .then((data) => {
                setPurchasedService(data);
            });
    }, []);

    const changeStatus = ({ target: { value: statusValue } }, id) => {
        fetch(`http://localhost:5000/getOrder/${id}`)
            .then((response) => response.json())
            .then((result) => {
                if (result) {
                    fetch(
                        'http://localhost:5000/updateOrderStatus',
                        {
                            method: 'PATCH',
                            body: JSON.stringify({
                                ...result,
                                status: statusValue,
                            }),
                            headers: {
                                'Content-type':
                                    'application/json; charset=UTF-8',
                            },
                        }
                    )
                        .then((res) => res.json())
                        .then((data) => {
                            if (data) alert('Your setting have been updated!');
                        });
                }
            });
    };


    return (
        <div className='row'>
            <SideNav></SideNav>
            <div className='col-lg-9'>
                <h2>Order List</h2>
                <div className='container py-3'>
                    <table className='table table-hover table-borderless'>
                        <thead className='table-secondary text-center border-0'>
                            <tr>
                                <th scope='col'>Name</th>
                                <th scope='col'>Email</th>
                                <th scope='col'>Service</th>
                                <th scope='col'>Price</th>
                                <th scope='col'>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {purchasedService.map((service) => (
                                <tr>
                                    <td>{service.name}</td>
                                    <td>{service.email}</td>
                                    <td>{service.title}</td>
                                    <td>${service.price}</td>
                                    <td>
                                        <select
                                            onChange={(e) =>
                                                changeStatus(e, service._id)
                                            } 
                                            defaultValue={service.status}
                                            name='status'
                                        >
                                            <option value='On Going'>
                                                On Going
                                            </option>
                                            <option value='Pending'>
                                                Pending
                                            </option>
                                            <option value='Done'>Done</option>
                                        </select>
                    
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default OrderList;

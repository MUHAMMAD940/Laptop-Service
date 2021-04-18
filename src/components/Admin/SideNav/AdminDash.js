import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faList,
    faPaperPlane,
    faPlus,
    faShoppingBasket,
    faShoppingCart,
    faUserShield,
} from '@fortawesome/free-solid-svg-icons';
import { faServicestack } from '@fortawesome/free-brands-svg-icons';

const AdminDash = () => {
    return (
        <div>
            <ul className='list-unstyled p-3'>
                    <li>
                        <Link
                            to='/admin/orderList'
                            className='text-decoration-none'
                        >
                            <FontAwesomeIcon icon={faShoppingBasket} /> Order
                            List
                        </Link>
                    </li>
                    <li>
                        <Link
                            to='/admin/addService'
                            className='text-decoration-none'
                        >
                            <FontAwesomeIcon icon={faPlus} /> Add Service
                        </Link>
                    </li>
                    <li>
                        <Link
                            to='/admin/makeAdmin'
                            className='text-decoration-none'
                        >
                            <FontAwesomeIcon icon={faUserShield} /> Make Admin
                        </Link>
                    </li>
                    <li>
                        <Link
                            to='/admin/manageServices'
                            className='text-decoration-none'
                        >
                            <FontAwesomeIcon icon={faServicestack} /> Manage
                            Services
                        </Link>
                    </li>
                </ul>
        </div>
    );
};

export default AdminDash;
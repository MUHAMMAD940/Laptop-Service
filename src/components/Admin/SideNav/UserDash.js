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

const UserDash = () => {
    return (
        <div>
            <ul className='list-unstyled p-3'>
                    <li>
                        <Link
                            to='/purchase/purchase'
                            className='text-decoration-none'
                        >
                            <FontAwesomeIcon icon={faShoppingCart} /> Purchase
                        </Link>
                    </li>
                    <li>
                        <Link
                            to='/purchase/purchasedServiceList'
                            className='text-decoration-none'
                        >
                            <FontAwesomeIcon icon={faList} /> Purchased Service
                            List
                        </Link>
                    </li>
                    <li>
                        <Link
                            to='/purchase/review'
                            className='text-decoration-none'
                        >
                            <FontAwesomeIcon icon={faPaperPlane} /> Review
                        </Link>
                    </li>
                </ul>
        </div>
    );
};

export default UserDash;
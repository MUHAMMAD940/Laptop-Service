import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './SideNav.css';
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
import { UserContext } from '../../../App';
import AdminDash from './AdminDash';
import UserDash from './UserDash';
import Logo from '../../../assets/logo-footer.png';

const SideNav = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(true);
    useEffect(() => {
        fetch('http://localhost:5000/checkUserRole?email=' + loggedInUser.email)
            .then((res) => res.json())
            .then((data) => {
                setIsAdmin(data);
            });
    }, [loggedInUser.email]);
    return (
        <div className='col-lg-3 bg-info'>
            <h3 className='text-center p-3'>
                <Link className='fw-bold text-decoration-none text-dark' to='/'><img src={Logo} alt=""/></Link>
            </h3>
            {isAdmin ? ( <AdminDash></AdminDash> ) : ( <UserDash></UserDash> )}
        </div>
    );
};

export default SideNav;
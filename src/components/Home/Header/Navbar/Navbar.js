import React, { useContext } from 'react';
import { UserContext } from '../../../../App';
import { Link } from 'react-router-dom';
import Logo from '../../../../assets/logo-footer.png';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <nav className="navbar navbar-expand-lg navbar-light ">
            <div className="container">
                <Link className="navbar-brand fw-bold" to="/"><img src={Logo} alt=""/></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link text-white active" aria-current="page" to="/home">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white disabled" to="/about">About us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white disabled" to="/projects">Projects</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white disabled" to="/contact">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/admin/orderList">Dashboard</Link>
                        </li>
                        
                        {!loggedInUser.name ? (
                            <li className="nav-item">
                                <Link className="nav-link btn btn-warning" to="/login">Login</Link>
                            </li>
                        ) : (
                            <li className="nav-item">
                                <img src={loggedInUser.name} alt="" className="login-photo"/>
                            </li>
                        )
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;
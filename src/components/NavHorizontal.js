import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logo.svg';
import '../css/menu.css';

class NavHorizontal extends Component {
    render() {
        const { isAuthenticated, login, logout } = this.props.auth;

        return (
            <nav className="row menuheader">
                <div className="col-md-5">
                    <Link to="/">
                        SAVARY
                    </Link>
                     - Your Personal Budgeting Online Solution
                </div>
                <div className="col-md-7 menuheaderright">
                    SEARCH |&nbsp;
                    { isAuthenticated() ? (
                            <>
                                <Link to="/profile">User Profile</Link> | <Link onClick={logout}>Log Out</Link>
                            </>
                        ) : (
                            <Link to="/" onClick={login}>Sign In/Up</Link>
                        ) 
                    }
                </div>
            </nav>
        );
    }
}

export default NavHorizontal;
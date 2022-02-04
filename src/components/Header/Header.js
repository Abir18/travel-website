import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css';

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <div className="header sticky-top">
      <h1 className="logo">Travel Guide</h1>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        {user.email && (
          <>
            <NavLink to="/myorder">My Orders</NavLink>
            <NavLink to="/manage-all-order">Manage All Orders</NavLink>
            <NavLink to="/add-new-service">Add A New Service</NavLink>
          </>
        )}

        {user.email ? (
          <>
            <span>Welcome {user.displayName} </span>
            <button className="btn btn-warning m-3" onClick={logOut}>
              Log Out
            </button>
          </>
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
      </nav>
    </div>
  );
};

export default Header;

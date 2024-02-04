import React from "react";
import './Nav.scss';
import { NavLink } from "react-router-dom";


class Navigation extends React.Component {

    render() {
        return (
            <div className="topnav">
                <NavLink to="/" className="nav-link">Home</NavLink>
                <NavLink to="/todoapp" className="nav-link">ToDo App</NavLink>
                <NavLink to="/about" className="nav-link">About</NavLink>
            </div>
        )
    }
}

export default Navigation;
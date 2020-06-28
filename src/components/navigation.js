import React, { Component } from 'react';
import { NavLink } from "react-router-dom";


export default class Navigation extends Component {
    render() {
        return (
            <div className="nav-bar">
                <h1>Grace Lake Apartments</h1>
                <NavLink to="/" className="nav-link">
                    Home
                </NavLink>

                <NavLink to="/floorplans" className="nav-link">
                    Floorplans
            </NavLink>
                <NavLink to="/map" className="nav-link">
                    Map
            </NavLink>
                <NavLink to="/photos" className="nav-link">
                    Photos
            </NavLink>
                <NavLink to="/contacts" className="nav-link">
                    Contact
            </NavLink>

            </div>
        );
    }
}
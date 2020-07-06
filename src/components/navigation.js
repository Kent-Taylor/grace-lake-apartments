import React, { Component } from 'react';
import { NavLink } from "react-router-dom";


export default class Navigation extends Component {
    render() {
        return (
            <div className="nav-bar">

                <NavLink to="/" className="logo-section home" activeClassName="active">
                    <p>Grace Lake Apartments</p>
                </NavLink>



                <NavLink to="/" className="nav-link home" activeClassName="active">
                    Home
                </NavLink>

                <NavLink to="/floorplans" className="nav-link" activeClassName="active">
                    Floorplans
            </NavLink>
                <NavLink to="/map" className="nav-link" activeClassName="active">
                    Map
            </NavLink>
                <NavLink to="/photos" className="nav-link" activeClassName="active">
                    Photos
            </NavLink>
                <NavLink to="/contact" className="nav-link" activeClassName="active">
                    Contact
            </NavLink>

            </div>
        );
    }
}
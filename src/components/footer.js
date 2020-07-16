import React, { Component } from 'react';
import { NavLink } from "react-router-dom";


export default class Footer extends Component {
    render() {
        return (
            <div className="footer-container">
                <div className="logo-section footer home">
                    Grace Lake Apartments
                </div>
                <div className="footer-link-section">
                    <NavLink to="/" className="nav-link home">
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
                    <NavLink to="/contact" className="nav-link">
                        Contact
            </NavLink>
                </div>
                <h2>icons</h2>
                <p>Copywrite © 2020 kstDevelopment</p>
                <p>Grace Lake Apartments</p>
            </div>
        );
    }
}
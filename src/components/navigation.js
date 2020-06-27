import React, { Component } from 'react';

export default class Navigation extends Component {
    render() {
        return (
            <div className="nav-bar">
                <h1>Grace Lake Apartments</h1>
                <a href="#">Floor-Plans</a>
                <a href="#">Map</a>
                <a href="#">Photos</a>
                <a href="#">Contact</a>
            </div>
        );
    }
}
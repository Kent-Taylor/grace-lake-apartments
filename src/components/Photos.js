import React, { Component } from 'react';
import Navigation from "./navigation";


export default class Photos extends Component {
    render() {
        return (
            <div>
                <Navigation />

                <div className='photos-container'>
                    photos page
            </div>
            </div>
        );
    }
}

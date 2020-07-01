import React, { Component } from 'react';
import Navigation from "./navigation";
import Footer from './footer';


export default class Photos extends Component {
    render() {
        return (
            <div>
                <Navigation />

                <div className='photos-container'>
                    photos page
            </div>
                <Footer />

            </div>
        );
    }
}

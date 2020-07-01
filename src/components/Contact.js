import React, { Component } from 'react';
import Navigation from "./navigation";
import Footer from './footer';


export default class Contact extends Component {
    render() {
        return (
            <div>
                <Navigation />
                <div className='contact-page-wrapper'>
                    contact page
            </div>
                <Footer />

            </div>
        );
    }
}

import React, { Component } from 'react';
import Navigation from "./navigation";
import Footer from './footer';


export default class Contact extends Component {
    constructor() {
        super()
        this.state = {
            sendButton: true
        }

    }

    render() {
        return (
            <div>
                <Navigation />
                <div className='contact-page-wrapper'>
                    {/* <form onS */}
                    <div className="left-side">
                        <p className="get-in-touch-text">Get in touch:</p>
                        <p className="subheading">Let us know what we can do to help!</p>
                        <input className="contact-form" placeholder="Name" />
                        <input className="contact-form" placeholder="Your Email" type="email" />
                        <textarea className="contact-form" placeholder="Your Message" />

                        {/* <button type="submit" className="send-button">{this.state.sendButton === true ? "Send" : "Message Sent"}</button> */}

                    </div>
                    <div className="right-side">
                        Contact us:
                    </div>
                </div>
                <Footer />

            </div>
        );
    }
}


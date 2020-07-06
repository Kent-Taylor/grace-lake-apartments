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
    handleSubmit = () => {
        console.log("button successfully clicked")
        this.setState({
            sendButton: false
        })
        event.preventDefault();
    }
    render() {
        return (
            <div>
                <Navigation />
                <div className='contact-page-wrapper'>
                    <form onSubmit={this.handleSubmit} >
                        <div className="left-side">
                            <p className="get-in-touch-text">Get in touch:</p>
                            <p className="subheading">Let us know what we can do to help!</p>
                            <input className="contact-form" placeholder="Name" />
                            <input className="contact-form" placeholder="Your Email" type="email" />
                            <textarea className="contact-form" placeholder="Your Message" />

                            <button type="submit" className="send-button">{this.state.sendButton === true ? "Send" : "Message Sent!"}</button>

                        </div>
                    </form>
                    <div className="right-side">
                        <div className="dark-wrapper">
                            <p className="heading">Connect with us:</p>
                            {/* <i class="fas fa-phone"></i> */}

                            <p className="sub-heading">Main office: (214) 748-3647</p>
                            {/* <i class="fas fa-paper-plane"></i> */}
                            <p>2876  Nash Street
                            Burr Ridge
                        TN</p>
                        </div>
                    </div>
                </div>
                <Footer />

            </div>
        );
    }
}


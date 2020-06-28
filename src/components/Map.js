import React, { Component } from 'react';
import Navigation from "./navigation";
import Iframe from "react-iframe";

export default class Map extends Component {
    render() {
        return (
            <div>
                <Navigation />
                <div className='map-container'>
                    <Iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1017.2106399832106!2d-84.12170723692752!3d35.96234389778385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x885c303da723c3ad%3A0x7f5d30f7bcc45bb2!2sForest%20Ridge%20Apartments!5e1!3m2!1sen!2sus!4v1593324007642!5m2!1sen!2sus"
                        width="1000"
                        height="950"
                        frameborder="0"
                        style="border:0;"
                        allowfullscreen=""
                        className="map"
                    ></Iframe>
                </div>
            </div>

        );
    }
}
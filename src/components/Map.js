import React, { Component } from 'react';
import Navigation from "./navigation";
import Iframe from "react-iframe";
import Footer from './footer';

export default class Map extends Component {
    render() {
        return (
            <div>
                <Navigation />
                <div className='map-container'>
                    <Iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1037.5536066022305!2d-84.1228381707673!3d35.96296108424407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDU3JzQ2LjciTiA4NMKwMDcnMjAuMyJX!5e1!3m2!1sen!2sus!4v1594077940467!5m2!1sen!2sus"
                        width="1000"
                        height="650"
                        frameborder="0"
                        style="border:0;"
                        allowfullscreen=""
                        className="map"
                    ></Iframe>
                </div>
                <Footer />

            </div>

        );
    }
}
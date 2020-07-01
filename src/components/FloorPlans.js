import React, { Component } from 'react';
import Navigation from "./navigation";
import Footer from './footer';

import Room1 from "../images/room1.png";
import Room2 from "../images/room2.png";
import Room3 from "../images/room3.png";
import Room4 from "../images/room4.png";
import Room5 from "../images/room5.png";
import Room6 from "../images/room6.png";
import Room7 from "../images/room7.png";
import Room8 from "../images/room8.png";
import Room9 from "../images/room9.png";


export default class FloorPlans extends Component {
    render() {
        return (
            <div>
                <Navigation />

                <div className='floor-plans-page'>
                    <div className="floor-plan-card-container">
                        <div className="floor-plan-card room1">
                            <img src={Room1} alt="image" />
                            <div className="card-text">
                                <h1>Sunset</h1>
                                <h3>1 Bed</h3>
                                <h3>1 Bath</h3>
                                <h3>$900/month</h3>
                            </div>
                        </div>
                    </div>
                    <div className="floor-plan-card-container">
                        <div className="floor-plan-card room2">
                            <img src={Room2} alt="image" />
                            <div className="card-text">

                                <h1>Royal</h1>
                                <h3>3 Bed</h3>
                                <h3>2 Bath</h3>
                                <h3>$1400/month</h3>
                            </div>
                        </div>
                    </div>
                    <div className="floor-plan-card-container">
                        <div className="floor-plan-card room3">
                            <img src={Room3} alt="image" />
                            <div className="card-text">

                                <h1>Bridgeview</h1>
                                <h3>1 Bed</h3>
                                <h3>1 Bath</h3>
                                <h3>$800/month</h3>
                            </div>
                        </div>
                    </div>
                    <div className="floor-plan-card-container">
                        <div className="floor-plan-card room4">
                            <img src={Room4} alt="image" />
                            <div className="card-text">

                                <h1>Fair Oaks</h1>
                                <h3>2 Bed</h3>
                                <h3>1 Bath</h3>
                                <h3>$100/month</h3>
                            </div>
                        </div>
                    </div>
                    <div className="floor-plan-card-container">
                        <div className="floor-plan-card room5">
                            <img src={Room5} alt="image" />
                            <div className="card-text">

                                <h1>Hamilton</h1>
                                <h3>2 Bed</h3>
                                <h3>2 Bath</h3>
                                <h3>$1500/month</h3>
                            </div>
                        </div>
                    </div>
                    <div className="floor-plan-card-container">
                        <div className="floor-plan-card room6">
                            <img src={Room6} alt="image" />
                            <div className="card-text">

                                <h1>Glenside</h1>
                                <h3>3 Bed</h3>
                                <h3>3 Bath</h3>
                                <h3>$1500/month</h3>
                            </div>
                        </div>
                    </div>
                    <div className="floor-plan-card-container">
                        <div className="floor-plan-card room7">
                            <img src={Room7} alt="image" />
                            <div className="card-text">

                                <h1>Pembroke</h1>
                                <h3>1 Bed</h3>
                                <h3>1 Bath</h3>
                                <h3>$1100/month</h3>
                            </div>
                        </div>
                    </div>
                    <div className="floor-plan-card-container">
                        <div className="floor-plan-card room8">
                            <img src={Room8} alt="image" />
                            <div className="card-text">

                                <h1>quiet water</h1>
                                <h3>1 Bed</h3>
                                <h3>1 Bath</h3>
                                <h3>$900/month</h3>
                            </div>
                        </div>
                    </div>
                    <div className="floor-plan-card-container">
                        <div className="floor-plan-card room9">
                            <img src={Room9} alt="image" />
                            <div className="card-text">

                                <h1>Stirling</h1>
                                <h3>1 Bed</h3>
                                <h3>1 Bath</h3>
                                <h3>$800/month</h3>
                            </div>
                        </div>
                    </div>
                </div>
        <Footer />

            </div>
        );
    }
}

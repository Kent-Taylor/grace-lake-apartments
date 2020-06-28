import React, { Component } from 'react';
import Navigation from "./navigation";

import Room1 from "../images/room1.jpg";
import Room2 from "../images/room2.png";
import Room3 from "../images/room3.jpg";
import Room4 from "../images/room4.jpg";
import Room5 from "../images/room5.jpg";
import Room6 from "../images/room6.jpg";
import Room7 from "../images/room7.jpg";
import Room8 from "../images/room8.jpg";
import Room9 from "../images/room9.jpg";


export default class FloorPlans extends Component {
    render() {
        return (
            <div>
                <Navigation />

                <div className='floor-plans-page'>
                    <div className="floor-plan-card-container">
                        <div className="floor-plan-card">
                            <img src={Room1} alt="image" />
                            <h2>Sunset</h2>
                            <h3>1 Bed</h3>
                            <h3>1 Bath</h3>
                            <h3>$900/month</h3>
                        </div>
                    </div>
                    <div className="floor-plan-card-container">
                        <div className="floor-plan-card">
                            <img src={Room2} alt="image" />
                            <h2>Royal</h2>
                            <h3>3 Bed</h3>
                            <h3>2 Bath</h3>
                            <h3>$1400/month</h3>
                        </div>
                    </div>
                    <div className="floor-plan-card-container">
                        <div className="floor-plan-card">
                            <img src={Room3} alt="image" />
                            <h2>Bridgeview</h2>
                            <h3>1 Bed</h3>
                            <h3>1 Bath</h3>
                            <h3>$800/month</h3>
                        </div>
                    </div>
                    <div className="floor-plan-card-container">
                        <div className="floor-plan-card">
                            <img src={Room4} alt="image" />
                            <h2>Fair Oaks</h2>
                            <h3>2 Bed</h3>
                            <h3>1 Bath</h3>
                            <h3>$100/month</h3>
                        </div>
                    </div>
                    <div className="floor-plan-card-container">
                        <div className="floor-plan-card">
                            <img src={Room5} alt="image" />
                            <h2>Hamilton</h2>
                            <h3>2 Bed</h3>
                            <h3>2 Bath</h3>
                            <h3>$1500/month</h3>
                        </div>
                    </div>
                    <div className="floor-plan-card-container">
                        <div className="floor-plan-card">
                            <img src={Room6} alt="image" />
                            <h2>Glenside</h2>
                            <h3>3 Bed</h3>
                            <h3>3 Bath</h3>
                            <h3>$1500/month</h3>
                        </div>
                    </div>
                    <div className="floor-plan-card-container">
                        <div className="floor-plan-card">
                            <img src={Room7} alt="image" />
                            <h2>Pembroke</h2>
                            <h3>1 Bed</h3>
                            <h3>1 Bath</h3>
                            <h3>$1100/month</h3>
                        </div>
                    </div>
                    <div className="floor-plan-card-container">
                        <div className="floor-plan-card">
                            <img src={Room8} alt="image" />
                            <h2>quiet water</h2>
                            <h3>1 Bed</h3>
                            <h3>1 Bath</h3>
                            <h3>$900/month</h3>
                        </div>
                    </div>
                    <div className="floor-plan-card-container">
                        <div className="floor-plan-card">
                            <img src={Room9} alt="image" />
                            <h2>Stirling</h2>
                            <h3>1 Bed</h3>
                            <h3>1 Bath</h3>
                            <h3>$800/month</h3>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

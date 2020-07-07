import React, { Component } from 'react';
// import FadeInSection from "./FadeInSection";
import Navigation from "./navigation";
import Footer from './footer';

export default class Home extends Component {
    render() {
        return (
            <div>
                <Navigation />
                <div className="home-page-container">
                    <div className="feature-section">
                        <div className="featured-text">
                            A community built for anybody and everybody.
                        </div>
                    </div>
                    <div className="image-links">
                        <img className="kitchen" src="https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2253&q=80" />
                        <div className="fun-box-one box">
                            updated kitchens
                    </div>
                        <div className="fun-box-two box">
                            gorgeous master suites
                    </div>
                        <img className="bedroom" src="https://images.unsplash.com/photo-1540518614846-7eded433c457?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2239&q=80" />

                        <img className="livingRoom" src="https://images.unsplash.com/photo-1580792897564-25cdec1395ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80" />

                        <img className="bathroom" src="https://images.unsplash.com/photo-1580793135067-3ae54b77f68b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80" />
                        <div className="fun-box-three box">
                            pool area
                    </div>
                        <img className="pool" src="https://images.unsplash.com/photo-1572331165267-854da2b10ccc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80" />
                        <img className="gym" src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2168&q=80" />
                        <div className="fun-box-four box">
                            24-hour gym
                    </div>
                        <img className="playground" src="https://images.unsplash.com/photo-1579231847384-9de04c6c0e36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80" />

                        <img className="cafe" src="https://images.unsplash.com/photo-1559305616-3f99cd43e353?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1275&q=80" />

                        <div className="fun-box-five box">
                            24/7 cafe & study area
                    </div>
                        <img className="study" src="https://images.unsplash.com/photo-1514369118554-e20d93546b30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80" />
                        <img className="pets" src="https://images.unsplash.com/photo-1553322396-0c9cd410975e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80" />
                        <div className="fun-box-six box">
                            pet friendly
                    </div>

                    </div>
                </div>
                <Footer />

            </div>
        );
    }
}
import React, { Component } from 'react';
import Navigation from "./navigation";
import Footer from './footer';


export default class Photos extends Component {
    constructor() {
        super()
        this.state = {
            view: "flase"
        }
    }
    modal = () => {
        console.log("This was clicked!")
        this.setState ({
            view: "true"
        })
    }

    render() {
        return (
            <div>
                <Navigation />
                <div className="photos-page-container">
                    <div className="background-image">
                        <div className="photo-message-box">
                            Featured Photos
                        </div>
                    </div>
                    <div className='photos-container'>

                        <img className={this.state.view === "true" ? "modal" : "kitchen"} onClick={this.modal} src="https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2253&q=80" />

                        <img className="bedroom" src="https://images.unsplash.com/photo-1540518614846-7eded433c457?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2239&q=80" />

                        <img className="livingRoom" src="https://images.unsplash.com/photo-1580792897564-25cdec1395ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80" />

                        <img className="bathroom" src="https://images.unsplash.com/photo-1580793135067-3ae54b77f68b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80" />

                        <img className="pool" src="https://images.unsplash.com/photo-1572331165267-854da2b10ccc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80" />

                        <img className="gym" src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2168&q=80" />

                        <img className="playground" src="https://images.unsplash.com/photo-1579231847384-9de04c6c0e36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80" />

                        <img className="cafe" src="https://images.unsplash.com/photo-1559305616-3f99cd43e353?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1275&q=80" />

                        <img className="study" src="https://images.unsplash.com/photo-1514369118554-e20d93546b30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80" />

                        <img className="floors" src="https://images.unsplash.com/photo-1562663474-6cbb3eaa4d14?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80" />

                        <img className="floors" src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80" />

                        <img className="floors" src="https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80" />

                        <img className="floors" src="https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80" />

                        <img className="floors" src="https://images.unsplash.com/photo-1519974719765-e6559eac2575?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80" />


                    </div>
                </div>
                <Footer />

            </div>
        );
    }
}

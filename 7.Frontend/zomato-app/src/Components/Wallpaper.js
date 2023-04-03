import React from 'react';
import '../Styles/home.css';
import { withRouter } from 'react-router-dom';

class Wallpaper extends React.Component {
    render() {
        return (
            <div>
                <img src="../Assets/homepageimg.png" width='100%' height='450' />

                <div className="logo">
                    <p>e!</p>
                </div>
                <div className="headings">
                    Find the best restaurants, cafes, bars
                        </div>
                <div className="locationSelector">
                    <select className="locationDropdown" onChange={this.handleChange}>
                        <option value="0">Select</option>
                    </select>
                    <input className="restaurantsinput" type="text" placeholder="Search Restaurant" />
                </div>
            </div >
        )
    }
}

export default withRouter(Wallpaper);
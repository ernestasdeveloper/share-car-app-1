//@flow
import * as React from "react";
import "../../styles/NavBar.css";
import { Link } from "react-router-dom";

export class NavBar extends React.Component<{}> {
    render() {
        return (
            <div className="bottom-navbar">
            <Link className="bottom-navbar-button" role="button" to="/profile/1">Profile</Link>
            <Link className="bottom-navbar-button" role="button" to="/trips/search">Routes map</Link>
            <button className="bottom-navbar-button">Rides</button>
            <button className="bottom-navbar-button">Change role</button>
            </div>
        );
    }
}
//@flow
import * as React from "react";
import "../../styles/NavBar.css";
import { Link, NavLink } from "react-router-dom";

export class NavBar extends React.Component<{}> {
    render() {
        return (
            <div className="bottom-navbar-siteWrapper">
            <div className="bottom-navbar">
            <NavLink className="bottom-navbar-button" role="button" to="/profile/1">Profile</NavLink>
            <NavLink className="bottom-navbar-button" role="button" to="/trips/search">Routes map</NavLink>
            <NavLink className="bottom-navbar-button" role="button" to="/rides/2">Rides</NavLink>
            <button className="bottom-navbar-button">Change role</button>
            </div>
            </div>
        );
    }
}
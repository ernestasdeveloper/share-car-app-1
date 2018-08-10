//@flow
import * as React from "react";
import "../../styles/NavBar.css";
import { NavLink } from "react-router-dom";

export class PassengerNavBar extends React.Component<{}> {
    render() {
        return (
            <div className="bottom-navbar-siteWrapper">
                <div className="bottom-navbar">
                    <NavLink className="bottom-navbar-button" role="button" to="/profile/1">Profile</NavLink>
                    <NavLink className="bottom-navbar-button" role="button" to="/trips/search">Trips</NavLink>
                    <button className="bottom-navbar-button">Rides</button>
                    <NavLink className="bottom-navbar-button" role="button" to="/role">Change role</NavLink>
                </div>
            </div>
        );
    }
}
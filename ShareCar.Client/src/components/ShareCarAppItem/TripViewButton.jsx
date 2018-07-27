import * as React from "react";
import { Link } from "react-router-dom";

export class TripViewButton extends React.Component {
    render(){
        return(
            <div>
            <Link to="/trip_view"><button>Trip View</button></Link>
            </div>
        );
    }
}
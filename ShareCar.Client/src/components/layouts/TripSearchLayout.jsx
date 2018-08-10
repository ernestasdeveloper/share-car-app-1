// @flow
import * as React from "react";
import { TripSearchForm } from "../Trip/TripSearchForm";
import {RestTripService} from "../../api/RestTripService";
import { NavBar } from "../NavigationBar/NavBar";
import "../../styles/genericStyles.css";

export class TripSearchLayout extends React.Component<{}> {

    tripService = new RestTripService();

    render(){
        return(
            <div>
                <NavBar/>
                <div className="gen-container">
                <TripSearchForm tripService={this.tripService}/>
                </div>
            </div>
        );
    }
}
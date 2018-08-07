// @flow
import * as React from "react";
import { TripSearchForm } from "../Trip/TripSearchForm";
import {TripService} from "../../api/TripService";
import { NavBar } from "../NavigationBar/NavBar";
import { Link } from "react-router-dom";
import "../../styles/genericStyles.css";

type TripSearchLayoutProps = {
    tripService: TripService
};


export class TripSearchLayout extends React.Component<TripSearchLayoutProps> {

    render(){
        return(
            <div>
                <NavBar/>
                <div className="gen-container">
                <TripSearchForm tripService={this.props.tripService}/>
                </div>
            </div>
        );
    }
}
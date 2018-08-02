// @flow
import * as React from "react";
import { TripSearchForm } from "../Trip/TripSearchForm";
import {TripService} from "../../api/TripService";
import { NavBar } from "../NavigationBar/NavBar";
import { Link } from "react-router-dom";

type TripSearchLayoutProps = {
    tripService: TripService
};


export class TripSearchLayout extends React.Component<TripSearchLayoutProps> {

    render(){
        return(
            <div>
                <NavBar/>
                <TripSearchForm tripService={this.props.tripService}/>
                <Link to="/trips"><button>View all</button></Link>
            </div>
        );
    }
}
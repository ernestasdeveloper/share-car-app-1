//@flow

import * as React from "react";
import {MapRideRequest} from "../maps/MapRideRequest";
import {NavBar} from "../NavigationBar/NavBar";

type RideRequestLayoutProps = {
    match: any;
}

export class RideRequestLayout extends React.Component<RideRequestLayoutProps> {
    render() {
        return (
            <div>
                <MapRideRequest tripId={this.props.match.params.id}/>
                <NavBar/>
            </div>
        );
    }
}
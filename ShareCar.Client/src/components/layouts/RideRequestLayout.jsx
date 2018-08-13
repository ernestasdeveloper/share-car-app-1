//@flow

import * as React from "react";
import {RideRequestMap} from "../RideRequest/RideRequestMap";
import {RideRequestSuccess} from "../RideRequest/RideRequestSuccess";
import {NavBar} from "../NavigationBar/NavBar";
import "../../styles/genericStyles.css";

type RideRequestLayoutProps = {
    match: any;
}

type RideRequestLayoutState = {
    step: number
}

export class RideRequestLayout extends React.Component<RideRequestLayoutProps, RideRequestLayoutState> {

    state = {
        step: 1
    };

    nextStep() {
        this.setState({
            step: this.state.step + 1
        });
    };
    
    render() {
        switch (this.state.step) {
            default:
                return "Something has gone wrong";
            case 1:
                return (<div>
                            <RideRequestMap tripId={this.props.match.params.trip_id}
                                            passengerId={this.props.match.params.passenger_id}
                                            nextStep={this.nextStep.bind(this)}/>
                            <NavBar/>
                        </div>);
            case 2:
                return (<div>
                            <div className="gen-container">
                            <RideRequestSuccess/>
                            </div>
                            <NavBar/>
                        </div>);
        }
    }
}
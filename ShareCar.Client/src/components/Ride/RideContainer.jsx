// @flow
import * as React from "react";
import "../../styles/genericStyles.css";
import { Redirect } from "react-router-dom";

type RideContainerProps = {
    ride: Ride,
};

type RideContainerState = {
    redirect: boolean
}

export class RideContainer extends React.Component<RideContainerProps, RideContainerState> {
    state = {
        redirect: false
    }
    handleOnClick = () => {
        this.setState({redirect: true});
    }
    render() {
        if (this.state.redirect) {
            return <Redirect push to={"/trips/" + this.props.ride.trip.id + "/ride/" + this.props.ride.id}/> //TODO: add proper link
        }
        return (
            <tr onClick={this.handleOnClick.bind(this)}>
                    <td className="gen-txt">{this.props.ride.status}</td>
                            <td className="gen-txt">{this.props.ride.driver.firstName}</td>
                            <td className="gen-txt">{this.props.ride.passenger.firstName}</td>
            </tr>
        );
    }
}
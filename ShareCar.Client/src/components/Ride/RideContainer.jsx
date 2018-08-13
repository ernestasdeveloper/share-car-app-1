// @flow
import * as React from "react";
import "../../styles/genericStyles.css";
import { Redirect } from "react-router-dom";
import { RideStatusValues } from "../../utils/constants";
import { Roles } from "../../utils/constants";
import Moment from "react-moment";

type RideContainerProps = {
    ride: Ride,
    role: Role
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
            return <Redirect push to={"/rides/" + this.props.role + "/" + this.props.ride.id + "/details"}/> //TODO: add proper link
        }
        return (
            <tr onClick={this.handleOnClick.bind(this)}>
                            <td className="gen-txt">{
                                (() => {
                                    switch (this.props.ride.status){
                                        case "REQUEST_PENDING": return "Req pending";
                                        case "REQUEST_ACCEPTED": return "Req accepted";
                                        case "REQUEST_DECLINED": return "Req declined";
                                        case "REQUEST_CANCELLED": return "Req cancelled";
                                        case "RIDE_CANCELLED": return "Ride cancelled";
                                        case "RIDE_SUCCESSFUL": return "Ride succesful";
                                        case "RIDE_REMOVED": return "Ride removed";
                                        default: return "Error";
                                    }
                                })()
                            }</td>
                            <td className="gen-txt">
                            {
                                (() => {
                                    switch (this.props.role){
                                        case Roles.DRIVER: return <div>{this.props.ride.passenger.firstName} {this.props.ride.passenger.lastName}</div>;
                                        case Roles.PASSENGER: return <div>{this.props.ride.driver.firstName} {this.props.ride.driver.lastName}</div>;
                                        case Roles.ADMIN: return <div>{this.props.ride.driver.firstName} {this.props.ride.driver.lastName} {this.props.ride.passenger.firstName} {this.props.ride.passenger.lastName}</div>;
                                        default: return "Error";
                                    }
                                })()
                            }</td>
                            <td className="gen-txt"><Moment date={this.props.ride.trip.dateTime} format="MM-DD HH:mm"/></td>
            </tr>
        );
    }
}
//@flow
import * as React from "react";
import {NavBar} from "../NavigationBar/NavBar";
import {RideService} from "../../api/RideService";
import "../../styles/genericStyles.css";
import { RestRideService } from "../../api/RestRideService";
import { Roles } from "../../utils/constants";
import { RideDetailsMap } from "./RideDetailsMap";

type RideDetailsLayoutProps = {
    rideService: RideService
};

type RideDetailsLayoutState = {
    isLoading: boolean,
    ride: Ride,
    role: Role
};

export class RideDetailsLayout extends React.Component<RideDetailsLayoutProps, RideDetailsLayoutState> {
    state = {
        isLoading: true
    };

    rideService = new RestRideService();

    async componentDidMount() {
        this.setState({role : this.props.match.params.role})
        const data = await this.rideService.getSingle(this.props.match.params.id);
        await new Promise(resolve => setTimeout(resolve, 1000)); //sleep 1000ms
        this.setState({isLoading: false, ride: data});
        console.log(this.state.ride);
    }
    render() {
        if (this.state.isLoading) return (<div><NavBar/><div className="gen-txt-center-imp gen-container">Loading</div></div>);
        return (
            <div>
                <NavBar/>
                <div className="gen-container">
                    <div className="gen-flex-column-container">
                        <RideDetailsMap pickupPoint={this.state.ride.pickupPoint}/>
                    </div>
                    <div className="gen-flex-column-container">
                        <div className="gen-flex-column-items gen-txt">{this.state.ride.status}</div>
                        <div className="gen-flex-column-items gen-txt">From: {this.state.ride.trip.startPointName}</div>
                        <div className="gen-flex-column-items gen-txt">To: {this.state.ride.trip.endPointName}</div>
                        <div className="gen-flex-column-items gen-txt">{this.state.ride.trip.dateTime}</div>
                    </div>
                {
                                (() => {
                                    switch (this.state.role){
                                        case Roles.DRIVER: return <div className="gen-flex-column-container">
                                            <div className="gen-flex-column-items gen-txt">{this.state.ride.passenger.firstName}</div>
                                            <div className="gen-flex-column-items gen-txt">{this.state.ride.passenger.lastName}</div>
                                            <div className="gen-flex-column-items gen-txt">{this.state.ride.passenger.phoneNo}</div>                                            
                                            <button className="gen-flex-column-items gen-button">Accept request</button>
                                            <button className="gen-flex-column-items gen-button">Decline request</button>
                                        </div>;
                                        case Roles.PASSENGER: return <div className="gen-flex-column-container">
                                        <div className="gen-flex-column-items gen-txt">{this.state.ride.driver.firstName}</div>
                                            <div className="gen-flex-column-items gen-txt">{this.state.ride.driver.lastName}</div>
                                            <div className="gen-flex-column-items gen-txt">{this.state.ride.driver.phoneNo}</div>
                                            <button className="gen-flex-column-items gen-button">Cancel request</button>
                                            </div>;
                                        case Roles.ADMIN: return <div className="gen-flex-column-container">
                                        <div className="gen-flex-column-items gen-txt">Driver: {this.state.ride.driver.firstName}</div>
                                            <div className="gen-flex-column-items gen-txt">{this.state.ride.driver.lastName}</div>
                                            <div className="gen-flex-column-items gen-txt">{this.state.ride.driver.phoneNo}</div>
                                         <div className="gen-flex-column-items gen-txt">Passenger: {this.state.ride.passenger.firstName}</div>
                                            <div className="gen-flex-column-items gen-txt">{this.state.ride.passenger.lastName}</div>
                                            <div className="gen-flex-column-items gen-txt">{this.state.ride.passenger.phoneNo}</div>
                                            <button className="gen-flex-column-items gen-button">Accept request</button>
                                        <button className="gen-flex-column-items gen-button">Decline request</button>
                                        <button className="gen-flex-column-items gen-button">Cancel request</button>
                                        </div>;
                                        default: return "Error";
                                    }
                                })()
                            }
                </div>
            </div>
        );
    }
}
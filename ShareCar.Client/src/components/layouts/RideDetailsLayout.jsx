//@flow
import * as React from "react";
import {NavBar} from "../NavigationBar/NavBar";
import {RideService} from "../../api/RideService";
import "../../styles/genericStyles.css";
import { RestRideService } from "../../api/RestRideService";
import { Roles } from "../../utils/constants";
import { RideDetailsMap } from "./RideDetailsMap";
import {RideStatusValues} from "../../utils/constants"
import {Redirect} from "react-router-dom";
import Moment from "react-moment";

type RideDetailsLayoutProps = {
    rideService: RideService
};

type RideDetailsLayoutState = {
    isLoading: boolean,
    ride: Ride,
    role: Role,
    redirect: boolean
};

export class RideDetailsLayout extends React.Component<RideDetailsLayoutProps, RideDetailsLayoutState> {
    state = {
        isLoading: true,
        redirect: false
    };

    rideService = new RestRideService();

    async acceptRequest() {
        await this.rideService.updateStatus(this.props.match.params.id, {status: RideStatusValues.REQUEST_ACCEPTED});
        await new Promise(resolve => setTimeout(resolve, 1000)); //sleep 1000ms
        this.setState({redirect: true});
    }

    async declineRequest() {
        await this.rideService.updateStatus(this.props.match.params.id, {status: RideStatusValues.REQUEST_DECLINED});
        await new Promise(resolve => setTimeout(resolve, 1000)); //sleep 1000ms
        this.setState({redirect: true});
    }

    async cancelRequest() {
        await this.rideService.updateStatus(this.props.match.params.id, {status: RideStatusValues.REQUEST_CANCELLED});
        await new Promise(resolve => setTimeout(resolve, 1000)); //sleep 1000ms
        this.setState({redirect: true});
    }

    async componentDidMount() {
        this.setState({role : this.props.match.params.role})
        const data = await this.rideService.getSingle(this.props.match.params.id);
        await new Promise(resolve => setTimeout(resolve, 1000)); //sleep 1000ms
        this.setState({isLoading: false, ride: data});
        console.log(this.state.ride);
    }
    render() {
        if (this.state.redirect) {
            if (this.state.role === Roles.DRIVER) {
                return <Redirect push to="/rides/driver"/>
            }
            else if (this.state.role === Roles.PASSENGER) {
                return <Redirect push to="/rides/passenger"/>
            }
        }
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
                        <div className="gen-flex-column-items gen-txt"><Moment date={this.state.ride.trip.dateTime} format="MM-DD HH:mm" /></div>
                    </div> 
                {
                                (() => {
                                    switch (this.state.role){
                                        case Roles.DRIVER: return <div className="gen-flex-column-container">
                                            <div className="gen-flex-column-items gen-txt">Passenger: {this.state.ride.passenger.firstName} {this.state.ride.passenger.lastName}</div>
                                            <div className="gen-flex-column-items gen-txt">{this.state.ride.passenger.phoneNo}</div>                                            
                                            <button className="gen-flex-column-items gen-button" onClick={this.acceptRequest.bind(this)}>Accept request</button>
                                            <button className="gen-flex-column-items gen-button" onClick={this.declineRequest.bind(this)}>Decline request</button>
                                        </div>;
                                        case Roles.PASSENGER: return <div className="gen-flex-column-container">
                                        <div className="gen-flex-column-items gen-txt">Driver: {this.state.ride.driver.firstName} {this.state.ride.driver.lastName}</div>
                                            <div className="gen-flex-column-items gen-txt">{this.state.ride.driver.phoneNo}</div>
                                            <button className="gen-flex-column-items gen-button" onClick={this.cancelRequest.bind(this)}>Cancel request</button>
                                            </div>;
                                        case Roles.ADMIN: return <div className="gen-flex-column-container">
                                        <div className="gen-flex-column-items gen-txt">Driver: {this.state.ride.driver.firstName} {this.state.ride.driver.lastName}</div>
                                            <div className="gen-flex-column-items gen-txt">{this.state.ride.driver.phoneNo}</div>
                                         <div className="gen-flex-column-items gen-txt">Passenger: {this.state.ride.passenger.firstName} {this.state.ride.passenger.lastName}</div>
                                            <div className="gen-flex-column-items gen-txt">{this.state.ride.passenger.phoneNo}</div>
                                            <button className="gen-flex-column-items gen-button" onClick={this.acceptRequest.bind(this)}>Accept request</button>
                                        <button className="gen-flex-column-items gen-button" onClick={this.declineRequest.bind(this)}>Decline request</button>
                                        <button className="gen-flex-column-items gen-button" onClick={this.cancelRequest.bind(this)}>Cancel request</button>
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
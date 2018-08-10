//@flow
import * as React from "react";
import {NavBar} from "../NavigationBar/NavBar";
import {RideService} from "../../api/RideService";
import "../../styles/genericStyles.css";
import { RestRideService } from "../../api/RestRideService";
import { Roles } from "../../utils/constants";

type RideDetailsLayoutProps = {
    rideService: RideService
};

type RideDetailsLayoutState = {
    isLoading: boolean,
    rides: Ride[],
    role: Roles
};

export class RideDetailsLayout extends React.Component<RideDetailsLayoutProps, RideDetailsLayoutState> {
    state = {
        isLoading: true,
        rides: [],
        role: "DRIVER"
    };

    rideService = new RestRideService();

    async componentDidMount() {
        const data = await this.rideService.getSingle(this.props.match.params.id);
        await new Promise(resolve => setTimeout(resolve, 1000)); //sleep 1000ms
        this.setState({isLoading: false, rides: data});
        console.log(this.state.rides);
    }
    render() {
        if (this.state.isLoading) return (<div><NavBar/><div className="gen-txt-center-imp gen-container">Loading</div></div>);
        return (
            <div>
                <NavBar/>
                <div className="gen-container">
                    <div className="gen-flex-column-container">
                        <div className="gen-flex-column-items gen-txt">{this.state.rides.status}</div>
                        <div className="gen-flex-column-items gen-txt">From: {this.state.rides.trip.startPointName}</div>
                        <div className="gen-flex-column-items gen-txt">To: {this.state.rides.trip.endPointName}</div>
                        <div className="gen-flex-column-items gen-txt">{this.state.rides.trip.dateTime}</div>
                    </div>
                {
                                (() => {
                                    switch (this.state.role){
                                        case "DRIVER": return <div className="gen-flex-column-container">
                                            <div className="gen-flex-column-items gen-txt">{this.state.rides.passenger.firstName}</div>
                                            <div className="gen-flex-column-items gen-txt">{this.state.rides.passenger.lastName}</div>
                                            <div className="gen-flex-column-items gen-txt">{this.state.rides.passenger.phoneNo}</div>                                            
                                            <button className="gen-flex-column-items gen-button">Accept request</button>
                                            <button className="gen-flex-column-items gen-button">Decline request</button>
                                        </div>;
                                        case "PASSENGER": return <div className="gen-flex-column-container">
                                        <div className="gen-flex-column-items gen-txt">{this.state.rides.driver.firstName}</div>
                                            <div className="gen-flex-column-items gen-txt">{this.state.rides.driver.lastName}</div>
                                            <div className="gen-flex-column-items gen-txt">{this.state.rides.driver.phoneNo}</div>
                                            <button className="gen-flex-column-items gen-button">Cancel request</button>
                                            </div>;
                                        case "ADMIN": return <div className="gen-flex-column-container">
                                        <div className="gen-flex-column-items gen-txt">Driver: {this.state.rides.driver.firstName}</div>
                                            <div className="gen-flex-column-items gen-txt">{this.state.rides.driver.lastName}</div>
                                            <div className="gen-flex-column-items gen-txt">{this.state.rides.driver.phoneNo}</div>
                                         <div className="gen-flex-column-items gen-txt">Passenger: {this.state.rides.passenger.firstName}</div>
                                            <div className="gen-flex-column-items gen-txt">{this.state.rides.passenger.lastName}</div>
                                            <div className="gen-flex-column-items gen-txt">{this.state.rides.passenger.phoneNo}</div>
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
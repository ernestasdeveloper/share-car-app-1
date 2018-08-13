//@flow
import * as React from "react";
import {NavBar} from "../NavigationBar/NavBar";
import { Link } from "react-router-dom";
import "../../styles/TripContainer.css";
import Moment from "react-moment";
import { RestRideService } from "../../api/RestRideService";
import { RestTripService } from "../../api/RestTripService";
import "../../styles/genericStyles.css";
import "../../styles/tripDetails.css";

type TripDetailsLayoutProps = {
    tripId: TripId
};

type TripDetailsLayoutState = {
    isLoading: boolean,
    trip: Trip,
    requestBoxOpen: boolean
};

export class TripDetailsLayout extends React.Component<TripDetailsLayoutProps, TripDetailsLayoutState> {

    state = {
        isLoading: true,
        trip: null,
        requestBoxOpen: false
    };

    tripService = new RestTripService();
    rideService = new RestRideService();

    async componentDidMount() {
        const data = await this.tripService.getSingle(this.props.match.params.id);
        await new Promise(resolve => setTimeout(resolve, 1000)); //sleep 1000ms
        this.setState({isLoading: false, trip: data});
    }

    render() {
        if (this.state.isLoading) return (<div><NavBar/><div className="gen-txt-center-imp gen-container">Loading</div></div>);
        else { 
            return (
                <div>
                    <NavBar/>
                    <div className="trip-details-container gen-container">
                        <div className="trip-details">
                            <div className="gen-flex-column-container">
<<<<<<< HEAD
                                <div className="gen-flex-column-items gen-txt">Trip ID: {this.state.trip.id}</div>
                                <div className="gen-flex-column-items gen-txt">From: {this.state.trip.startPoint.name}</div>
                                <div className="gen-flex-column-items gen-txt">To: {this.state.trip.endPoint.name}</div>
                                <div className="gen-flex-column-items gen-txt">Date: <Moment date={this.state.trip.dateTime} format="YYYY-MM-DD"/></div>
                                <div className="gen-flex-column-items gen-txt">Time: <Moment date={this.state.trip.dateTime} format="HH:mm"/></div>
                                    <div className="details-driver-container gen-flex-column-items">
                                        <div className="details-item-dinfo">Driver info</div>
                                        <div className="details-item details-item-did">Driver id</div>
                                        <div className="details-item details-item-tdid">{this.state.trip.driver.id}</div>
                                        <div className="details-item details-item-a">First name</div>
                                        <div className="details-item details-item-b">{this.state.trip.driver.firstName}</div>
                                        <div className="details-item details-item-c">Last name</div>
                                        <div className="details-item details-item-d">{this.state.trip.driver.lastName}</div>
                                        <div className="details-item details-item-g">Phone number</div>
                                        <div className="details-item details-item-h">{this.state.trip.driver.phoneNo}</div>
                                                
                                    </div>
                                    <div className="gen-flex-row-container">
                                        <Link className="gen-button gen-flex-row-item" to={"/trips/" + this.props.match.params.id + "/rides"}>Rides</Link>
                                        <Link className="gen-button gen-flex-row-item" to={"/trips/request/" + this.props.match.params.id}>Request</Link>
                                    </div>
                                </div>
                            </div>
=======
                                        <div className="gen-flex-column-items gen-txt">Trip ID: {this.state.trip.id}</div>
                                        <div className="gen-flex-column-items gen-txt">From: {this.state.trip.startPoint.name}</div>
                                        <div className="gen-flex-column-items gen-txt">To: {this.state.trip.endPoint.name}</div>
                                        <div className="gen-flex-column-items gen-txt">Date: <Moment date={this.state.trip.dateTime} format="YYYY-MM-DD"/></div>
                                        <div className="gen-flex-column-items gen-txt">Time: <Moment date={this.state.trip.dateTime} format="HH:mm"/></div>
                                        <div className="details-driver-container gen-flex-column-items">
                            <div className="details-item-dinfo">Driver info</div>
                            <div className="details-item details-item-did">Driver id</div>
                            <div className="details-item details-item-tdid">{this.state.trip.driver.id}</div>
                            <div className="details-item details-item-a">First name</div>
                            <div className="details-item details-item-b">{this.state.trip.driver.firstName}</div>
                            <div className="details-item details-item-c">Last name</div>
                            <div className="details-item details-item-d">{this.state.trip.driver.lastName}</div>
                            <div className="details-item details-item-g">Phone number</div>
                            <div className="details-item details-item-h">{this.state.trip.driver.phoneNo}</div>
                            <div className="details-container-form">
                            <Link className="details-item details-item-rides gen-button" to={"/trips/" + this.props.match.params.id + "/rides/driver"}>Rides</Link>
                            {/*PassengerID hardcoded into URL*/}
                            <Link className="details-item details-item-request gen-button" to={"/trips/request/" + this.props.match.params.id + "/2"}>Request</Link>
                            </div>
                        </div>
                            </div>
                        </div>

>>>>>>> c9162a00cd76c322dab46d08b5f40f76098d68ba
                    </div>
                </div>
            );
        }
    }
}
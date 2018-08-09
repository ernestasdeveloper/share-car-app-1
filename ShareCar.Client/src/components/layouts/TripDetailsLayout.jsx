//@flow
import * as React from "react";
import {NavBar} from "../NavigationBar/NavBar";
import {TripService} from "../../api/TripService";
import { Link } from "react-router-dom";
import "../../styles/TripContainer.css";
import Moment from "react-moment";
import { RestRideService } from "../../api/RestRideService";
import "../../styles/genericStyles.css";
import "../../styles/tripDetails.css";

type TripDetailsLayoutProps = {
    tripService: TripService,
    tripId: TripId
};

type TripDetailsLayoutState = {
    isLoading: boolean,
    trip: Trip,
    requestBoxOpen: boolean
}

const RIDE_SERVICE = new RestRideService();

export class TripDetailsLayout extends React.Component<TripDetailsLayoutProps, TripDetailsLayoutState> {

    state = {
        isLoading: true,
        trip: null,
        requestBoxOpen: false
    };

    async componentDidMount() {
        const data = await this.props.tripService.getSingle(this.props.match.params.id);
        await new Promise(resolve => setTimeout(resolve, 1000)); //sleep 1000ms
        this.setState({isLoading: false, trip: data});
    }

    async handleSubmit(e: any) {
        const payload = {
            passengerId: e.target.passengerId.value,
            tripId: this.state.trip.id
        };
        await RIDE_SERVICE.add(payload);
    }

    render() {
        if (this.state.isLoading) return (<div><NavBar/><div className="gen-txt">Loading</div></div>);
        else { 
            return (
                <div>
                    <NavBar/>
                    <div className="trip-details-container gen-container">
                        <div className="trip-details">
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <th scope="row">Trip ID</th>
                                        <td>{this.state.trip.id}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">From</th>
                                        <td>{this.state.trip.startPoint.name}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">To</th>
                                        <td>{this.state.trip.endPoint.name}</td>
                                    </tr>
                                    <tr>
                                        <th schope="row">Date</th>
                                        <td><Moment date={this.state.trip.dateTime} format="YYYY-MM-DD"/></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Time</th>
                                        <td><Moment date={this.state.trip.dateTime} format="HH:mm"/></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="details-driver-container">
                            <div className="details-item-dinfo">Driver info</div>
                            <div className="details-item details-item-did">Driver id</div>
                            <div className="details-item details-item-tdid">{this.state.trip.driver.id}</div>
                            <div className="details-item details-item-a">First name</div>
                            <div className="details-item details-item-b">{this.state.trip.driver.firstName}</div>
                            <div className="details-item details-item-c">Last name</div>
                            <div className="details-item details-item-d">{this.state.trip.driver.lastName}</div>
                            <div className="details-item details-item-g">Phone number</div>
                            <div className="details-item details-item-h">{this.state.trip.driver.phoneNo}</div>
                        
                        <form className="details-container-form" id="passengerId-debug" onSubmit={this.handleSubmit.bind(this)}>
                            {/*BEGIN passengerId field for debugging*/}
                           
                                <label htmlFor="passengerId" className="details-item details-item-p">passengerId</label>
                                <input type="text" placeholder="input passengerid" className="w3-input w3-border w3-round-large details-item-pi details-item" name="passengerId"/>
                          
                            {/*END*/}
                                <Link to={"/trips/" + this.props.match.params.id + "/rides"}><button className="details-item details-item-ride gen-button">Rides</button></Link>
                                <button className="details-item details-item-request gen-button">Request</button>
                            
                        </form>
                        </div>
                    </div>
                </div>
            );
        }
    }
}
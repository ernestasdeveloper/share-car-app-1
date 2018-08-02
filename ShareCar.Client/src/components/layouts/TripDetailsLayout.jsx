//@flow
import * as React from "react";
import {NavBar} from "../NavigationBar/NavBar";
import {TripService} from "../../api/TripService";
import "../../styles/TripContainer.css";
import Moment from "react-moment";
import { RestRideService } from "../../api/RestRideService";

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
        if (this.state.isLoading) return (<div><NavBar/><div>Loading</div></div>);
        else { 
            return (
                <div>
                    <NavBar/>
                    <div className="trip-details-container">
                        <div className="trip-details">
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <th scope="row">Trip ID</th>
                                        <td>{this.state.trip.id}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Route</th>
                                        <td>{this.state.trip.route}</td>
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
                        <div className="driver-details-lazy">
                            <div>{this.state.trip.driver.id}</div>
                            <div>{this.state.trip.driver.firstName}</div>
                            <div>{this.state.trip.driver.lastName}</div>
                            <div>{this.state.trip.driver.email}</div>
                            <div>{this.state.trip.driver.phoneNo}</div>
                        </div>
                        <form id="passengerId-debug" onSubmit={this.handleSubmit.bind(this)}>
                            {/*BEGIN passengerId field for debugging*/}
                            <div className="form-group">
                                <label htmlFor="passengerId">passengerId</label>
                                <input type="text" className="form-control" name="passengerId"/>
                            </div>
                            {/*END*/}
                            <div className="trip-details-actions">
                                <button className="btn btn-primary">Rides</button>
                                <button className="btn btn-primary">Request</button>
                            </div>
                        </form>
                    </div>
                </div>
            );
        }
    }
}
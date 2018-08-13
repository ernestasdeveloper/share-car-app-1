//@flow
import * as React from "react";
import {NavBar} from "../NavigationBar/NavBar";
import {RestTripService} from "../../api/RestTripService";
import {TripContainer} from "../Trip/TripContainer";
import "../../styles/TripContainer.css";
import "../../styles/genericStyles.css";
import { Link } from "react-router-dom";

type TripListLayoutProps = {
    match: any
};

type TripListLayoutState = {
    isLoading: boolean,
    trips: Trip[]
};

export class TripListLayout extends React.Component<TripListLayoutProps, TripListLayoutState> {

    tripService = new RestTripService();

    state = {
        isLoading: true,
        trips: []
    };
    async componentDidMount() {
        console.log("date " + this.props.match.params.date);
        const data = await this.tripService.getAll(this.props.match.params.date);
        await new Promise(resolve => setTimeout(resolve, 1000)); //sleep 1000ms
        this.setState({isLoading: false, trips: data});
    }

    render() {
        if (this.state.isLoading) return (<div><NavBar/><div className="gen-txt-center-imp gen-container">Loading</div></div>);
        return (
            <div>
                <NavBar/>
                <div className="gen-container">
                <div className="trip-container">
                    <table className="table">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col" className="trip-description sticky-header">From</th>
                                <th scope="col" className="trip-description sticky-header">To</th>
                                <th scope="col"className="trip-description sticky-header">Time</th>
                                <th scope="col"className="trip-description sticky-header">Driver</th>
                            </tr>
                        </thead>
                        <tbody>

                        {this.state.trips.map((x, i) =>
                            <TripContainer key={i}
                                // onFullDataRequest={() => this.props.tripService.getSingle(x)}
                                trip={x}
                                // onItemUpdate={newData => this.handleUpdate(x.id, newData)}
                                // onItemRemove={() => this.handleRemove(x.id)}
                                // onStatusUpdate={newStatus => this.handleStatusUpdate(x.id, newStatus)}
                            />)
                        }
                        </tbody>
                    </table>
                    </div>
                    <Link to="/trips/new"><button className="trip-new-button gen-button">Create new</button></Link>
                </div>
            </div>
        );
    }
}
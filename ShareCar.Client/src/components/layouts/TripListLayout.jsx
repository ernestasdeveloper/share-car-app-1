//@flow
import * as React from "react";
import {NavBar} from "../NavigationBar/NavBar";
import {TripService} from "../../api/TripService";
import {TripContainer} from "../Trip/TripContainer";
import "../../styles/TripContainer.css";
import "../../styles/genericStyles.css";

type TripListLayoutProps = {
    tripService: TripService,
    match: any
};

type TripListLayoutState = {
    isLoading: boolean,
    trips: Trip[]
};

export class TripListLayout extends React.Component<TripListLayoutProps, TripListLayoutState> {
    state = {
        isLoading: true,
        trips: []
    };
    async componentDidMount() {
        console.log("date " + this.props.match.params.date);
        const data = await this.props.tripService.getAll(this.props.match.params.date);
        await new Promise(resolve => setTimeout(resolve, 1000)); //sleep 1000ms
        this.setState({isLoading: false, trips: data});
    }

    render() {
        return (
            <div>
                <NavBar/>
                <div className="trip-container">

                    <table className="table">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col" className="trip-description">Route</th>
                                <th scope="col"className="trip-description">Time</th>
                                <th scope="col"className="trip-description">Driver</th>
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
            </div>
        );
    }
}
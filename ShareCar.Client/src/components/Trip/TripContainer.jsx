// @flow
import * as React from "react";
import Moment from "react-moment";
import "../../styles/TripContainer.css";
import { Redirect } from "react-router-dom";

type TripContainerProps = {
    trip: Trip,
    // onFullDataRequest: () => Promise<TodoItem>,
    // onItemUpdate: (data: TodoItem) => mixed,
    // onItemRemove: () => mixed,
    // onStatusUpdate: (newStatus: TodoItemStatus) => mixed
};

type TripContainerState = {
    redirect: boolean
}

export class TripContainer extends React.Component<TripContainerProps, TripContainerState> {
    state = {
        redirect: false
    }
    handleOnClick = () => {
        this.setState({redirect: true});
    }
    render() {
        if (this.state.redirect) {
            return <Redirect push to={"/trips/details/" + this.props.trip.id}/> 
        }
        return (
            <tr className="trip-list-container" onClick={this.handleOnClick.bind(this)}>
                    <td className="trip-text">{this.props.trip.startPoint.name}</td>
                    <td className="trip-text">{this.props.trip.endPoint.name}</td>
                    <td className="trip-text"><Moment date={this.props.trip.dateTime} format="HH:mm" /></td>
                    <td className="trip-text">{this.props.trip.driver.firstName + " " + this.props.trip.driver.lastName}</td>
            </tr>
        );
    }
}
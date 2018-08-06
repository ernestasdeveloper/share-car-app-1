//@flow

import * as React from "react";
import "../../styles/genericStyles.css";

type AddTripConfirmationProps = {
    fieldValues: {
        route: string,
        dateTime: string,
        driverId: UserId
    },
    previousStep: Function,
    submitTrip: Function
};

type AddTripConfirmationState = {

};

export class AddTripConfirmation extends React.Component<AddTripConfirmationProps, AddTripConfirmationState> {
    render() {
        return(
            <div className="gen-flex-column-container">
                <div className="gen-flex-column-item">{this.props.fieldValues.route}</div>
                <div className="gen-flex-column-item">{this.props.fieldValues.dateTime}</div>
                <div className="gen-flex-column-item">{this.props.fieldValues.driverId}</div>
                <button className="gen-button gen-flex-column-item" onClick={this.props.submitTrip.bind(this)}>Submit</button>
            </div>
        );
    }
}
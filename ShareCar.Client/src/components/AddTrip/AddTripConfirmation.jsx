//@flow

import * as React from "react";

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
            <div>
                <div>{this.props.fieldValues.route}</div>
                <div>{this.props.fieldValues.dateTime}</div>
                <div>{this.props.fieldValues.driverId}</div>
                <button className="btn btn-primary" onClick={this.props.submitTrip.bind(this)}>Submit</button>
            </div>
        );
    }
}
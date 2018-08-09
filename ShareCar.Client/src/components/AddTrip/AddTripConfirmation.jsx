//@flow

import * as React from "react";
import "../../styles/genericStyles.css";
import Moment from "react-moment";

type AddTripConfirmationProps = {
    fieldValues: {
        // route: string,
        dateTime: string,
        driverId: UserId,
        toOffice: boolean,
        office: Office,
        geometry: Geometry,
        startPoint: {
            name: string,
            longitude: number,
            latitude: number
        },
        endPoint: {
            name: string,
            longitude: number,
            latitude: number
        }
    },
    previousStep: Function,
    submitTrip: Function
};

type AddTripConfirmationState = {

};

export class AddTripConfirmation extends React.Component<AddTripConfirmationProps, AddTripConfirmationState> {
    destination: string;

    constructor(props) {
        super(props);

        if (this.props.fieldValues.toOffice) {
            this.destination = "to work";
        }
        else {
            this.destination = "back home";
        }
    }
    
    render() {
        return(
            <div className="gen-flex-column-container">
                {/*<div className="gen-flex-column-item">{this.props.fieldValues.route}</div>*/}
                <div className="gen-flex-column-item gen-txt-center-imp">
                    Are you sure you want to schedule your trip {this.destination} for <Moment date={this.props.fieldValues.dateTime} format="D MMMM HH:mm" />?
                </div>
                <div className="gen-flex-column-item gen-txt-center-imp">Driver ID: {this.props.fieldValues.driverId}</div>
                <button className="gen-button gen-flex-column-item" onClick={this.props.submitTrip.bind(this)}>Submit</button>
            </div>
        );
    }
}
//@flow

import * as React from "react";

type AddTripSuccessProps = {
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
    }
};

export class AddTripSuccess extends React.Component<AddTripSuccessProps> {
    render() {
        return (
            <div className="gen-flex-column-container">
                <div className="gen-flex-column-item gen-txt-center-imp">Your trip has been created!</div>
                <div className="gen-flex-column-item gen-txt-center-imp">From: {this.props.fieldValues.startPoint.name}</div>
                <div className="gen-flex-column-item gen-txt-center-imp">To: {this.props.fieldValues.endPoint.name}</div>
            </div>
        );
    }
}
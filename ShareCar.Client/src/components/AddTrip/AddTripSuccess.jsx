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
                <div className="gen-flex-column-item">Your trip has been created!</div>
                <div className="gen-flex-column-item">{this.props.fieldValues.route}</div>
            </div>
        );
    }
}
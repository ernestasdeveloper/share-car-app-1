//@flow

import * as React from "react";

type AddTripSuccessProps = {
     fieldValues: {
        route: string,
        dateTime: string,
        driverId: UserId
    }
};

export class AddTripSuccess extends React.Component<AddTripSuccessProps> {
    render() {
        return (
            <div>
                <div>Your trip has been created!</div>
                <div>{this.props.fieldValues.route}</div>
            </div>
        );
    }
}
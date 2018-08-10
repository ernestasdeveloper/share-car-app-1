// @flow
import * as React from "react";
import "../../styles/genericStyles.css";

type RideContainerProps = {
    ride: Ride,
};

export class RideContainer extends React.Component<RideContainerProps> {
    render() {
        return (
            <tr>
                    <td className="gen-txt">{this.props.ride.status}</td>
                            <td className="gen-txt">{this.props.ride.driver.firstName}</td>
                            <td className="gen-txt">{this.props.ride.trip.endPointName}</td>
            </tr>
        );
    }
}
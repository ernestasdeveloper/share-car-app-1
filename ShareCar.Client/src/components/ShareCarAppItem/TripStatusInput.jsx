import * as React from "react";
import * as shareCarAppItem from "../../data/shareCarAppItem";

export class TripStatusInput extends React.Component{
    render(){
        return (
            <select name="trip_status" defaultValue={this.props.TripStatus}>
                {shareCarAppItem.TripStatus.map((x,i) =>
                    <option key={i} value={x}>{x}</option>)
                }
            </select>
        );
    }
}
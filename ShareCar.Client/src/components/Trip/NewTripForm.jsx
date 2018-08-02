// @flow
import * as React from "react";
import type {TripService} from "../../api/TripService";
import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";

type NewTripFormProps = {
    tripService: TripService
};
type NewTripFormState = {
    selectedDate: Date
};


export class NewTripForm extends React.Component<NewTripFormProps, NewTripFormState> {
    constructor(props: any) {
        super(props);
        this.state = {
            selectedDate: new Date()
        };
    }
    handleDayClick(day: Date, { selected }) {
        this.setState({
            selectedDate: selected ? undefined : day,
        });
    }
    async handleSubmit(e: any) {
        e.preventDefault();
        this.state.selectedDate.setHours(e.target.timeOfDay.value.slice(0,2), e.target.timeOfDay.value.slice(3));
        const payload = {
            route: e.target.route.value,
            dateTime: this.state.selectedDate.toISOString(),
            driverId: e.target.driverId.value
        };
        console.log(payload.dateTime);
        await this.props.tripService.add(payload);
    }
    render(){
        return(
            <form id="new-trip-form" onSubmit={this.handleSubmit.bind(this)}>
                <div className="form-group">
                    <label htmlFor="route">Route</label>
                    <input type="text" className="form-control" name="route"/>
                </div>
                <DayPicker
                    selectedDays={this.state.selectedDay}
                    onDayClick={this.handleDayClick.bind(this)}
                />     
                <div className="form-group">
                    <label htmlFor="timeOfDay">Time</label>
                    <input type="text" className="form-control" name="timeOfDay" defaultValue="08:00"/>
                </div>
                <div className="form-group">
                    <label htmlFor="driverId">DriverId</label>
                    <input type="text" className="form-control" name="driverId"/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        );
    }
}
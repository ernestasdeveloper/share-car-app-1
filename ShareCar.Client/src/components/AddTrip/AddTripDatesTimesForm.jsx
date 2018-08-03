// @flow
import * as React from "react";
import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";

type AddTripDatesTimesFormProps = {
    fieldValues: {
        route: string,
        dateTime: string,
        driverId: UserId
    },
    nextStep: Function,
    saveValues: Function
};
type AddTripDatesTimesFormState = {
    selectedDate: Date
};


export class AddTripDatesTimesForm extends React.Component<AddTripDatesTimesFormProps, AddTripDatesTimesFormState> {
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
    saveAndContinue(e: any) {
        e.preventDefault();
        this.state.selectedDate.setHours(e.target.timeOfDay.value.slice(0,2), e.target.timeOfDay.value.slice(3));
        const payload = {
            route: this.props.fieldValues.route,
            dateTime: this.state.selectedDate.toISOString(),
            driverId: e.target.driverId.value
        };
        this.props.saveValues(payload);
        this.props.nextStep();
    }
    render() {
        return(
            <form id="add-trip-dates-times-form" onSubmit={this.saveAndContinue.bind(this)}>
                <DayPicker
                    selectedDays={this.state.selectedDate}
                    onDayClick={this.handleDayClick.bind(this)}
                />
                <div className="form-group">
                    <label htmlFor="timeOfDay">Time</label>
                    <input type="text" className="form-control" name="timeOfDay" defaultValue="08:00"/>
                </div>
                <div className="form-group">
                    <label htmlFor="driverId">DriverId</label>
                    <input type="number" className="form-control" name="driverId"/>
                </div>
                <button type="submit" className="btn btn-primary">Next</button>
            </form>
        );
    }
}
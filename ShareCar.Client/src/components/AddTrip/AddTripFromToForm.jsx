// @flow
import * as React from "react";
import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";

type AddTripFromToFormProps = {
    fieldValues: {
        route: string,
        dateTime: string,
        driverId: UserId
    },
    nextStep: Function,
    previousStep: Function,
    saveValues: Function
};

export class AddTripFromToForm extends React.Component<AddTripFromToFormProps> {
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
        const payload = {
            route: e.target.route.value,
            dateTime: this.props.fieldValues.dateTime,
            driverId: this.props.fieldValues.driverId
        };
        this.props.saveValues(payload);
        this.props.nextStep();
    }
    render() {
        return(
            <form id="add-trip-from-to-form" onSubmit={this.saveAndContinue.bind(this)}>
                <div className="form-group">
                    <label htmlFor="route">Route</label>
                    <input type="text" className="form-control" name="route"/>
                </div>
                <button type="submit" className="btn btn-primary">Next</button>
            </form>
        );
    }
}
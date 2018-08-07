// @flow
import * as React from "react";
import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";
import "../../styles/genericStyles.css";
import "../../styles/addTripForm.css";
import {Geocoder} from "ol-geocoder";
import "jquery";

type AddTripFromToFormProps = {
    fieldValues: {
        route: string,
        dateTime: string,
        driverId: UserId,
        toOffice: boolean,
        office: Office

    },
    nextStep: Function,
    previousStep: Function,
    saveValues: Function
};

type AddTripFromToFormState = {
    toOffice: boolean;
};

export class AddTripFromToForm extends React.Component<AddTripFromToFormProps, AddTripFromToFormState> {
    geocoder: Geocoder;
    
    constructor(props: any) {
        super(props);
        this.state = {
            toOffice: true
        };
    }
    onToFromOfficeToggle() {
        let currentToOffice = this.state.toOffice;
        console.log("Setting state to " + !currentToOffice);
        this.setState({toOffice: !currentToOffice});
    }
    saveAndContinue(e: any) {
        e.preventDefault();
        const payload = {
            route: this.props.fieldValues.route,
            dateTime: this.props.fieldValues.dateTime,
            driverId: this.props.fieldValues.driverId,
            toOffice: this.state.toOffice,
            office: e.target.office.value
        };
        this.props.saveValues(payload);
        this.props.nextStep();
    }
    render() {
        return(
            <form className="gen-flex-column-container" id="add-trip-from-to-form" onSubmit={this.saveAndContinue.bind(this)}>
                <div className="btn-group btn-group-toggle" data-toggle="buttons" onChange={this.onToFromOfficeToggle.bind(this)}>
                    <label className="btn btn-primary">
                        <input type="radio" name="toFromOffice" id="radio1" value="true"/>To office
                    </label>
                    <label className="btn btn-primary">
                        <input type="radio" name="toFromOffice" id="radio2" value="false"/>From office
                    </label>
                    {/*TODO Highlight selected option*/}
                </div>
                <div className="form-group gen-flex-column-item">
                    <label htmlFor="office">Office</label>
                    <select type="text" className="form-control" name="office" defaultValue="savanoriu_pr_16">
                        <option value="savanoriu_pr_16">Savanorių pr. 16</option>
                        <option value="savanoriu_pr_28">Savanorių pr. 28</option>
                    </select>
                </div>
                <button type="submit" className="gen-flex-column-item gen-button">Next</button>
            </form>
        );
    }
}
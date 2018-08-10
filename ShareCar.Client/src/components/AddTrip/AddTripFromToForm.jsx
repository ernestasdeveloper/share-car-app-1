// @flow
import * as React from "react";
import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";
import "../../styles/genericStyles.css";
import "../../styles/addTripForm.css";
import {Geocoder} from "ol-geocoder";
import {Offices} from "../../utils/constants";

type AddTripFromToFormProps = {
    fieldValues: {
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
            // route: this.props.fieldValues.route,
            dateTime: this.props.fieldValues.dateTime,
            driverId: this.props.fieldValues.driverId,
            toOffice: this.state.toOffice,
            office: e.target.office.value,
            geometry: this.props.fieldValues.geometry,
            startPoint: this.props.fieldValues.startPoint,
            endPoint: this.props.fieldValues.endPoint
        };
        this.props.saveValues(payload);
        this.props.nextStep();
    }
    
    render() {
        var toClass = this.state.toOffice ? "btn-default" : "btn-primary";
        var fromClass = this.state.toOffice ? "btn-primary" : "btn-default";
        return(
            <form className="gen-flex-column-container" id="add-trip-from-to-form" onSubmit={this.saveAndContinue.bind(this)}>
                <div className="btn-group btn-group-toggle" data-toggle="buttons" onChange={this.onToFromOfficeToggle.bind(this)}>
                    <label className={"btn btn-lg " + toClass}>
                        <input type="radio" name="toFromOffice" id="radio1"/>To office
                    </label>
                    <label className={"btn btn-lg " + fromClass}>
                        <input type="radio" name="toFromOffice" id="radio2"/>From office
                    </label>
                </div>
                <div className="form-group gen-flex-column-item">
                    <label htmlFor="office">Office</label>
                    <select type="text" className="form-control" name="office" defaultValue={Offices.savanoriu_pr_16}>
                        <option value={Offices.savanoriu_pr_16}>Savanorių pr. 16</option>
                        <option value={Offices.savanoriu_pr_28}>Savanorių pr. 28</option>
                    </select>
                </div>
                <button type="submit" className="gen-flex-column-item gen-button">Next</button>
            </form>
        );
    }
}
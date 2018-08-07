// @flow
import * as React from "react";
import {RestTripService} from "../../api/RestTripService";
import {AddTripDatesTimesForm} from "../AddTrip/AddTripDatesTimesForm";
import {AddTripSuccess} from "../AddTrip/AddTripSuccess";
import {AddTripConfirmation} from "../AddTrip/AddTripConfirmation";
import {AddTripFromToForm} from "../AddTrip/AddTripFromToForm";
import {MapLayout} from "../MapLayout";

type AddTripLayoutProps = {

};

type AddTripLayoutState = {
    step: number,
    fieldValues: {
        route: string,
        dateTime: string,
        driverId: UserId,
        toOffice: boolean,
        office: string
    };
}


export class AddTripLayout extends React.Component<AddTripLayoutProps, AddTripLayoutState> {
    state = {
        step: 1,
        fieldValues: {
            route: null,
            dateTime: null,
            driverId: null,
            toOffice: true,
            office: null
        }
    };

    saveValues(fields: object) {
        this.setState({
            fieldValues: {
                route: fields.route,
                dateTime: fields.dateTime,
                driverId: fields.driverId,
                toOffice: fields.toOffice,
                office: fields.office
            }
        });
    };

    nextStep() {
        this.setState({
            step: this.state.step + 1
        });
    };

    previousStep() {
        this.setState({
            step: this.state.step - 1
        });
    };

    async submitTrip() {
        const tripService = new RestTripService();
        await tripService.add(this.state.fieldValues);
        this.nextStep();
    };

    render() {
        switch (this.state.step) {
            default:
                return "Something has gone wrong";
            case 1:
                return <AddTripDatesTimesForm fieldValues={this.state.fieldValues}
                                              nextStep={this.nextStep.bind(this)}
                                              saveValues={this.saveValues.bind(this)}/>
            case 2:
                return <AddTripFromToForm fieldValues={this.state.fieldValues}
                                          nextStep={this.nextStep.bind(this)}
                                          previousStep={this.previousStep.bind(this)}
                                          saveValues={this.saveValues.bind(this)}/>
            case 3:
                return <MapLayout fieldValues={this.state.fieldValues}
                                    nextStep={this.nextStep.bind(this)}
                                    previousStep={this.previousStep.bind(this)}
                                    saveValues={this.saveValues.bind(this)}/>
            case 4:
                return <AddTripConfirmation fieldValues={this.state.fieldValues}
                                            previousStep={this.previousStep.bind(this)}
                                            submitTrip={this.submitTrip.bind(this)}/>
            case 5:
                return <AddTripSuccess fieldValues={this.state.fieldValues}/>
        }
    }

}
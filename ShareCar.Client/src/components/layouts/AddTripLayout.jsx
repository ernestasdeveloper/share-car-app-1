// @flow
import * as React from "react";
import {RestTripService} from "../../api/RestTripService";
import {AddTripDatesTimesForm} from "../AddTrip/AddTripDatesTimesForm";
import {AddTripSuccess} from "../AddTrip/AddTripSuccess";
import {AddTripConfirmation} from "../AddTrip/AddTripConfirmation";
import {AddTripFromToForm} from "../AddTrip/AddTripFromToForm";
import {AddTripMapLayout} from "../AddTrip/AddTripMapLayout";

type AddTripLayoutState = {
    step: number,
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
}


export class AddTripLayout extends React.Component<{}, AddTripLayoutState> {
    state = {
        step: 1,
        fieldValues: {
            route: null,
            dateTime: null,
            driverId: null,
            toOffice: true,
            office: null,
            geometry: null,
            startPoint: null,
            endPoint: null
        }
    };

    tripService = new RestTripService();

    saveValues(fields: object) {
        this.setState({
            fieldValues: {
                dateTime: fields.dateTime,
                driverId: fields.driverId,
                toOffice: fields.toOffice,
                office: fields.office,
                geometry: fields.geometry,
                startPoint: fields.startPoint,
                endPoint: fields.endPoint
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
        const fieldValues = this.state.fieldValues;
        await this.tripService.add({dateTime: fieldValues.dateTime,
                                driverId: fieldValues.driverId,
                                route: fieldValues.geometry,
                                startPoint: fieldValues.startPoint,
                                endPoint: fieldValues.endPoint
        });
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
                return <AddTripMapLayout fieldValues={this.state.fieldValues}
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
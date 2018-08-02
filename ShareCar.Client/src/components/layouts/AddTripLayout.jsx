// @flow
import * as React from "react";
import {TripService} from "../../api/TripService";

type AddTripLayoutProps = {
    tripService: TripService
};

type AddTripLayoutState = {
    step: number,
    fieldValues: {
        route: string,
        dateTime: string,
        driverId: UserId
    };
}

export class AddTripLayout extends React.Component<AddTripLayoutProps, AddTripLayoutState> {
    state = {
        step: 1,
        fieldValues: {
            route: null,
            dateTime: null,
            driverId: null
        }
    };

    saveValues(fields) {
        return function() {
            this.setState({
                fieldValues: Object.assign({}, this.state.fieldValues, fields)
            });
        }()
    };

    nextStep() {
        this.setState({
            step: this.state.step + 1
        })
    };

    previousStep() {
        this.setState({
            step: this.state.step - 1
        })
    };

    render() {
        switch (this.state.step) {
            case 1:
                return <AddTripDatesTimesForm fieldValues={fieldValues}
                                              nextStep={this.nextStep}
                                              saveValues={this.saveValues}/>
            case 2:
                return <AddTripFromToForm fieldValues={fieldValues}
                                          nextStep={this.nextStep}
                                          previousStep={this.previousStep}
                                          saveValues={this.saveValues}/>
            case 3:
                return <AddTripConfirmation fieldValues={fieldValues}
                                            previousStep={this.previousStep}
                                            submitTrip={this.submitTrip}/>
            case 4:
                return <AddTripSuccess fieldValues={fieldValues}/>
        }
    }

}
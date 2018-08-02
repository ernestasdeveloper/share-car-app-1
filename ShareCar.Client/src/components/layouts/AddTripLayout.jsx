// @flow
import * as React from "react";
import { NewTripForm } from "../Trip/NewTripForm";
import {TripService} from "../../api/TripService";
import { NavBar } from "../NavigationBar/NavBar";

type AddTripLayoutProps = {
    tripService: TripService
};

type AddTripLayoutState = {
    step: number
}

export class AddTripLayout extends React.Component<AddTripLayoutProps, AddTripLayoutState> {
    state = {
        step: 1
    };

    var fieldValues = {
        route: null,
        dateTime: null,
        driverId: null
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
                                saveValues={this.saveValues} />
            case 3:
                return <AddTripConfirmation fieldValues={fieldValues}
                                previousStep={this.previousStep}
                                submitTrip={this.submitTrip} />
            case 4:
                return <AddTripSuccess fieldValues={fieldValues} />
        }
    }
    
}
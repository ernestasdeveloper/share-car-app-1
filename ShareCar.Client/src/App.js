//@flow
import * as React from "react";
import "./App.css";
import {MainLayout} from "./components/layouts/MainLayout";
import {TripListLayout} from "./components/layouts/TripListLayout";
import {AddTripLayout} from "./components/layouts/AddTripLayout";
import {TripDetailsLayout} from "./components/layouts/TripDetailsLayout";
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import { TripSearchLayout } from "./components/layouts/TripSearchLayout";
import { ProfilePageLayout } from "./components/layouts/ProfilePageLayout";
import { MapLayout } from "./components/MapLayout";
import { EditProfileLayout } from "./components/layouts/EditProfileLayout";
import {RideListLayout} from "./components/layouts/RideListLayout";
import {RoleSelectionLayout} from "./components/layouts/RoleSelectionLayout";
import {RideDetailsLayout} from "./components/layouts/RideDetailsLayout";
import {RideRequestLayout} from "./components/layouts/RideRequestLayout";
import {Roles} from "./utils/constants";


class App extends React.Component<{}> {
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route name="main" exact path="/" render={() => <Redirect to="/role"/>}/>
                        <Route name="role_selection" exact path="/role" render={() => <RoleSelectionLayout/>} />
                        <Route name="passenger_main" exact path="/passenger" render={() => <MainLayout role={Roles.PASSENGER}/>}/>
                        <Route name="driver_main" exact path="/driver" render={() => <MainLayout role={Roles.DRIVER}/>}/>
                        <Route name="trip_details" exact path="/trips/details/:id" render={props => <TripDetailsLayout {...props}/>}/>
                        <Route name="ride_request" exact path="/trips/request/:trip_id/:passenger_id" render={props => <RideRequestLayout {...props}/>}/>
                        <Route name="trip_search" exact path="/trips/search" render={() => <TripSearchLayout/>}/>
                        <Route name="new_trip" exact path="/trips/new" render={() => <MainLayout toRender={ AddTripLayout }/>}/>
                        <Route name="trips" exact path="/trips/:date?" render={props => <TripListLayout {...props}/>}/>
                        <Route name="trip_rides" path="/trips/:id/rides" render={props => <RideListLayout {...props}/>}/>
                        <Route name="profile_edit" path="/profile/edit/:id" render={props => <EditProfileLayout {...props}/>}/>
                        <Route name="profile" path="/profile/:id" render={props => <ProfilePageLayout {...props}/>}/>
                        <Route name="rides_details" exact path="/rides/:id/details" render={props => <RideDetailsLayout {...props}/>}/>
                        <Route name="rides" exact path="/rides/:passenger" render={props => <RideListLayout {...props}/>}/>
                        <Route name="map" path="/map" render={() => <MapLayout/>}/>
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;

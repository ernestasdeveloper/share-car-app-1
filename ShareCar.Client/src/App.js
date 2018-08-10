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
<<<<<<< HEAD
import {RideDetailsLayout} from "./components/layouts/RideDetailsLayout";
import {RestRideService} from "./api/RestRideService";
=======
import {RoleSelectionLayout} from "./components/layouts/RoleSelectionLayout";
import {Roles} from "./utils/constants";
>>>>>>> 465419d8eb5ce6ce1b426640a29904b9f00afdf2


class App extends React.Component<{}> {
    render() {
        return (
            <div>
                <Router>
                    <Switch>
<<<<<<< HEAD
                        {/*<Route path="/ride_request" component={RideRequestLayout}/>
                        <Route path="/ride_list_pass" component={RideListPassengerLayout}/>*/}
                        <Route name="main" exact path="/" component={MainLayout}/>
                        <Route name="trip_details" exact path="/trips/details/:id" component={props => <TripDetailsLayout {...props} tripService={TRIP_SERVICE}/>}/>
                        <Route name="trip_search" exact path="/trips/search" component={() => <TripSearchLayout tripService={TRIP_SERVICE}/>}/>
                        <Route name="new_trip" exact path="/trips/new" component={() => <MainLayout toRender={ AddTripLayout }/>}/>
                        <Route name="trips" exact path="/trips/:date?" render={props => <TripListLayout {...props} tripService={TRIP_SERVICE}/>}/>
                        <Route name="ride_details" path="/trips/:id/rides/:id" render={props => <RideDetailsLayout {...props} rideService={RIDE_SERVICE}/>}/>
                        <Route name="trip_rides" path="/trips/:id/rides" render={props => <RideListLayout {...props} rideService={RIDE_SERVICE}/>}/>
                        <Route name="profile_edit" path="/profile/edit/:id" render={props => <EditProfileLayout {...props} userService={USER_SERVICE}/>}/>
                        <Route name="profile" path="/profile/:id" render={props => <ProfilePageLayout {...props} userService={USER_SERVICE}/>}/>
                        <Route name="user_rides" path="/rides/:id" render={props => <RideListLayout {...props} rideService={RIDE_SERVICE}/>}/>
                        <Route name="rides" exact path="/rides/:passenger" render={props => <RideListLayout {...props} rideService={RIDE_SERVICE}/>}/>
=======
                        <Route name="main" exact path="/" render={() => <RoleSelectionLayout/>} />
                        <Route name="passenger_main" exact path="/passenger" render={() => <MainLayout role={Roles.PASSENGER}/>}/>
                        <Route name="driver_main" exact path="/driver" render={() => <MainLayout role={Roles.DRIVER}/>}/>
                        <Route name="trip_details" exact path="/trips/details/:id" render={props => <TripDetailsLayout {...props} />}/>
                        <Route name="trip_search" exact path="/trips/search" render={() => <TripSearchLayout/>}/>
                        <Route name="new_trip" exact path="/trips/new" render={() => <MainLayout toRender={ AddTripLayout }/>}/>
                        <Route name="trips" exact path="/trips/:date?" render={props => <TripListLayout {...props}/>}/>
                        <Route name="trip_rides" path="/trips/:id/rides" render={props => <RideListLayout {...props}/>}/>
                        <Route name="profile_edit" path="/profile/edit/:id" render={props => <EditProfileLayout {...props}/>}/>
                        <Route name="profile" path="/profile/:id" render={props => <ProfilePageLayout {...props}/>}/>
                        <Route name="rides" exact path="/rides/:passenger" render={props => <RideListLayout {...props}/>}/>
>>>>>>> 465419d8eb5ce6ce1b426640a29904b9f00afdf2
                        <Route name="map" path="/map" render={() => <MapLayout/>}/>
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;

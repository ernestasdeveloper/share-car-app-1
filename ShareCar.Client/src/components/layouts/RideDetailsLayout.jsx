//@flow
import * as React from "react";
import {NavBar} from "../NavigationBar/NavBar";
import {RideService} from "../../api/RideService";
import "../../styles/genericStyles.css";
import { RideContainer } from "../Ride/RideContainer";

type RideDetailsLayoutProps = {
    rideService: RideService
};

type RideDetailsLayoutState = {
    isLoading: boolean,
    rides: Ride[]
};

export class RideDetailsLayout extends React.Component<RideDetailsLayoutProps, RideDetailsLayoutState> {
    state = {
        isLoading: true,
        rides: []
    };
    async componentDidMount() {
        const data = await this.props.rideService.getAll(this.props.match.params.id, this.props.match.params.passenger);
        await new Promise(resolve => setTimeout(resolve, 1000)); //sleep 1000ms
        this.setState({isLoading: false, rides: data});
        console.log(this.state.rides);
    }
    render() {
        return (
            <div>
                <NavBar/>
                <div className="gen-container">
                
                </div>
            </div>
        );
    }
}
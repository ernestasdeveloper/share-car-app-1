//@flow
import * as React from "react";
import {NavBar} from "../NavigationBar/NavBar";
import {RideService} from "../../api/RideService";
import "../../styles/genericStyles.css";

type RideListLayoutProps = {
    rideService: RideService
};

type RideListLayoutState = {
    isLoading: boolean,
    rides: Ride[]
};

export class RideListLayout extends React.Component<RideListLayoutProps, RideListLayoutState> {
    state = {
        isLoading: true,
        rides: []
    };
    async componentDidMount() {
        const data = await this.props.rideService.getAll(this.props.match.params.id);
        await new Promise(resolve => setTimeout(resolve, 1000)); //sleep 1000ms
        this.setState({isLoading: false, rides: data});
        console.log(this.state.rides);
    }

    render() {
        return (
            <div>
                <NavBar/>
            </div>
        );
    }
}
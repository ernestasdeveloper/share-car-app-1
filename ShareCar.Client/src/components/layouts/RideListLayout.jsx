//@flow
import * as React from "react";
import {NavBar} from "../NavigationBar/NavBar";
import {RestRideService} from "../../api/RestRideService";
import "../../styles/genericStyles.css";
import { RideContainer } from "../Ride/RideContainer";
import { Roles } from "../../utils/constants";

type RideListLayoutState = {
    isLoading: boolean,
    rides: Ride[],
    role: Role
};

export class RideListLayout extends React.Component<RideListLayoutProps, RideListLayoutState> {
    rideService = new RestRideService();
    state = {
        isLoading: true,
        rides: [],
    };
    async componentDidMount() {
        this.setState({role : this.props.match.params.role})
        await new Promise(resolve => setTimeout(resolve, 1000)); //sleep 1000ms
        var data;
        if(this.state.role === Roles.DRIVER){
            data = await this.rideService.getAll(this.props.match.params.id,undefined,1)
        }
        else if(this.state.role == Roles.PASSENGER){
            data = await this.rideService.getAll(this.props.match.params.id,2,undefined);
        } 
        this.setState({isLoading: false, rides: data});
        console.log(this.state.rides);
    }
    render() {
        if (this.state.isLoading) return (<div><NavBar/><div className="gen-txt-center-imp gen-container">Loading</div></div>);
        return (
            <div>
                <NavBar/>
                <div className="gen-container">
                <table className="table">
                        <thead className="thead-dark">
                            <tr>
                            <th scope="col" className="gen-txt-imp sticky-header">Status</th>
                            <th scope="col" className="gen-txt-imp sticky-header">
                            {
                                (() => {
                                    switch (this.state.role){
                                        case Roles.DRIVER: return "Passenger";
                                        case Roles.PASSENGER: return "Driver";
                                        case Roles.ADMIN: return "Driver & Passenger";
                                        default: return "Error";
                                    }
                                })()
                            }</th>
                                <th scope="col"className="gen-txt-imp sticky-header">Time</th>
                            </tr>
                        </thead>
                        <tbody>
                        {this.state.rides.map((x, i) =>
                            <RideContainer role={this.state.role} key={i}
                                ride={x}
                                />)
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}
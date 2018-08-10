//@flow
import * as React from "react";
import {NavBar} from "../NavigationBar/NavBar";
import {RideService} from "../../api/RideService";
import "../../styles/genericStyles.css";
import { RideContainer } from "../Ride/RideContainer";

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
                <table className="table">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col" className="gen-txt-imp sticky-header">Status</th>
                                <th scope="col" className="gen-txt-imp sticky-header">From</th>
                                <th scope="col"className="gen-txt-imp sticky-header">To</th>
                            </tr>
                        </thead>
                        <tbody>
                        {this.state.rides.map((x, i) =>
                            <RideContainer key={i}
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
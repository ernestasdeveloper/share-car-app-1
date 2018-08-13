//@flow
import * as React from "react";
import { Link } from "react-router-dom";
import { NavBar } from "../NavigationBar/NavBar";
import { RestUserService } from "../../api/RestUserService";
import "../../styles/profilePageLayout.css";
import "../../styles/genericStyles.css";

type ProfilePageLayoutProps = {
    match: any
};

type ProfilePageLayoutState = {
    isLoading: boolean,
    user: User
}

export class ProfilePageLayout extends React.Component<ProfilePageLayoutProps, ProfilePageLayoutState> {
    userService = new RestUserService();

    state = {
        isLoading: true,
        user: []
    };
    async componentDidMount() {
        const data = await this.userService.getSingle(this.props.match.params.id);
        await new Promise(resolve => setTimeout(resolve, 1000));
        this.setState({isLoading: false, user: data});
    }
    render() {
        return (
            <div>
                <NavBar/>
                <div className="profile-container gen-container">
                    <div className="profile-item-profile">
                        Profile
                    </div>
                    <div className="profile-item" id="full-name">
                    {this.state.user.firstName} {this.state.user.lastName}
                    </div>
                    <div className="profile-item" id="email">
                    {this.state.user.email}
                    </div>
                    <div className="profile-item" id="phone-no">
                    {this.state.user.phoneNo}
                    </div>
                        <Link to={"/profile/edit/" + this.state.user.id} className="profile-item"><button className="gen-button" disabled={this.state.isLoading}>Edit</button></Link>
                    <div className="profile-stats-container">
                        <div className="profile-stats-item profile-stats-a">
                            Statistics:
                        </div>
                        <div className="profile-stats-item profile-stats-b">
                            Rides driven:
                        </div>
                        <div className="profile-stats-item profile-stats-c">
                            {this.state.user.ridesDriven}
                        </div>
                        <div className="profile-stats-item profile-stats-d">
                            Rides taken:
                        </div>
                        <div className="profile-stats-item profile-stats-e">
                            {this.state.user.ridesTaken}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
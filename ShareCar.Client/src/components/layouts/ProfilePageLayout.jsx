//@flow
import * as React from "react";
import { Link } from "react-router-dom";
import { NavBar } from "../NavigationBar/NavBar";
import { UserService } from "../../api/UserService";
import "../../styles/profilePageLayout.css";
import "../../styles/genericStyles.css";

type ProfilePageLayoutProps = {
    userService: UserService,
    match: any
};

type ProfilePageLayoutState = {
    isLoading: boolean,
    user: User
}

export class ProfilePageLayout extends React.Component<ProfilePageLayoutProps, ProfilePageLayoutState> {
    state = {
        isLoading: true,
        user: []
    };
    async componentDidMount() {
        const data = await this.props.userService.getSingle(this.props.match.params.id);
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
                        <Link to={"/profile/edit/" + this.state.user.id} className="profile-item" ><button className="gen-button">Edit</button></Link>
                </div>
            </div>
        );
    }
}
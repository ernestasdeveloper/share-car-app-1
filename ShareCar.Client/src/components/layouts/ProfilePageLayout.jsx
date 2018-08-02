//@flow
import * as React from "react";
import { NavBar } from "../NavigationBar/NavBar";
import { UserService } from "../../api/UserService";
import "../../styles/profilePageLayout.css"

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
                <div className="profile-container">
                <div className="profile-item-profile">
                        Profile
                    </div>
                    <div className="profile-item profile-item-a">
                        Vardas:
                    </div>
                    <div className="profile-item profile-item-b">
                    {this.state.user.firstName}
                    </div>
                    <div className="profile-item profile-item-c">
                        Pavarde:
                    </div>
                    <div className="profile-item profile-item-d">
                    {this.state.user.lastName}
                    </div>
                    <div className="profile-item profile-item-e">
                        Pastas:
                    </div>
                    <div className="profile-item profile-item-f">
                    {this.state.user.email}
                    </div>
                    <div className="profile-item profile-item-g">
                        Telefonas:
                    </div>
                    <div className="profile-item profile-item-h">
                    {this.state.user.phoneNo}
                    </div>
                </div>
            </div>
        );
    }
}
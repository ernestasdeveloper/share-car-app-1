//@flow
import * as React from "react";
import { NavBar } from "../NavigationBar/NavBar";
import { UserService } from "../../api/UserService";

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
                <div>
            <div>
                {this.state.user.firstName}
            </div>
            <div>
            {this.state.user.lastName}
            </div>
                <div>{this.state.user.email}</div>
                <div>{this.state.user.phoneNo}</div>
                </div>
            </div>
        );
    }
}
// @flow
import * as React from "react";
import { NavBar } from "../NavigationBar/NavBar";
import "../../styles/genericStyles.css";
import "../../styles/profilePageLayout.css";
import {UserService} from "../../api/UserService";
import {RestUserService} from "../../api/RestUserService";
import { Redirect } from "react-router-dom";

type EditProfileLayoutProps = {
    match: any
};

type EditProfileLayoutState = {
    redirect: boolean,
    isLoading: boolean,
    user: User
}

export class EditProfileLayout extends React.Component<EditProfileLayoutProps, EditProfileLayoutState>{
    userService: UserService;

    state = {
        redirect: false,
        isLoading: true,
        user: []
    };

    userService = new RestUserService();

    async handleSubmit(e: any) {
        e.preventDefault();
        const payload = {
            firstName: e.target.firstName.value,
            lastName: e.target.lastName.value,
            email: e.target.email.value,
            phoneNo: e.target.phoneNo.value
        }
        await this.userService.update(this.state.user.id, payload);
        console.dir(payload, {depth: null});
        this.setState({redirect: true});
    }

    async componentDidMount() {
        const data = await this.userService.getSingle(this.props.match.params.id);
        await new Promise(resolve => setTimeout(resolve, 1000));
        this.setState({isLoading: false, user: data});
    }
    render(){
        return(
            <div>
                <div className="gen-container">
                <form onSubmit={this.handleSubmit.bind(this)}>
                <div className="edit-container">
                    <span className="edit-item-title">Edit profile</span>
                    <label className="edit-item edit-item-a" htmlFor="firstName" >First name: </label>
                    <input className="edit-item edit-item-b" type="text" name="firstName" defaultValue={this.state.user.firstName}/>
                    <label className="edit-item edit-item-c" htmlFor="lastName">Last name: </label>
                    <input className="edit-item edit-item-d" type="text" name="lastName" defaultValue={this.state.user.lastName}/>
                    <label className="edit-item edit-item-e" htmlFor="email">Email: </label>
                    <input className="edit-item edit-item-f" type="text" name="email" defaultValue={this.state.user.email}/>
                    <label className="edit-item edit-item-g" htmlFor="phoneNo">Phone: </label>
                    <input className="edit-item edit-item-h" type="text" name="phoneNo" defaultValue={this.state.user.phoneNo}/>
                    <input className="gen-button edit-item-btn" type="submit" value="Submit"/>
                    </div>
                </form>
                {this.state.redirect && (
                    <Redirect push to="/profile/1"/> 
                )}
                </div>
                <NavBar/>
            </div>
        );
    }
}
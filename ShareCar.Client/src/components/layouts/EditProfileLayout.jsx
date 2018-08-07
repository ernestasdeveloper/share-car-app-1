// @flow
import * as React from "react";
import { NavBar } from "../NavigationBar/NavBar";
import "../../styles/genericStyles.css";
import "../../styles/profilePageLayout.css";

export class EditProfileLayout extends React.Component<{}>{
    render(){
        return(
            <div>
                <div className="gen-container">
                <form>
                <div className="edit-container">
                    <span className="edit-item-title">Edit profile</span>
                    <label className="edit-item edit-item-a" for="fname" >First name: </label>
                    <input className="edit-item edit-item-b" type="text" name="fname"/>
                    <label className="edit-item edit-item-c" for="lname">Last name: </label>
                    <input className="edit-item edit-item-d" type="text" name="lname"/>
                    <label className="edit-item edit-item-e" for="email">Email: </label>
                    <input className="edit-item edit-item-f" type="text" name="email"/>
                    <label className="edit-item edit-item-g" for="phonenr">Phone nr: </label>
                    <input className="edit-item edit-item-h" type="text" name="phonenr"/>
                    <input className="gen-button edit-item-btn" type="submit" value="Submit"/>
                    </div>
                </form>
                </div>
                <NavBar/>
            </div>
        );
    }
}
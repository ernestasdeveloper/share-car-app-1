// @flow
import * as React from "react";
import { NavBar } from "../NavigationBar/NavBar";
import "../../styles/genericStyles.css";

export class EditProfileLayout extends React.Component<{}>{
    render(){
        return(
            <div>
                <div className="gen-container">
                <form>
                    <label for="fname">First name: </label>
                    <input type="text" name="fname"/>
                    <label for="lname">Last name: </label>
                    <input type="text" name="lname"/>
                    <label for="email">Email: </label>
                    <input type="text" name="email"/>
                    <label for="phonenr">Phone nr: </label>
                    <input type="text" name="phonenr"/>
                    <input type="submit" value="Submit"/>
                </form>
                </div>
                <NavBar/>
            </div>
        );
    }
}
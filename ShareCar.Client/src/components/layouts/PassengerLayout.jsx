//@flow
import * as React from "react";
import { NavBar } from "../NavigationBar/PassengerNavBar";
import "../../styles/genericStyles.css";
import {Roles} from "../../utils/constants";

type PassengerLayoutProps = {
    children: React.Component<>
}

export class PassengerLayout extends React.Component<PassengerLayout> {
    render() {
        return (
            <div>
                <div>
                    {this.props.children}
                </div>
                <PassengerNavBar/>
            </div>
        );
    }
}
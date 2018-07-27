//@flow
import * as React from "react";
import {Header} from "../Header";
import { TripViewButton } from "../ShareCarAppItem/TripViewButton";

export class MainLayout extends React.Component<{}>{

    render(){
        return (
            <div>
            <Header/>
            <TripViewButton/>
            </div>
        );
    }
}
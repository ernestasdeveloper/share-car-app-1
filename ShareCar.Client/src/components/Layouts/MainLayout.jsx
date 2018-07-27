//@flow
import * as React from "react";
import { Header } from "../Header";
import { LoginButton } from "../ShareCarAppItem/LoginButton";
import { CreateAccountButton } from "../ShareCarAppItem/CreateAccountButton";

export class MainLayout extends React.Component<{}>{

    render(){
        return (
            <div>
            <Header/>
            <CreateAccountButton/>
            <LoginButton/>
            </div>
        );
    }
}
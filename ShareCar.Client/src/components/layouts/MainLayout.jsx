//@flow
import * as React from "react";
import { NavBar } from "../NavigationBar/NavBar";

type MainLayoutProps = {
    toRender: React.Component<>;
}

export class MainLayout extends React.Component<{}> {
    render() {
        const ToRender = this.props.toRender;
        return (
            <div>
                <ToRender/>
                <NavBar/>
            </div>
        );
    }
}
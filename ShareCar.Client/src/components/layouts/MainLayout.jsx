//@flow
import * as React from "react";
import { NavBar } from "../NavigationBar/NavBar";
import "../../styles/genericStyles.css";

type MainLayoutProps = {
    toRender: React.Component<>;
}

export class MainLayout extends React.Component<MainLayoutProps> {
    render() {
        const ToRender = this.props.toRender;
        return (
            <div>
                <div className="gen-container">
                <ToRender/>
                </div>
                <NavBar/>
            </div>
        );
    }
}
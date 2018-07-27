//@flow
import * as React from "react";
import "../styles/Header.css";

export class Header extends React.Component<{}>{ 
    render() {
        return (
            <div className="ShareCarApp-header">
            <h1>Share Car App</h1>
            </div>
        );
    }
}
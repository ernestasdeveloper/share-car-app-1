//@flow

import * as React from "react";
import {Link} from "react-router-dom";
import {NavBar} from "../NavigationBar/NavBar";
import "../../styles/genericStyles.css";

export class RoleSelectionLayout extends React.Component<{}> {
    render() {
        return (
            <div>
            <div className="gen-container gen-flex-column-container">
                <Link className="gen-far-big-buttons gen-flex-column-item btn-lg" role="button" to="/rides/passenger">Passenger</Link>
                <Link className="gen-far-big-buttons gen-flex-column-item btn-lg" role="button" to="/rides/driver">Driver</Link>
            </div>
            <NavBar/>
            </div>
    )}
    
}
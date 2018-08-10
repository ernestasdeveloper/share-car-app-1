//@flow

import * as React from "react";
import {Link} from "react-router-dom";

export class RoleSelectionLayout extends React.Component<{}> {
    render() {
        return (
            <div className="gen-container">
                <Link className="gen-button btn-lg" role="button" to="/passenger">Passenger</Link>
                <Link className="gen-button btn-lg" role="button" to="/driver">Driver</Link>
            </div>
    )}
    
}
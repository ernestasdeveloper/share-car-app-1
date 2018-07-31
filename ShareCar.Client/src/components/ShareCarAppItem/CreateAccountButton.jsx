import * as React from "react";
import { Link } from "react-router-dom";

export class CreateAccountButton extends React.Component {
    render(){
        return(
            <div>
            <Link to="/sign_up"><button>Create account</button></Link>
            </div>
        );
    }
}
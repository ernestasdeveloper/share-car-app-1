import * as React from "react";
import { Link } from "react-router-dom";

export class LoginButton extends React.Component {
    render(){
        return(
            <div>
            <Link to="/login" ><button>Login</button></Link>
            </div>
        );
    }
}
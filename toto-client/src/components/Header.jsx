import * as React from "react";
import "../styles/Header.css";
import {Link} from "react-router-dom";

export class Header extends React.Component{
    render(){
        return(
            <div className="todo-header">
            <h1>Todo app</h1>
         {/*<Link to="/Statistics"><button>Statistics</button></Link>*/}
                </div>
        );
    }
}
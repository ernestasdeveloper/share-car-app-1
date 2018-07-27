import * as React from "react";

export class EditTodoItem extends React.Component{
render(){
    return(
<button className="btn btn-light todo-button" onClick={this.props.onEdit}>Edit</button>

    );
}

}
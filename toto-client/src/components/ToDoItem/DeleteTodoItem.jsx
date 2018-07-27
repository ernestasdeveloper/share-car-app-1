import * as React from "react";

export class DeleteTodoItem extends React.Component{
render(){
    return(
<button className="btn btn-light todo-button" onClick={this.props.onRemove}>Delete</button>

    );
}

}
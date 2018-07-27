import * as React from "react";

export class TodoItemTitle extends React.Component{
render(){
    return(
<span className="todo-item-title">{this.props.title}</span>

    );
}

}
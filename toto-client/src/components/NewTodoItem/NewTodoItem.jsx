import * as React from "react";
import {TodoItemForm} from "../TodoItemForm/TodoItemForm";
import "../../styles/newTodoItem.css";

export class NewTodoItem extends React.Component{
state = {
    isOpne: false
}

    render(){
return(
    <div className = "new-todo-container">
    <button className="btn btn-default todo-button" onClick={() => this.setState({isOpen: !this.state.isOpen})}>Add new task</button>
    {
        this.state.isOpen
        ? <TodoItemForm
        todoItem={this.props.todoItem}
        onUpdate={newItem =>
        console.log("added new item ", newItem)
        }/> : " "
    }
    </div>
);

    }
}

import * as React from "react";
import"../../styles/todoItem.css";
import { EditTodoItem } from "./EditTodoItem";
import { DeleteTodoItem } from "./DeleteTodoItem";
import {TodoItemStatus} from "./TodoItemStatus";
import {TodoItemPriority} from "./TodoItemPriority";
import {TodoItemTitle} from "./ToDoItemTitle";
import {TodoItemForm} from "../TodoItemForm/TodoItemForm";

export class TodoItemContainer extends React.Component{
state ={
    isOpen: false
};

    render(){
        return(
            <div>
            <div className="todo-item-container">

            <div className="todo-description-container">
            <TodoItemTitle title = {this.props.todoItem.title}/>
            <TodoItemPriority priority = {this.props.todoItem.priority}/>
</div>
            <TodoItemStatus status = {this.props.todoItem.status}/>
            
            <EditTodoItem onEdit = {() => this.setState({isOpen: !this.state.isOpen})}/>
            <DeleteTodoItem onRemove={() => console.log("Deleting task", this.props.todoItem.id)}/>
           </div>
           {
                this.state.isOpen
                ?  <div>
                <TodoItemForm  onUpdate={newData => console.log(newData)} todoItem = {this.props.todoItem}/>
                </div>
                :  " "
            }
           
                </div>

        );
    }
}
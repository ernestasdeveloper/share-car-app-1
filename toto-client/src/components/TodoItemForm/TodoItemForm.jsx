import * as React from "react";
import * as todoItem from "../../data/todoItem";
import { TodoItemStatus } from "../ToDoItem/TodoItemStatus";
import "../../styles/todoForm.css";

export class TodoItemForm extends React.Component{
handleSubmit(e){
e.preventDefault();

const newData = {
    id: this.props.todoItem.id,
    title: e.target.title.value,
    description: e.target.description.value,
    priority: e.target.priority.value,
    status: e.target.status.value
}
console.log(newData);

}
    render(){

        return(
            <form className="form-inline todo-form" onSubmit={this.handleSubmit.bind(this)}>
            <div class="form-group">
            <lable> Title:</lable>

             <input className="form-control" type = "text" name = "title" defaultValue={this.props.todoItem.title}/>
</div>
<div className="form-group">
            <lable> Description:</lable>
<input className="form-control" type = "text" name = "description" defaultValue = {this.props.todoItem.description}/>
</div>
<div className="form-group">
<lable>Status:</lable>
 < input TodoItemStatus className="form-control"  status = {this.props.todoItem.status}/>
</div>

<div className="form-group">
<lable>Priority:</lable>
<select className="form-control" name = "priority" defaultValue={this.props.todoItem.priority}>

               {
                   todoItem.Priority.map((x, i) =>
                   <option key={i} value={x}>{x}</option>)
               }
               </select>
               <br/>
               <button className = "btn btn-light todo-button">Save</button>
               </div>
            
            </form>
        );
        
    }
}
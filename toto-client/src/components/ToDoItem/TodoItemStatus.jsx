import * as React from "react";
import * as todoItem from "../../data/todoItem";

export class TodoItemStatus extends React.Component{
render(){
    return(
        <div className="input-group todo-item-status">
<select className="custom-select" name = "status" defaultValue={this.props.status}>
{
todoItem.Status.map((x,i)=>
 
    <option key={i} value = {x}>{x}</option>)

}
 
</select>
</div>

    );
}

}
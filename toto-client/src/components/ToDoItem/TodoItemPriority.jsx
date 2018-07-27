import * as React from "react";

export class TodoItemPriority extends React.Component{
render(){
    return(
        this.props.priority &&
<span className={`todo-priority priority-${this.props.priority.toLowerCase()}`}>
{this.props.priority}
</span>

    );
}

}
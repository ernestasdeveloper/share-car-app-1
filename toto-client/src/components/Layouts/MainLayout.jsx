import * as React from "react";
import {NewTodoItem} from "../NewTodoItem/NewTodoItem";
import {todoItems} from "../../data/todoItems";
import {TodoItemContainer} from "../ToDoItem/TodoItemContainer";
import {Header} from "../Header";
import '../../styles/mainLayout.css';
import "../../styles/genericStyles.css";

export class MainLayout extends React.Component{

  render(){
      return(
        <div className="container todo-container"> // form align - center
        <Header/>
        <NewTodoItem todoItem = {{}}/>
        <div classname="todo-list-container">
        {
        
          todoItems.map((x, i) =>
          <div key={i}>
           <TodoItemContainer todoItem={x}/>
        
          </div>)}
          </div>
  </div>
      );
  }}
import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    return(
        <div className = "Todo-list">
            {props.tasks.map(taskItem => (
                <Todo
                key = {taskItem.id}
                taskItem = {taskItem}
                toggleTask = {props.toggleTask} 
                />
            ))}
            <button className = "Clear-btn" onClick = {props.clearCompleted}> 
            Clear Todo
            </button>
        </div>
    )   
}
export default TodoList
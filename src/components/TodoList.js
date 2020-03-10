import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    // const sortedList = props.tasks.sort((a, b) => a.completed - b.completed)

    return(
        <div className = "Todo-list">
            {props.tasks.map(taskItem => (
                <Todo
                key = {taskItem.id}
                taskItem = {taskItem}
                toggleCompletion = {props.toggleCompletion} 
                />
            ))}
            <button className = "Clear-btn" onClick = {props.clearCompleted}> 
            Clear Todo
            </button>
        </div>
    )   
}
export default TodoList
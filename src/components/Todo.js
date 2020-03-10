import React from 'react';

const Todo = props => {
 return(
     <div
     onClick = {() => props.toggleCompletion(props.taskItem.id)}
     className={`taskItem${props.taskItem.completed ? ' completed' : ''}`}
     >
        <p>{props.taskItem.completed}</p>
     </div>
 )
}

export default Todo
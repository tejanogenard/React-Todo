import React from 'react';

const Todo = props => {
 return(
         <div
      onClick={() => props.toggleTask(props.taskItem.id)}
    > 
      <p  className={`taskItem ${props.taskItem.completed ? 'completed' : ''}`}>
          {props.taskItem.task}
          </p>
    </div>
      


 )
}

export default Todo
import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './components/Todo.css'


const tasks = [{
    task: 'Organize Garage',
    id: 1,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 2,
    completed: false
  },
  {
    task: 'Detail Car',
    id: 3,
    completed: false
  },
  {
    task: 'Pick up dry-cleaning',
    id: 4,
    completed: false
  },
  {
    task: 'Organize Room',
    id: 5,
    completed: false
  },
  {
    task: 'Clean house',
    id: 6,
    completed: false
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  //Constructor with state
  constructor() {
    // initialize component state  
    super(); // this.state, this.setState, lifecycle methods
    this.state = {
      tasks: tasks //  tasks: tasks 
    }
  }

  //Class methods to update the state
  toggleTask = clickedItemID => {

    //recreate the object-array "immutable"
    //array -> (spread operator), Or immutable array methods 

    this.setState({
      tasks: this.state.tasks.map(taskItem => {
        if (taskItem.id === clickedItemID) {
          console.log(taskItem.id)
          return {
            ...taskItem,
            completed: !taskItem.completed
          }
        } else {
          return taskItem
        }
      })
    })
  }

  addTask = taskItem => {

    console.log(taskItem)
    // add a new task to the Todo State
    const newTask = {
      task: taskItem,
      id: new Date(),
      completed: false
    }
    this.setState({
      tasks: [...this.state.tasks, newTask]
    })
  }


  clearCompleted = e => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.filter(task => !task.completed)
    });
  };


  render() {
    return (
      <div className = "App">
        <div className = "header">
        <h2>Welcome to your Todo App! yeerp</h2>
        
        </div>
        <TodoForm addTask = {this.addTask} />
        <TodoList 
        tasks = {this.state.tasks}
        toggleTask = {this.toggleTask}
        clearCompleted = {this.clearCompleted}/>
        
      </div>
    );
  }
}
export default App
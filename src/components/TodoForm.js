import React from 'react'

class TodoForm extends React.Component {
    //Constructor with state
    constructor(){
        super();
        this.state = {
            task: ''
        }
    }

    handleChanges = e => {
        //update state with everykeystoke
        this.setState({
            task: e.target.value
        })
    }


    handleSumbit = e => {
        e.preventDefault();
        this.props.addTask(this.state.task)
        // lets try to uselocalstorage inside my handleSubmit

    }

    render(){
        return(
           
            <form className = "form"
                  onSubmit = {this.handleSumbit}>
            <input
                
                type = 'text'
                name = 'task'
                value = {this.state.task}
                onChange = {this.handleChanges}
                />
            <button className ="todoButton">Add</button>
            </form>
 
        )
    }

}   // end of class 

export default TodoForm
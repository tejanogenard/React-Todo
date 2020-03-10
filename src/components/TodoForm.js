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
        this.setState({
            task: ''
        })
    }

    render(){
        return(
            <form onSubmit = {this.handleSumbit}>
                {/*Controll this component through State */}
            <input
                type = 'text'
                name = 'task'
                value = {this.state.task}
                onChange = {this.handleChanges}
                />
            <button>Add</button>
            </form>
        )
    }

}   // end of class 

export default TodoForm
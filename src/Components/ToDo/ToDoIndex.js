import React, {Component} from 'react';

export default class ToDoIndex extends Component {
    constructor (props) {
        super(props)
        this.state = {
            tasks: ['ability to accept a task from a user', 'ability to add this to the state', 'ability to display all of the tasks', 'ability to evaluated if a task was completed and update the state, which actually means: this challenge asks for you to be able to mark a task as complete and remove that specific task from the state.'],
            newTasks: [],
            input: '',
        }
    };

    addTask = (e) => {
        e.preventDefault();
        this.setState(
            {tasks: [...this.state.tasks, this.state.input], input: ''}
        )
    }

    updateInput = (e) => {
        this.setState(
            {input: e.target.value}
        )
    }

    removeTask = (e, index) => {
        this.setState({newTasks: [this.state.tasks]})
        
        this.state.tasks.splice(index, 1)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.addTask}>
                <input onChange={((e) => this.updateInput(e))} type='text' value={this.state.input} />
                <button type='submit'>Add Task</button>
                </form>
                {this.state.tasks.map((allTasks, index) => (
                    <li>
                        {allTasks}
                        <br />
                        <button index={index} onClick={((e)=> this.removeTask(e, index))} type='submit'>Task Completed</button>
                    </li>
                ))}
            </div>
        )
    };
};
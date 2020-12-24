import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './style/style.css';
import tasks from './sample/task.json';


// Components

import Tasks from './components/Tasks';
import TaskForm from './components/TaskForm';
import Posts from './components/post'

class App extends Component {

    state = {
        tareas: tasks
    }

    addTask = (titulo, descripcion) => {
        const newTasks = {
            title: titulo,
            description: descripcion,
            id: this.state.tareas.length
        }
        this.setState({
            tareas: [...this.state.tareas, newTasks]
        })
    }


    deleteTask = (id) => {
        const tareaBorrar = this.state.tareas.filter(
            task => task.id !== id
        )
        this.setState({
            tareas: tareaBorrar
        })
    }

    checkDone = id => {
        const newTask = this.state.tareas.map(
            task => {
                if (task.id === id)
                    task.done = !task.done;

                return task;
            }
        )

        this.setState({
            tareas: newTask
        })
    }


    render() {
        return (
            <div>
                <Router>
                    <Link to='/'>Home</Link>
                    <br/>
                    <Link to='/posts'>Post</Link>

                    <Route exact path='/' render={() => {
                        return <div>
                            <TaskForm addTask={this.addTask} />
                            <Tasks
                                misTareas={this.state.tareas}
                                deleteTask={this.deleteTask}
                                checkDone={this.checkDone}
                            />
                        </div>
                    }}>
                    </Route>
                    <Route path='/posts' component={Posts}/>
                </Router>
            </div>)
    }
}


export default App;
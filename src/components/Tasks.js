import React, { Component } from 'react';
import Task from './Task';

class Tasks extends Component {
    render() {
        return this.props.misTareas.map( tarea => <Task unaTarea={tarea} key={tarea.id}/>)
    }
}

export default Tasks;
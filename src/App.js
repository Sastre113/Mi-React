import React, {Component} from 'react';
import './style.css';
import tasks from './sample/task.json';

import Tasks from './components/Tasks';

class App extends Component {
    
    state = {
        tareas: tasks
    }

    render(){
        return (
        <div>
            <Tasks misTareas = {this.state.tareas}/>
        </div>)
    }
}


export default App;
import React, { Component} from 'react';
import PropTypes from 'prop-types';

class Task extends Component {
    
    StyleCompleted() {
        const {unaTarea} = this.props;
        return {
            fontSize: '20px',
            backgroundColor: unaTarea.done ? 'green': 'red',
            textDecoration: 'none',
            paddingBottom: '10px'
        }
    }
    
    render() {
        
        const {unaTarea} = this.props;
        return <div className="misTareas" style={this.StyleCompleted()}>
             {unaTarea.title} - 
             {unaTarea.description}         
            <input type='checkbox' onChange={this.props.checkDone.bind(this, unaTarea.id)}/>
            <button style={btnDelete} onClick={this.props.deleteTask.bind(this, unaTarea.id)}> 
                X 
            </button>
        </div>
    }

}

// Esto define que tarea esperamos
Task.propTypes = {
    unaTarea: PropTypes.object.isRequired
}

const btnDelete = {
        fontSize: '18px',
        border: 'groove 1em red',
        borderRadius: '2em',
        cursor: 'Pointer'

}

export default Task; 
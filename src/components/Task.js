import React, { Component} from 'react';

class Task extends Component {
    render() {

        const {unaTarea} = this.props;
        console.log(this.props)

        return <div>
             {unaTarea.title}
            <input type='checkbox'/>
            <button> X </button>
        </div>
    }
}

export default Task; 
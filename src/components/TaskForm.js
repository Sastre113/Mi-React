import React, {Component} from 'react';


export default class TaskForm extends Component {

    state = {
        title: '',
        description: ''
    }

    onSubmit = (e) => {
        this.props.addTask(this.state.title, this.state.description);
        e.preventDefault();
    }

    onChange = e => {
        const tipo = e.target.name;
        const valor = e.target.value;
        console.log(tipo, valor);

        this.setState({
            [tipo]: valor
        })
    }

    render(){
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                        <input name='title' type='text' 
                            placeholder='Escribe una tarea' 
                            onChange={this.onChange} value={this.state.title}
                        />

                    <br/>

                        <textarea name='description' 
                            placeholder="Escribe algo" 
                            onChange={this.onChange} value={this.state.description}
                        />
                    <input type="submit" />
                </form>
            </div>
        )
    }
}
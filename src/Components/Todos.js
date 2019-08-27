import React, {Component} from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';


class Todos extends Component {

   

    render() {
        console.log(this.props.todos);
        return this.props.todos.map((todo) => (
            <TodoItem key={ todo.id } todo={ todo } 
            markComplete={ this.props.markComplete }
            onDelete = { this.props.onDelete }/>
        ));
    }
}

// PropTypes (defines what is passed into a component)
Todos.propTypes = {
    todos: PropTypes.array.isRequired,
    markComplete: PropTypes.func,
    onDelete: PropTypes.func
}

export default Todos;
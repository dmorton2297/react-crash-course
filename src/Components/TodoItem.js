import React, { Component } from "react";
import PropTypes from "prop-types";

export class TodoItem extends Component {
  getStyle = () => {
    return {
        textDecoration: this.props.todo.completed ? 'line-through' : 'none',
    }
  };

  onDelete = () => {
      console.log('We want to delete here');
  }

  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={divStyle}>
        <p style={this.getStyle()}>
            <input type="checkbox" 
            onChange={this.props.markComplete.bind(this, id)} checked={this.props.todo.completed} /> {' '}
            {title}
        </p>
        <div style={{ flexGrow: 1 }}></div>
        <button className="btn" onClick={ this.props.onDelete.bind(this, id) }
        style={{ border: 'none', padding: '10px 30px', textDecoration: 'none !important' }}>Delete</button>
      </div>
    );
  }
}


const divStyle = {
  background: '#f4f4f4',
  padding: '10px',
  borderBottom: '1px',
  display: 'flex'

}

// PropTypes (defines what is passed into a component)
TodoItem.propTypes = {
  todo: PropTypes.object,
  markComplete: PropTypes.func,
  onDelete: PropTypes.func
};

export default TodoItem;

import React from "react";

export default class Todo extends React.Component {
  render() {
    const {destroy, todo} = this.props; 
    console.log('these are the toDos in todo', this.props)
    return (
      <div>
        <h2>Todo List</h2>
        <ul>
          {todo.map((todo) => {
            const { id, text } = todo;
            return (
              <li key={id}>
                {id}. {text}
                <button onClick={() => destroy(id)}>completed</button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

import React from "react";
import Form from "./Form";
import Todo from "./Todo"

let idx = 0;
const getIdx = () => ++idx;

const todo = [{ id: getIdx(), text: "do the dishes" }];

const initialState = {
  todo,
  form: {
    textInput: "",
  },
};

export default class App extends React.Component {
  state = initialState;

  destroy = (id) => {
    this.setState({
      ...this.state,
      todo: this.state.todo.filter((todo) => todo.id !== id),
    });
  };

  changeInput = (key, value) => {
    this.setState({
      ...this.state,
      form: { ...this.state.form, [key]: value },
    });
  };

  addTodo = () => {
    const {
      todo,
      form: { textInput },
    } = this.state;
    const newTodo = { id: getIdx(), text: textInput };
    this.setState({
      ...this.state,
      form: initialState.form,
      todo: [...todo, newTodo],
    });
  };

  render() {
    const { todo, form } = this.state;
    return (
      <div>
        <Todo key={todo.id} todo={todo} destroy={this.destroy} /> 
        <Form
          onChange={this.changeInput}
          value={form}
          onSubmit={this.addTodo}
        />
      </div>
    );
  }
}

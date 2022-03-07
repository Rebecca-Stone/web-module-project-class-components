import React from "react";
import Form from "./Form";
import Todo from "./Todo";
import TodoList from "./TodoList";

//`<App />` will hold all the data needed for this project.
let idx = 0;
const getIdx = () => ++idx;

const toDos = [{ id: getIdx(), text: "" }];
//All of your application data will be stored here on `<App />`.
const initialState = {
  errorMessage: "",
  toDos,
  form: {
    textInput: "",
  },
};

export default class App extends React.Component {
  state = initialState;
  //All of your `handler` functions should live here on `<App />`.

  destroy = (id) => {
    console.log("this is the id we will delete", id);
    this.setState({
      ...this.state,
      toDos: this.state.toDos.filter((todo) => todo.id !== id),
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
      toDos,
      form: { textInput },
    } = this.state;
    const newTodo = { id: getIdx(), text: textInput };
    this.setState({
      ...this.state,
      form: initialState.form,
      toDos: [...toDos, newTodo],
    });
  };

  render() {
    const { toDos, form } = this.state;
    return (
      <div>
        {/*`<Form />` will hold your input field and your `Add Todo` and `Clear Completed` buttons. */}
        <Form
          onChange={this.changeInput}
          value={form}
          onSubmit={this.addTodo}
        />
        {/* `<Todo />` is a component that takes in the `todo` data and displays the task to the screen. */}
        {/* Your input field should take in user input, and allow a user to press `Enter` or click on the `Submit Button` to add a todo to your list. */}
        {/* Once a todo is submitted, the Todo List should re-render and show the added todo. */}
        <Todo />
        {/*`<TodoList />` receives your todos array and iterates over the list generating a new `<Todo />` for each element in the array. */}
        <TodoList />
      </div>
    );
  }
}

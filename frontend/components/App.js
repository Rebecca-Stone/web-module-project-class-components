import React from "react";
import Form from "./Form";
import Todo from "./Todo";
import TodoList from "./TodoList";

//`<App />` will hold all the data needed for this project.
//All of your application data will be stored here on `<App />`.

export default class App extends React.Component {
  //All of your `handler` functions should live here on `<App />`.
  render() {
    return (
      <div>
        {/*`<Form />` will hold your input field and your `Add Todo` and `Clear Completed` buttons. */}
        <Form />
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

import React from "react";

export default class Form extends React.Component {
  onSubmit = (evt) => {
    evt.preventDefault();
    this.props.onSubmit();
  };

  onChange = (evt) => {
    const { value, id } = evt.target;
    this.props.onChange(id, value);
  };

  render() {
    const { values } = this.props.value;
    return (
      <form onSubmit={this.onSubmit}>
        <input
          value={values}
          onChange={this.onChange}
          type="text"
          id="textInput"
          placeholder="enter todo(s) here"
        />
        <input type="submit" />
      </form>
    );
  }
}

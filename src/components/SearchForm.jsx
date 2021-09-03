import React, { Component } from "react";

class SearchForm extends Component {
  state = { value: "" };

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  handleSubmit = (e) => {
    this.props.parentCallback(this.state.value);
  };
  render() {
    return (
      <>
        <form action="#" onSubmit={this.handleSubmit}>
          <label htmlFor="city">City</label>
          <input
            type="text"
            name="city"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <input type="submit" value="Search" />
        </form>
      </>
    );
  }
}

export default SearchForm;

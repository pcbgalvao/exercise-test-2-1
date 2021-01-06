import React from "react";
import PropTypes from "prop-types";

class SearchBar extends React.Component {
  state = { term: "" };

  onInputChange = (event) => {
    event.preventDefault();

    let inputValue = event.target.value;
    this.setState({ term: inputValue });
    console.log("onInputChange-" + inputValue + "--");
    this.props.onSubmit(inputValue);
  };
  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui center aligned container">
        <div className="raised">
          <form className="ui form" onSubmit={this.onFormSubmit}>
            <div className="field">
              <label htmlFor="input"></label>
              <input
                className="prompt orange"
                type="text"
                value={this.state.term}
                placeholder="Choose a Band"
                onChange={this.onInputChange}
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

SearchBar.protoType = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;

import React from "react";

class SearchBar extends React.Component {
  constructor() {
    super(props);

    this.state = {
      term: "",
      haveFocus: false,
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFocusIn = this.onFocusIn.bind(this);
    this.onFocusOut = this.onFocusOut.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.haveFocus;
  }

  onInputChange(event) {
    event.preventDefault();

    let inputValue = event.target.value;
    this.setState({ term: inputValue });

    this.props.onChange(inputValue);
  }

  onFocusIn(event) {
    event.preventDefault();
    this.setState({ haveFocus: true });
    this.props.cleanSongList();
  }

  onFocusOut(event) {
    event.preventDefault();
    this.setState({ haveFocus: false });
  }

  render() {
    console.count("SearchBar");
    return (
      <div className="ui center aligned container">
        <div className="raised">
          <form
            className="ui form"
            onFocus={this.onFocusIn}
            onBlur={this.onFocusOut}
          >
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

export default SearchBar;

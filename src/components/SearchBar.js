import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };

  onInputChange = event => {
    event.preventDefault();
    
    let inputValue = event.target.value;
    this.setState({ term: inputValue });
    console.log("onInputChange-" + inputValue + "--");
    this.props.onSubmit(inputValue);

  }
  onFormSubmit = (event) => {
    event.preventDefault();
    
    this.props.onSubmit(this.state.term);
  }

  render() {
    return (
      <div className="ui segment">
        <div className="ui search">
          <form
            className="ui form"
            onSubmit={this.onFormSubmit}>
            <div className="field">
              <label htmlFor='input' >Input: </label>
              <input
                className="prompt"
                type="text"
                value={this.state.term}
                onChange={this.onInputChange} />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SearchBar;

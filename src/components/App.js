//Libraries
import React from "react";

// Components
import AuthorList from "./AuthorList";

class App extends React.Component {
  render() {
    console.count("App");
    return (
      <div className="ui container">
        <AuthorList />
      </div>
    );
  }
}

export default App;

//Libraries
import React from "react";

// Components
import AuthorList from "./AuthorList";

// Others
import reactVT from "react-vt";

class App extends React.Component {
  componentWillUnmount() {
    reactVT(React, this);
  }
  render() {
    console.count("App");
    return (
      <div>
        <AuthorList />
      </div>
    );
  }
}

export default App;

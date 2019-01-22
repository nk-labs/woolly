import React, { Component } from "react";
import ReactDOM from "react-dom";
import Header from './Header.jsx'
import Login from './Login.jsx';

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}
  

class App extends Component {
  constructor() {
    super();
    this.state = {
      title: ""
    };
  }
  render() {
    return (
        <div>
            <Header />
            <Welcome name="Sara" />
            <Welcome name="Cahal" />
            <Welcome name="Edite" />
            <Login />

      </div>
    );
  }
}
export default App;
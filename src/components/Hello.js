import React, { Component } from "react";

class Hello extends Component {
  constructor(props) {
    super(props);
    this.state = { message: "my friend (from state)!", style: this.style() };
    this.updateMessage = this.updateMessage.bind(this);
  }

  updateMessage() {
    this.setState(state => ({
      message: "my friend (from changed state)!",
      style: { color: 'blue', fontSize: 20 }
    }));
  }
  style() {
    return {
      color: 'brown',
      fontSize: 42,
    };
  }
  render() {
    return (
      <div style={this.state.style}>
        <h2>Hello {this.state.message}!</h2>
        <button onClick={this.updateMessage}>Click me!</button>
      </div>
    );
  }
}

export default Hello;

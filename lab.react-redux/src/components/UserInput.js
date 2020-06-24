import React, { Component } from "react";

class UserInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    }
  }

  render() {
    const { onUserAdd } = this.props;
    return (
      <div>
        <input value={ this.state.value } onChange={ (e) => this.setState({ value: e.target.value }) } type="text" />
        <button onClick={ () => onUserAdd(this.state.value) }>Dodaj użytkownika</button>
      </div>
    )
  }
}

export default UserInput;


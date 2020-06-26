// Pamiętaj aby na końcu pliku wyeksportować komponent jako domyślny export
// np. export default User
import React from "react";
import PropTypes from 'prop-types'

class User extends React.Component {

    render() {
      return (
        <div>
          <h1>Cześć! {this.props.firstName} {this.props.lastName}</h1>
          <div>
            {this.props.age && `masz:{this.props.age}`}
          </div>
          <button onClick={ this.props.onClick } />
        </div>
      )
    }
  }
  
  User.propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    age: PropTypes.number.isRequired,
  };
  
  export default User;
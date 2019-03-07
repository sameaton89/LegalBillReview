import React, { Component } from 'react';
import fire from "./config/Fire";
// import Login from "./Login";

class Home extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);
  }

logOut() {
    fire.auth().signOut();
}
  render() {
    return (
      <div className="container">
       <p> Welcome back!</p>
        <button onClick={this.logOut} className="btn btn-success">Logout</button>
      </div>
    );
  }
}

export default Home;
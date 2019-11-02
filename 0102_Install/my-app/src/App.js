import React, { Component } from 'react';
import './App.css';

// ================================= Clock Component ================================= //
// Export using Class Ex
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()}
  }

  render() {
    return (
      <section className="App">
        <h1>Time: {this.state.date.toLocaleTimeString()}</h1>
      </section>
    )
  }
}

export default App;

// ================================= Welcome Component ================================= //
function fullName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Israel',
  lastName: 'Torres'
}

// Export using Const Ex
export const Welcome = props => {         
    return (
      <section className="App">
        <h3>Welcome, {fullName(user)}</h3>
      </section>
    ) 
} 

// ================================= MyProps Component ================================= //
// Export using Export Ex
export class MyProps extends Component { 
  render() {          
     return (
      <section className="App">
        <p><strong>Class name: </strong>{this.props.propsClassName}</p>
        <p><strong>Assigment: </strong>{this.props.propsAssignmentName}</p>
      </section>
     ) 
  }
} 

//Props
MyProps.defaultProps = {
  propsClassName: "Programming for Web Applications",
  propsAssignmentName: "React.js Install"
}
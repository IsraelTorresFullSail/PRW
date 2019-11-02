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
        <h2>Welcome, {fullName(user)}</h2>
      </section>
    ) 
} 

// ================================= MyProps Component ================================= //
// Using Export Ex
export class MyProps extends Component { 
  render() {          
     return (
      <section className="App">
        <h4>Class name: {this.props.propsClassName}</h4>
        <h4>Assigment: {this.props.propsAssignmentName}</h4>
      </section>
     ) 
  }
} 

//Props
MyProps.defaultProps = {
  propsClassName: "Programming for Web Applications",
  propsAssignmentName: "React.js Install"
}
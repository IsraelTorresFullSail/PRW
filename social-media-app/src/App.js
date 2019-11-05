import React, {Component} from 'react';
import './App.css';
import Header from './components/header/Header'
import Footer from './components/footer/Footer'

class App extends Component {
  render() {
    return (
      <div style={styles.container}>
        <Header pgTitle='My Application' />
        <Footer />
      </div>
    )
  }
}

export default App

const styles = {
  container: {
    paddingTop: '0px',
    paddingBottom: '0px',
    paddingRight: '30px',
    paddingLeft: '30px'
  }
}
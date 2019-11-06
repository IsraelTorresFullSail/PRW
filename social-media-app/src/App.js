import React, {Component} from 'react';
import './App.css';
import Header from './components/header/Header'
import SideBar from './components/sideBar/SideBar'
import Ads from './components/adsSection/Ads'
import Footer from './components/footer/Footer'

class App extends Component {
  render() {
    return (
      <div>
        <Header pgTitle='My Application' />
        <SideBar />
        <Ads />
        <Footer />
      </div>
    )
  }
}

export default App
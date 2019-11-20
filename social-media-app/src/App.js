import React, {Component} from 'react';
import './App.css';
import Header from './components/header/Header'
import SideBar from './components/sideBar/SideBar'
import Ads from './components/adsSection/Ads'
import Footer from './components/footer/Footer'
import Routes from './components/Routes'
// React Router
import { BrowserRouter as Router } from 'react-router-dom'

class App extends Component {

  searchPost = e => {
    console.log("hguhg")
    //this.setState({search: e})
    this.setState({search: e.target.value})
  }
  
  render() {

   
    return (
      <Router>
        <Header pgTitle='Sellers network' searchPost={this.searchPost}/>
        <SideBar />
        <Routes />
        <Ads />
        <Footer />
      </Router>
    )
  }
}

export default App
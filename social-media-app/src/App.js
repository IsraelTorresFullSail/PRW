import React, {Component} from 'react';
import './App.css';
import Header from './components/header/Header'
import SideBar from './components/sideBar/SideBar'
import Ads from './components/adsSection/Ads'
import Footer from './components/footer/Footer'
import Routes from './components/Routes'
import { BrowserRouter as Router } from 'react-router-dom'

class App extends Component {
  state = {
    search: '',
  }

  searchPost = e => {
    this.setState({search: e.target.value})
    console.log(e.target.value)
  }
  
  
  render() {
    localStorage.setItem('search', JSON.stringify(this.state.search))
    return (
      <Router>
        {/* Your header can be dynamic */}
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
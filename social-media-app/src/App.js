import React, {Component} from 'react';
import './App.css';
import Header from './components/header/Header'
import SideBar from './components/sideBar/SideBar'
import Ads from './components/adsSection/Ads'
import PostForm from './components/postForm/postForm'
import Footer from './components/footer/Footer'
import ListItem from './components/listItem/listItem'

class App extends Component {
  state = {
    myInput: '',
    myInputPost: '',

    gList: []
  }

  changeMeMan = e => {
    this.setState({myInput: e.target.value})
  }

  changeMeManPost = e => {
    this.setState({myInputPost: e.target.value})
  }

  createPost = e => {
    e.preventDefault()
    this.state.gList.push({gTitle:this.state.myInput, gPost:this.state.myInputPost}) // TODO: use spread operator to do this
    this.setState({gList: this.state.gList})
    // Clear Form
    e.target.reset()
  }

  render() {

    let myList = this.state.gList.map((element, i) => {
      return <ListItem key={i} val={element} />
    })

    return (
      <div>
        <Header pgTitle='Sellers network' />
        <SideBar />
        <Ads />
        <PostForm 
          changeMeMan={this.changeMeMan}
          myInput={this.state.myInput}

          changeMeManPost={this.changeMeManPost}
          myInputPost={this.state.myInputPost}

          createPost={this.createPost}
        />
        {myList}
        <Footer />
      </div>
    )
  }
}

export default App
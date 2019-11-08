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

    // Validate Form
    if(this.state.myInput === '') {
      alert('Please provide a Title!')
      return false
    }
    if(this.state.myInputPost === '') {
      alert('Please provide a Post!')
      return false
    }

    // Spread Operator
    this.setState({
      gList: [...this.state.gList, {gTitle:this.state.myInput, gPost:this.state.myInputPost}]
    })

    // Clear Form and Data Binding fields
    e.target.reset()                                // eslint-disable-next-line
    this.state.myInput = ''                         // eslint-disable-next-line
    this.state.myInputPost = ''

  }

  removePost = key => {
    this.state.gList.splice(key, 1)
    this.setState({gList: this.state.gList})
  }

  render() {

    let myList = this.state.gList.map((element, i) => {
      return <ListItem key={i} val={element} deleteMe={() => this.removePost(i)} />
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
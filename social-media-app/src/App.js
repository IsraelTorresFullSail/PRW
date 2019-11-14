import React, {Component} from 'react';
import './App.css';
import Header from './components/header/Header'
import SideBar from './components/sideBar/SideBar'
import Ads from './components/adsSection/Ads'
import PostForm from './components/postForm/postForm'
import Footer from './components/footer/Footer'
import ListItem from './components/listItem/listItem'
//import SearchList from './components/search/SearchList'
import SearchInput from './components/search/SearchInput'

// React Router
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

// function searchMe(search) {
//   return function(searchPostText){
//     return searchPostText.gTitle.toLowerCase().includes(search.toLowerCase()) || !search
//   }
// }

class App extends Component {
  state = {
    myInput: '',
    myInputPost: '',
    gList: [],
    search: '',
  }

  // Function to get all posts from Local Storage
  componentDidMount() {
    let gList
    if(gList = JSON.parse(localStorage.getItem('gList'))) {
      gList = JSON.parse(localStorage.getItem('gList'))
      this.setState({gList})
    }
    else {
      alert('Nothing to store!')
    }
  }

  // Functions for search bar
  searchPost = e => {
    this.setState({search: e.target.value}, () => {
      this.filterArray();
    })
  }

  filterArray = () => {
    let searchString = this.state.search;
    let responseData = this.state.gList;

    if(searchString.length > 0) {
      responseData = responseData.filter(searchString)
      this.setState({gList: responseData})
    }
  }

  // Functions for data binding
  changeMeMan = e => {
    this.setState({myInput: e.target.value})
  }

  changeMeManPost = e => {
    this.setState({myInputPost: e.target.value})
  }

  // Function to add a new post
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

    let gList = [...this.state.gList]
    let id = Math.random()
    gList.push({gId:id, gTitle:this.state.myInput, gPost:this.state.myInputPost})
    this.setState({gList})
    localStorage.setItem('gList', JSON.stringify(gList))

    // Clear Form and Data Binding fields
    e.target.reset()                                // eslint-disable-next-line
    this.state.myInput = ''                         // eslint-disable-next-line
    this.state.myInputPost = ''

  }

  // Function to delete a post
  removePost = key => {
    let gList = [...this.state.gList]
    for (let i = 0; i < gList.length; i++) {
      if(gList[i].gId === key) {
        this.state.gList.splice(i, 1)
        this.setState({gList: this.state.gList})
        localStorage.setItem('gList', JSON.stringify(this.state.gList))
      }
    }
  }

  render() {

    let myList = this.state.gList.map(item => {
      return <ListItem key={item.gId} val={item} deleteMe={() => this.removePost(item.gId)} />
    })
    return (
      <Router>
        <div>
          <Header pgTitle='Sellers network'/>
          <div className='SearchDiv' style={styles.container}>
            <SearchInput searchPost={this.searchPost} />
          </div>
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
      </Router>
    )
  }
}

export default App

const styles = {
  container: {
    width: '65%',
    margin: '100px auto 0px auto',
    padding: '20px',
    backgroundColor: '#404FAB',
    color: '#040B71',
    borderRadius: '5px',
    transition: 'all ease .3s'
  },
  ul: {
    listStyleType: 'none',
    color: '#ffffff'
  }
}
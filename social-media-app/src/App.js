import React, {Component} from 'react';
import './App.css';
import Header from './components/header/Header'
import SideBar from './components/sideBar/SideBar'
import Ads from './components/adsSection/Ads'
import PostForm from './components/postForm/postForm'
import Footer from './components/footer/Footer'
import ListItem from './components/listItem/listItem'
import SearchList from './components/search/SearchList'
import SearchInput from './components/search/SearchInput'

function searchMe(search) {
  return function(searchPostTitle){
    return searchPostTitle.gTitle.toLowerCase().includes(search.toLowerCase()) || !search
  }
}

class App extends Component {
  state = {
    id: '',
    myInput: '',
    myInputPost: '',
    gList: [],
    search: ''
  }

  searchPost = e => {
    this.setState({search: e.target.value})
  }

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

    let gList = [...this.state.gList]
    let id = Math.random()
    gList.push({gId:id, gTitle:this.state.myInput, gPost:this.state.myInputPost})
    this.setState({gList})
    localStorage.setItem('gList', JSON.stringify(gList))

    e.target.datasetId = id

    // Clear Form and Data Binding fields
    e.target.reset()                                // eslint-disable-next-line
    this.state.myInput = ''                         // eslint-disable-next-line
    this.state.myInputPost = ''

  }

  removePost = key => {
    let gList = [...this.state.gList]
    this.state.gList.splice(key, 1)
    this.setState({gList: this.state.gList})
    localStorage.setItem('gList', JSON.stringify(gList))
  }

  render() {

    let myList = this.state.gList.map((element, i) => {
      return <ListItem key={i} data-id={this.state.id} val={element} deleteMe={() => this.removePost(i)} />
    })

    const {search} = this.state
    let mySearchList = this.state.gList.filter(searchMe(search)).map((key, post) =>{
      return <SearchList
              val={key}
              key={post}
              />
    })

    return (
      <div>
        <Header pgTitle='Sellers network'/>
        <div className='SearchDiv' style={styles.container}>
          <SearchInput searchPost={this.searchPost} />
          <ul style={styles.ul}>
            {mySearchList}
          </ul>
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
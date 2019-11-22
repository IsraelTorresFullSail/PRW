import React, {Component} from 'react';
import '../App.css';
import PostForm from '../components/postForm/postForm'
import ListItem from '../components/listItem/listItem'
import Noty from 'noty' 
import '../../node_modules/noty/lib/noty.css'
import '../../node_modules/noty/lib/themes/mint.css'

function searchAList(search) {
  return function (searchMe){
      return searchMe.gPost.toLowerCase().includes(search.toLowerCase()) || !search
  }  
}

//REMOVE EXTRA SPACES
class NewsFeed extends Component {
  state = {
    titleInput: '',
    postInput: '',
    postList: [],
  }

  // Function to get all posts from Local Storage
  componentDidMount() {
    let postList                                                                               // eslint-disable-next-line
    if(postList = JSON.parse(localStorage.getItem('postList'))) {
      postList = JSON.parse(localStorage.getItem('postList'))
      this.setState({postList})
    }
    else {
      alert('Nothing to store!')
    }

    this.setState({search: JSON.parse(localStorage.getItem('search'))})
  }

  // Functions for data binding
  changeMeMan = e => {
    this.setState({titleInput: e.target.value})
  }

  changeMeManPost = e => {
    this.setState({postInput: e.target.value})
  }

  // Function to add a new post
  createPost = e => {
    e.preventDefault()

    // Validate Form
    if(this.state.titleInput === '') {
      new Noty({
        type: 'warning',
        layout: 'topRight',
        text: `Please provide a Title!`,
        buttons: [
          Noty.button('OK', 'btn btn-error', function () {
              Noty.closeAll();
              return false;
          })
        ]
      }).show();
      return false;
    }
    if(this.state.postInput === '') {
      new Noty({
        type: 'warning',
        layout: 'topRight',
        text: `Please provide a Post!`,
        buttons: [
          Noty.button('OK', 'btn btn-error', function () {
              Noty.closeAll();
              return false;
          })
        ]
      }).show();
      return false;
    }

    let postList = []
    let id = Math.random()
    postList = [...this.state.postList, {gId:id, gTitle:this.state.titleInput, gPost:this.state.postInput}]
    this.setState({postList})
    localStorage.setItem('postList', JSON.stringify(postList))

    // Clear Form and Data Binding fields
    e.target.reset()                                // eslint-disable-next-line
    this.state.titleInput = ''                         // eslint-disable-next-line
    this.state.postInput = ''

  }

  // Function to delete a post
  removePost = key => {
    let postList = [...this.state.postList]
    for (let i = 0; i < postList.length; i++) {
      if(postList[i].gId === key) {
        this.state.postList.splice(i, 1)
        this.setState({postList: this.state.postList})
        localStorage.setItem('postList', JSON.stringify(this.state.postList))
      }
    }
  }

  render() {
    const search = JSON.parse(localStorage.getItem('search'))
    let myList = this.state.postList.filter(searchAList(search)).map(item => {
      return <ListItem key={item.gId} val={item} deleteMe={() => this.removePost(item.gId)} />
    })
    return (
        <div>
          <PostForm 
            changeMeMan={this.changeMeMan}
            titleInput={this.state.titleInput}
            changeMeManPost={this.changeMeManPost}
            postInput={this.state.postInput}
            createPost={this.createPost}
          />
          <div style={styles.listWrapper}>
            {myList}
          </div>
      </div>
    )
  }
}

export default NewsFeed

const styles = {
  container: {
    position: 'fixed',
    top: '90px',
    left: '0',
    right: '0',
    zIndex: '9999',
    width: '66.7%',
    margin: '0px auto 0px auto',
    padding: '20px',
    backgroundColor: '#404FAB',
    color: '#040B71',
    borderRadius: '5px',
    boxShadow: '0px 10px 30px 0px rgba(4,11,113,0.3)',
    transition: 'all ease .3s'
  },
  ul: {
    listStyleType: 'none',
    color: '#ffffff'
  },
  listWrapper: {
    marginBottom: '5px'
  }
} 
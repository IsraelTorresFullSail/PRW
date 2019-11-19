import React, {Component} from 'react';
import '../App.css';
import PostForm from '../components/postForm/postForm'
import ListItem from '../components/listItem/listItem'
import Noty from 'noty' 
import '../../node_modules/noty/lib/noty.css'
import '../../node_modules/noty/lib/themes/mint.css'
import Header from '../components/header/Header';

// I WANT THIS CODE TO BE UPDATED FOR YOUR WEEK 4 SUBMIT.
// Functions for search bar
// function searchMe(search) {
//   return function(searchPostTitle){
//     return searchPostTitle.gTitle.toLowerCase().includes(search.toLowerCase()) || !search
//   }
// }

function searchAList(search) {
  return function (searchMe){
      return searchMe.gPost.toLowerCase().includes(search.toLowerCase()) || !search
  }  
}



//REMOVE EXTRA SPACES
class NewsFeed extends Component {
  state = {
    //you should rename this array to match the component. Ex. newsInput
    myInput: '',
    myInputPost: '',
    //you should rename this array to match the component. Ex. newsList
    gList: [],
    search: '',
  }

  // Function to get all posts from Local Storage
  componentDidMount() {
    let gList                                                                               // eslint-disable-next-line
    if(gList = JSON.parse(localStorage.getItem('gList'))) {
      gList = JSON.parse(localStorage.getItem('gList'))
      this.setState({gList})
    }
    else {
      alert('Nothing to store!')
    }
  }

  // Functions to get the text typing on search bar
  searchPost = e => {
    console.log("hguhg")
    //this.setState({search: e})
    this.setState({search: e.target.value})
  }

  searchList = e => {
    this.setState({search: e.target.value})
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
    if(this.state.myInputPost === '') {
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

    let gList = [...this.state.gList]
    //
    let id = Math.random()
   //Use a spread operator. You should not use the push method. It mutates a value.
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
    //Old
    for (let i = 0; i < gList.length; i++) {
      if(gList[i].gId === key) {
        this.state.gList.splice(i, 1)
        this.setState({gList: this.state.gList})
        localStorage.setItem('gList', JSON.stringify(this.state.gList))
      }
    }
  }

  render() {
    const {search} = this.state
    let myList = this.state.gList.filter(searchAList(search)).map(item => {
      return <ListItem key={item.gId} val={item} deleteMe={() => this.removePost(item.gId)} />
    })
    return (
        <div>
          <Header pgTitle='Sellers network' searchPost={this.searchPost}/>
          <PostForm 
            changeMeMan={this.changeMeMan}
            myInput={this.state.myInput}
            changeMeManPost={this.changeMeManPost}
            myInputPost={this.state.myInputPost}
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
    marginBottom: '65px'
  }
}
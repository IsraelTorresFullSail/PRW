import React, { Component } from 'react'
import MessageForm from '../components/messageForm/MessageForm'
import ListMessage from '../components/listMessage/ListMessage'

import Noty from 'noty' 
import '../../node_modules/noty/lib/noty.css'
import '../../node_modules/noty/lib/themes/mint.css'

class Messages extends Component {
    state = {
        myInput: '',
        mList: []
    }

    // Function to get all messages from Local Storage
    componentDidMount() {
        let mList                                                                               // eslint-disable-next-line
        if(mList = JSON.parse(localStorage.getItem('mList'))) {
            mList = JSON.parse(localStorage.getItem('mList'))
            this.setState({mList})
        }
        else {
            alert('Nothing to store!')
        }
    }

    changeMeMan = e => {
        this.setState({myInput: e.target.value})
    }

    // Function to add a new message
    createMessage = e => {
        e.preventDefault()

        // Validate Form
        if(this.state.myInput === '') {
            new Noty({
                type: 'warning',
                layout: 'topRight',
                text: `Please provide a Message!`,
                buttons: [
                  Noty.button('OK', 'btn btn-error', function () {
                      Noty.closeAll();
                      return false;
                  })
                ]
              }).show();
              return false;
        }

        let mList = []
        // Generate Id
        let id = Math.random()

        // Generata datetime now
        let tempDate = new Date();
        let date = tempDate.getFullYear() + '-' + (tempDate.getMonth()+1) + '-' + tempDate.getDate() +' '+ tempDate.getHours()+':'+ tempDate.getMinutes()+':'+ tempDate.getSeconds();

        // Get user data for message
        let mImg = ''
        let uFirst = ''
        let uLast = ''
        let userData = JSON.parse(localStorage.getItem('users'))
        for (let i = 0; i < userData.length; i++) {
            uFirst = userData[0].firstName
            uLast = userData[0].lastName
            mImg = userData[0].mediumPicture
        }
        
        mList = [...this.state.mList, {mId:id, message:this.state.myInput, datetime: date, mImage: mImg, userFirst: uFirst, userLast: uLast}]
        this.setState({mList})
        localStorage.setItem('mList', JSON.stringify(mList))

        // Clear Form and Data Binding fields
        e.target.reset()                                // eslint-disable-next-line
        this.state.myInput = ''     
    }

    // Function to delete a post
    removeMessage = key => {
        let mList = [...this.state.mList]
        for (let i = 0; i < mList.length; i++) {
            if(mList[i].mId === key) {
                this.state.mList.splice(i, 1)
                this.setState({mList: this.state.mList})
                localStorage.setItem('mList', JSON.stringify(this.state.mList))
            }
        }
    }


    render() {
        let myList = this.state.mList.map(item => {
            return <ListMessage key={item.mId} val={item} deleteMe={() => this.removeMessage(item.mId)} />
        })
        return (
            <div>
                <MessageForm 
                  changeMeMan={this.changeMeMan}
                  myInput={this.state.myInput}
      
                  createMessage={this.createMessage}
                />
                <div style={styles.listWrapper}>
                    {myList}
                </div>
            </div>
        )
    }
}

export default Messages

const styles = {
    MessagesSeccion: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        width: '65%',
        margin: '190px auto 0px auto',
        padding: '20px',
        backgroundColor: '#ffffff',
        color: '#040B71',
        borderRadius: '5px',
        boxShadow: '0px 1px 20px 0px rgba(4,11,113,0.16)',
        transition: 'all ease .3s'
    },
    h1: {
        color: '#040B71',
        fontSize: '1.25em',
        fontWeight: '800',
        textAlign: 'center'
    },
    listWrapper: {
        marginBottom: '65px'
    }
}

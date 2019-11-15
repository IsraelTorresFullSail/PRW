import React, {Component} from 'react';
import './RandomUser.css';

class RandomUser extends Component {
    constructor(){
        super();
        this.state = {
            pictures: [],
            users: []
        }
    }

    // Fetch Random User API
async componentDidMount(){
    await fetch('https://randomuser.me/api/?results=1')
          .then(async results => {
            return await results.json()
          })
          .then(data => {
            let pictures = data.results.map((pic) => {
              return (
                <div key = {pic.results}>
                  <img src = {pic.picture.thumbnail} />
                </div>
              )
            })
            this.setState({pictures: pictures})
            console.log("state", this.state.pictures)

            let users = data.results.map((user) => {
                let userProfile = []
                userProfile.push({firstName: user.name.first, lastName: user.name.last, 
                                  street: user.location.street, city: user.location.city,
                                  state: user.location.state, postcode: user.location.postcode,
                                  username: user.login.username, password: user.login.password,
                                  phone: user.phone, picture: user.picture.medium})
                return userProfile
            })
            this.setState({users: users})
            console.log("state", this.state.users)
          })
    }
      
    render(){
    return(
        <div style={styles.profile}>
            {this.state.pictures}
        </div>
        )
    }
}
    
export default RandomUser

export class RandomUserProfile extends RandomUser {
    render() {
        let userProfile = this.state.users.map((user) => {
            return user.firstName
        })
        console.log(userProfile)
        return (
            <div>
                <p>{this.state.users.firstName}</p>
                <p>{this.state.users.lastName}</p>
            </div>
        )
    }
}

const styles = {
    profile: {
        width: '48px',
        height: '48px',
        marginLeft: '20px',
        marginRight: '30px',
        borderRadius: '50px',
        overflow: 'hidden'
    }
}
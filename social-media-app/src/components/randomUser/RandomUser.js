import React, {Component} from 'react';
import './RandomUser.css';
import Modal from 'react-responsive-modal'                                  // eslint-disable-next-line
import MyBtn, {BtnUpdate} from '../buttons/MyBtn'
import { IoIosCheckmarkCircle } from 'react-icons/io'
import { MdPlace } from 'react-icons/md'
import { MdPhone } from 'react-icons/md'
import AccountCircle from '@material-ui/icons/AccountCircle'
import Avatar from '@material-ui/core/Avatar'

class RandomUser extends Component { 
    state = {
        open: false,
        users: []
    }

    onOpenModal = () => {
        this.setState({ open: true });
    }
    
    onCloseModal = () => {
        this.setState({ open: false });
    }

// Fetch Random User API
async componentDidMount(){
    await fetch('https://randomuser.me/api/?results=1')
          .then(async results => {
            return await results.json()
          })
          .then(data => {
            let users = []
            data.results.map((user) => {
                users.push({firstName: user.name.first, lastName: user.name.last, 
                            street: user.location.street, city: user.location.city,
                            state: user.location.state, postcode: user.location.postcode,
                            username: user.login.username, password: user.login.password,
                            phone: user.phone, smallPicture: user.picture.thumbnail, picture: user.picture.large, mediumPicture: user.picture.medium})
                return users
            })
            this.setState({users: users})
            localStorage.setItem('users', JSON.stringify(this.state.users))
          })
    }
      
    render(){
        const { open } = this.state;

        let picture = ''
        let firstName = ''
        let lastName = ''
        let pictureLarge = ''
        let mediumPicture = ''
        let street = ''
        let city = ''
        let state = []
        let postcode = ''
        let username = ''
        let password = ''
        let phone = ''
        for(let i = 0; i < this.state.users.length; i++) {
            picture = this.state.users[0].smallPicture
            firstName = this.state.users[0].firstName
            lastName = this.state.users[0].lastName
            pictureLarge = this.state.users[0].picture
            mediumPicture = this.state.users[0].mediumPicture
            street = this.state.users[0].street
            city = this.state.users[0].city
            state = this.state.users[0].state
            postcode = this.state.users[0].postcode
            username = this.state.users[0].username
            password = this.state.users[0].password
            phone = this.state.users[0].phone
        }
    return(
        <div style={styles.container}>
            <div>
                
                <Avatar style={styles.avatar} onClick={this.onOpenModal}><AccountCircle style={styles.iconUser} /></Avatar>
                <Modal open={open} onClose={this.onCloseModal} center>
                    <div style={styles.imgWrapper}>
                        <img id='userImage' src={pictureLarge} alt='User Profile' data-img={mediumPicture} data-first={firstName} data-last={lastName}/>
                    </div>
                    <div style={styles.modal}>
                        <h1 style={styles.h1}>{firstName} {lastName}</h1>
                        <p style={styles.p}><MdPlace style={styles.mdPlace}/> {street.number}{street.key}, {city}, {state} {postcode}</p>
                        <p style={styles.p}><MdPhone style={styles.mdPhone}/> {phone}</p>
                        <p><span style={styles.span}>username: </span>{username}</p>
                        <p><span style={styles.span}>password: </span>{password}</p>
                    </div>
                    <div style={styles.btnDiv}>
                        <BtnUpdate btnText="Update Profile" icon={<IoIosCheckmarkCircle style={styles.ioIosCheckmarkCircle} />}></BtnUpdate>
                    </div>
                </Modal>
            </div>
            <img src={picture} style={styles.profile} alt='User Profile'/>
        </div>
        )
    }
}
    
export default RandomUser

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'flex-end',
        flexDirection: 'row',
        alignItems: 'center'
    },
    profile: {
        width: '48px',
        height: '48px',
        marginLeft: '20px',
        marginRight: '30px',
        borderRadius: '50px'
    },
    h1: {
        color: '#040B71',
        fontSize: '1.25em',
        fontWeight: '800',
        textAlign: 'center',
        marginTop: '10px',
    },
    iconUser: {
        width: '1.2em',
        height: '1.2em',
        color: '#ffffff',
        backgroundColor: '#3f51b5'
    },
    mdPlace: {
        width: '1.5em',
        height: '1.5em',
        marginRight: '5px',
        color: 'rgba(4,11,113,0.8)',
    },
    mdPhone: {
        width: '1.5em',
        height: '1.5em',
        marginRight: '5px',
        color: 'rgba(4,11,113,0.8)',
    },
    modal: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        textAlign: 'center',
        flexWrap: 'wrap',
        margin: '20px auto',
        padding: '20px',
        backgroundColor: '#ffffff',
        color: '#040B71',
        borderRadius: '5px',
        border: '1px solid rgba(4,11,113,0.3)'
    },
    imgWrapper: {
        margin: '-85px auto 0 auto',
        width: '128px',
        height: '128px',
        borderRadius: '50%',
        boxShadow: '0px 5px 25px 0px rgba(4,11,113,0.3)',
        overflow: 'hidden'
    },
    item: {
        color: '#040B71',
        width: '43%',
        fontSize: '1em',
        textDecoration: 'none',
        fontWeight: '400',
        marginBottom: '20px',
        padding: '20px',
        border: 'none'
    },
    btnDiv: {
        display: 'flex',
        justifyContent: 'center',
        width: '100%'
    },
    ioIosCheckmarkCircle: {
        position: 'absolute',
        top: '10px',
        right: '15px',
        width: '1.2em',
        height: '1.2em'
    },
    p: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    span: {
        fontSize: '1.2em',
        fontWeight: '500',
    },
    avatar: {
        backgroundColor: 'transparent',
        cursor: 'pointer'
    }
}
import React from 'react'
import './MessageForm.css'                                   // eslint-disable-next-line
import MyBtn, {BtnAdd} from '../buttons/MyBtn'
import { IoIosAddCircle } from 'react-icons/io'

const MessageForm = props => {
    return (
        <form name="messageForm" style={styles.messageForm} onSubmit={props.createMessage}>
            <textarea style={styles.input} onChange={props.changeMeMan} type="text" name="message" id="message" placeholder="Create Message..." />
            <div style={styles.btnDiv}>
                <BtnAdd btnText="Create" icon={<IoIosAddCircle style={styles.ioIosAddCircle} />}></BtnAdd>
            </div>
        </form>
    )
}

export default MessageForm

const styles = {
    messageForm: {
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
    input: {
        backgroundColor: 'rgba(4,11,113,0.1)',
        color: '#040B71',
        width: '100%',
        fontSize: '1em',
        textDecoration: 'none',
        fontWeight: '400',
        marginBottom: '20px',
        padding: '20px',
        border: 'none',
        borderRadius: '5px'
    },
    btnDiv: {
        display: 'flex',
        justifyContent: 'center',
        width: '100%'
    },
    ioIosAddCircle: {
        position: 'absolute',
        top: '10px',
        right: '15px',
        width: '1.2em',
        height: '1.2em'
    }
}
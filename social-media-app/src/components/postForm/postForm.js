import React from 'react'
import './postForm.css'                                   // eslint-disable-next-line
import MyBtn, {BtnAdd} from '../buttons/MyBtn'
import { IoIosAddCircle } from 'react-icons/io'

const PostForm = props => {
    return (
        <form name="postForm" style={styles.postForm} onSubmit={props.createPost}>
            <input style={styles.input} onChange={props.changeMeMan} type="text" name="title" id="title" placeholder="Title" />
            <textarea style={styles.input} onChange={props.changeMeManPost} type="text" name="post" id="post" placeholder="Create Post..." />
            <p>New Title: {props.myInput}</p>
            <p>New Post: {props.myInputPost}</p>
            <div style={styles.btnDiv}>
                <BtnAdd btnText="Create" icon={<IoIosAddCircle style={styles.ioIosAddCircle} />}></BtnAdd>
            </div>
        </form>
    )
}

export default PostForm

const styles = {
    postForm: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        width: '65%',
        margin: '100px auto 0px auto',
        padding: '20px',
        backgroundColor: '#ffffff',
        color: '#040B71',
        borderRadius: '5px',
        boxShadow: '0px 1px 20px 0px rgba(4,11,113,0.16)'

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
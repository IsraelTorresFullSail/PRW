import React from 'react'                               // eslint-disable-next-line
import MyBtn, {BtnDelete} from '../buttons/MyBtn'
import './listItem.css'
import { TiDelete } from 'react-icons/ti'

const ListItem = props => {
    return (
        <div className="ListItem" key={props.id} style={styles.list}>
            <h1 style={styles.h1}>{props.val.gTitle}</h1>
            <p>{props.val.gPost}</p>
            <BtnDelete btnText="Delete" icon={<TiDelete style={styles.tiDelete} />} onClick={props.deleteMe}></BtnDelete>
        </div>
    )
}
export default ListItem

const styles = {
    list: {
        display: 'flex',
        flexDirection: 'column',
        width: '65%',
        margin: '20px auto',
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
        marginBottom: '10px'
    },
    tiDelete: {
        position: 'absolute',
        top: '10px',
        right: '15px',
        width: '1.2em',
        height: '1.2em'
    }
}
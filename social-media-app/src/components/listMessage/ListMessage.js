import React from 'react'                               // eslint-disable-next-line
import MyBtn, {BtnDelete} from '../buttons/MyBtn'
import './ListMessage.css'
import { TiDelete } from 'react-icons/ti'

const ListMessage = props => {
    return (
        <div className="ListMessage" key={props.id} style={styles.list}>
            <div style={styles.imgWrapper}>
                <img src={props.val.mImage} alt='User image' style={styles.img}/>
            </div>
            <div style={styles.textWrapper}>
                <h1 style={styles.h1}>{props.val.userFirst} {props.val.userLast}</h1>
                <p>{props.val.message}</p>
            </div>
            <div style={styles.dateWrapper}>
                <p style={styles.p}>{props.val.datetime}</p>
                <BtnDelete btnText="Delete" icon={<TiDelete style={styles.tiDelete} />} onClick={props.deleteMe}></BtnDelete>
            </div>
        </div>
    )
}
export default ListMessage

const styles = {
    list: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '65%',
        margin: '20px auto',
        padding: '0px 20px 10px 20px',
        backgroundColor: '#ffffff',
        color: '#040B71',
        borderRadius: '5px',
        boxShadow: '0px 1px 20px 0px rgba(4,11,113,0.16)',
        transition: 'all ease .3s'
    },
    h1: {
        color: '#040B71',
        fontSize: '1.25em',
        fontWeight: '800'
    },
    tiDelete: {
        position: 'absolute',
        top: '10px',
        right: '15px',
        width: '1.2em',
        height: '1.2em'
    },
    img: {
        borderRadius: '50px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    imgWrapper: {
        width: '10%'
    },
    textWrapper: {
        width: '75%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: '15px 0px',
    },
    dateWrapper: {
        width: '15%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        textAlign: 'right',
        padding: '0px'
    },
    p: {
        marginBottom: '50px',
        marginRight: '5px'
    }
}
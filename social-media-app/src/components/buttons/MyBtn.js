import React from 'react'
import './MyBtn.css'

const MyBtn = props => {
    return (
        <button style={styles.myBtn} onClick={props.onClick}>
            {props.btnText} {props.icon}
        </button>
    )
}
export default MyBtn

export const BtnAdd = props => {
    return (
        <button className="BtnAdd" style={styles.myBtn}>
            {props.btnText} {props.icon}
        </button>
    )
}

export const BtnUpdate = props => {
    return (
        <button className="BtnUpdate" style={styles.myBtn}>
            {props.btnText} {props.icon}
        </button>
    )
}

export const BtnDelete = props => {
    return (
        <button className="BtnDelete" style={styles.myBtn} onClick={props.onClick} data-id={props.id}>
            {props.btnText} {props.icon} 
        </button>
    )
}

const styles = {
    myBtn: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: '10px',
        backgroundColor: 'transparent',
        color: '#040B71',
        fontSize: '1em',
        fontWeight: 'bold',
        cursor: 'pointer',
        borderRadius: '4px',
        border: 'none',
        outline: 'none',
    }
}
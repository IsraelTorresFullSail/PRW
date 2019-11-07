import React from 'react'
import './MyBtn.css'

const MyBtn = props => {
    return (
        <button style={styles.myBtn}>
            {props.btnText}
        </button>
    )
}
export default MyBtn

export const BtnAdd = props => {
    return (
        <button className="BtnAdd" style={styles.myBtn} onClick={props.onClick}>
            {props.btnText} {props.icon}
        </button>
    )
}

const styles = {
    myBtn: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '10px',
        paddingBottom: '10px',
        paddingRight: '30px',
        paddingLeft: '30px',
        backgroundColor: '#ffffff',
        color: '#040B71',
        margin: '5px',
        fontSize: '1em',
        fontWeight: 'bold',
        cursor: 'pointer',
        borderRadius: '50px',
        border: '1px solid rgba(4,11,113,0.3)'
    }
}
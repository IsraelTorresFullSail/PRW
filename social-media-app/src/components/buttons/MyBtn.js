import React from 'react'
import './MyBtn.css'

const MyBtn = props => {
    return (
        <button className="prtyBtn" style={styles.myBtn}>
            {props.btnText}
        </button>
    )
}
export default MyBtn

const styles = {
    myBtn: {
        paddingTop: '10px',
        paddingBottom: '10px',
        paddingRight: '30px',
        paddingLeft: '30px',
        color: '#000',
        margin: '5px',
        fontSize: '1em',
        fontWeight: 'bold',
        cursor: 'pointer',
        borderRadius: '10px'
    }
}
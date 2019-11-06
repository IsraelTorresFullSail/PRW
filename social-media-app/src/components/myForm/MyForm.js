import React from 'react'
import './MyForm.css'
import MyBtn, {BtnAdd} from '../buttons/MyBtn'

const MyForm = props => {
    return (
        <form style={styles.myForm} onSubmit={props.addName}>
            <input style={styles.input} placeholder="First Name" />
            <input style={styles.input} placeholder="Last Name" />
            <input style={styles.input} placeholder="Username" />
            <input style={styles.input} placeholder="Address" />
            <input style={styles.input} placeholder="City" />
            <input style={styles.input} placeholder="Zip" />
            <div style={styles.btnDiv}>
                <BtnAdd btnText="Add" />
            </div>
        </form>
    )
}

export default MyForm

const styles = {
    myForm: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        width: '95%',
        margin: '30px auto',
        padding: '20px',
        backgroundColor: '#ffffff',
        color: '#040B71',
        borderRadius: '5px',
        border: '1px solid rgba(4,11,113,0.3)'

    },
    input: {
        backgroundColor: 'rgba(4,11,113,0.1)',
        color: '#040B71',
        width: '43%',
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
    }
}
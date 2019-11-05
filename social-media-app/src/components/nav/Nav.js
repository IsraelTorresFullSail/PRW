import React from 'react'
import './Nav.css'
import MyBtn from '../buttons/MyBtn'

const Nav = () => {
    return (
        <nav style={styles.container}>
            <MyBtn btnText='Home' />
            <MyBtn btnText='News Feed' />
            <MyBtn btnText='Messages' />
            <MyBtn btnText='Watch' />
        </nav>
    )
}

export default Nav

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'flex-end',
        flexDirection: 'row',
        alignItems: 'center'
    }
}
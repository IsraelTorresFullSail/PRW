import React from 'react'
import './Nav.css'
import ResponsiveModal from '../modal/ResponsiveModal'
import RandomUser from '../randomUser/RandomUser'

const Nav = () => {
    return (
        <nav style={styles.container}>
            <ResponsiveModal />
            <RandomUser />
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
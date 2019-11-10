import React from 'react'
import './Nav.css'
import ResponsiveModal from '../modal/ResponsiveModal'

import profile from '../../images/profile-placeholder.png'

const Nav = () => {
    return (
        <nav style={styles.container}>
            <ResponsiveModal />
            <img src={profile} alt="Profile" style={styles.profile} />
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
    },
    profile: {
        width: '50px',
        marginLeft: '20px',
        marginRight: '30px',
        borderRadius: '50px'
    }
}
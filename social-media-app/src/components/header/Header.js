import React from 'react'
import './Header.css'
import Nav from '../nav/Nav'

import logo from '../../images/logo-placeholder.png'

const Header = props => {
    return (
        <header className='Header' style={styles.header}>
            <p>
                <img src={logo} alt="Logo" style={styles.logo} />
            </p>
            <h1 style={styles.h1}>{props.pgTitle}</h1>
            <Nav />
        </header>
    )
}

export default Header

const styles = {
    header: {
        width: '100%',
        maxWidth: '1400px',
        minHeight: '50px',
        alignItems: 'center'
    },
    h1: {
        fontSize: '1.25em',
        textAlign: 'center'
    },
    logo: {
        width: '25%'
    }
}
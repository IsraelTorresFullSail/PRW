import React from 'react'
import './Header.css'
import Nav from '../nav/Nav'

import logo from '../../images/logo.png'

const Header = props => {
    return (
        <header className='Header' style={styles.header}>
            <div style={styles.container}>
                <p>
                    <img src={logo} alt="Logo" />
                </p>
                <h1 style={styles.h1}>{props.pgTitle}</h1>
                <Nav />
            </div>
        </header>
    )
}

export default Header

const styles = {
    container: {
        minHeight: '50px',
        marginTop: '0',
        marginBottom: '0',
        marginRight: 'auto',
        marginLeft: 'auto',
        paddingRight: '50px',
        paddingLeft: '50px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    h1: {
        fontSize: '1.25em',
        textAlign: 'center'
    }
}
import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <footer style={styles.footer}>
            Israel Torres © 2019 CS. All rights reserved.
        </footer>
    )
}

export default Footer

const styles = {
    footer: {
        position: 'fixed',
        bottom: '0',
        left: '0',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        padding: '15px',
        fontSize: '0.8em',
        color: '#040B71',
        backgroundColor: '#ffffff',
        boxShadow: '0px 1px 20px 0px rgba(4,11,113,0.16)',
        zIndex: '9999'
    }
}
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
        padding: '1%',
        fontSize: '0.8em',
        color: '#040B71'
    }
}
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
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        padding: '25px',
        fontSize: '0.8em',
        color: '#040B71'
    }
}
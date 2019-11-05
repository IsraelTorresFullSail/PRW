import React from 'react'
import './Footer.css'
import { FaHome } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer style={styles.footer}>
            <FaHome /> © 2019 CS. All rights reserved.
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
        fontSize: '0.65em'
    }
}
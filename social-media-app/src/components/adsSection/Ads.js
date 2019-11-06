import React from 'react'
import './Ads.css'

const SideBar = () => {
    return (
        <div className='Ads'>
            <div style={styles.adsCard}></div>
            <div style={styles.adsCard}></div>
        </div>
    )
}

export default SideBar

const styles = {
    adsCard: {
        minHeight: '300px',
        width: '100%',
        marginTop: '20px',
        backgroundColor: 'rgba(4,11,113,0.1)',
        borderRadius: '5px'
    }
}
import React from 'react'
import './Ads.css'
import bestSeller from '../../images/best-seller.png'

const SideBar = () => {
    return (
        <div className='Ads'>
            <div className="AdsCardThree" style={styles.adsCardThree}>
                <img src={bestSeller} alt="Best Seller" style={styles.img} />
            </div>
            <div className="AdsCard" style={styles.adsCard}>
                <h1 style={styles.h1Green}>Hello USA!</h1>
                <p style={styles.pWhite}>New American site</p>
                <div className="DivSellers" style={styles.divSellers}>
                    <h2 style={styles.h2}>Sellers Social Media</h2>
                </div>
            </div>
            <div className="AdsCardTwo" style={styles.adsCardTwo}>
                <h1 style={styles.h1White}>Grow Your Businiess</h1>
                <p style={styles.pB}>Power Personal Web Experience</p>
                <div className="DivSellers" style={styles.divSellers}>
                    <h2 style={styles.h2Pink}>Dynamic communication</h2>
                </div>
            </div>
        </div>
    )
}

export default SideBar

const styles = {
    adsCard: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        textAlign: 'center',
        minHeight: '200px',
        width: '100%',
        maxWidth: '200px',
        marginTop: '20px',
        padding: '15px',
        backgroundColor: '#3f51b5',
        borderRadius: '5px'
    },
    divSellers: {
        backgroundColor: '#ffffff',
        borderRadius: '5px'
    },
    h1Green: {
        color: '#8bc34a',
        fontSize: '2.25em',
        fontWeight: '500',
        textAlign: 'center',
        marginTop: '10px',
        marginBottom: '10px'
    },
    h2: {
        fontSize: '1.25em',
        textAlign: 'center',
        color: '#040B71',
        fontWeight: '900',
        textTransform: 'uppercase'
    },
    h2Pink: {
        fontSize: '1.25em',
        textAlign: 'center',
        color: '#e91e63',
        fontWeight: '900',
        textTransform: 'uppercase',
    },
    pWhite: {
        fontSize: '1.2em',
        color: '#ffffff',
        fontWeight: '500',
    },
    pB: {
        fontSize: '1.2em',
        color: '#ffffff',
        fontWeight: '800',
    },
    adsCardTwo: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        textAlign: 'center',
        minHeight: '200px',
        width: '100%',
        maxWidth: '200px',
        marginTop: '20px',
        padding: '15px',
        backgroundColor: '#f06292',
        borderRadius: '5px'
    },
    adsCardThree: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        textAlign: 'center',
        minHeight: '150px',
        width: '100%',
        maxWidth: '200px',
        marginTop: '20px',
        padding: '15px',
        backgroundColor: '#ffffff',
        borderRadius: '5px'
    },
    h1White: {
        color: '#ffffff',
        fontSize: '2.25em',
        fontWeight: '500',
        textAlign: 'center',
        marginTop: '10px',
        marginBottom: '10px'
    },
    img: {
        width: '100%',
        maxWidth: '150px'
    }
}
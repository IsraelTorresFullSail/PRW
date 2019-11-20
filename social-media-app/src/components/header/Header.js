import React from 'react'
import './Header.css'
import Nav from '../nav/Nav'
import logo from '../../images/logo.png'
import { GoSearch } from 'react-icons/go'

const Header = props => {
    
    return (
        <header className='Header' style={styles.header}>
            <div style={styles.container}>
                <div style={styles.logoWrapper}>
                    <img src={logo} alt="Logo" style={styles.img} />
                    <h1 style={styles.h1}>{props.pgTitle}</h1>
                </div>
                <form className='SearchDiv' style={styles.searchDiv} >
                    <GoSearch style={styles.icon}/>
                    <input type="text" onChange={props.searchPost} style={styles.searchBar}/>
                </form>
                <Nav />
            </div>
        </header>
    )
}

export default Header

const styles = {
    container: {
        minHeight: '50px',
        margin: '0 auto',
        paddingTop: '10px',
        paddingBottom: '10px',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    searchDiv: {
        position: 'relative',
        paddingLeft: '45px',
        width: '65%',
        backgroundColor: '#404FAB',
        borderRadius: '5px',
    },
    searchBar: {
        minHeight: '40px',
        width: '100%',
        backgroundColor: '#ffffff',
        transition: 'all ease .3s',
        color: '#404FAB',
        fontSize: '1em',
        borderTopRightRadius: '5px',
        borderBottomRightRadius: '5px',
        border: '1px solid rgba(4, 11, 113, 0.3)',
        borderLeft: '0px'
    },
    logoWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    h1: {
        fontSize: '1.25em',
        textAlign: 'center',
        color: '#040B71',
        textTransform: 'uppercase'
    },
    img: {
        width: '60px',
        marginRight: '10px',
        marginLeft: '30px'
    },
    icon: {
        position: 'absolute',
        top: '12px',
        left: '12px',
        color: '#ffffff',
        fontSize: '1.25em',
        lineHeight: '2.5em',
        textDecoration: 'none',
        fontWeight: '700',
        marginRight: '20px'
    }
}
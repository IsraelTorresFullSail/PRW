import React from 'react'
import './Header.css'
import Nav from '../nav/Nav'
import logo from '../../images/logo.png'
// import SearchBar from 'search-bar-react'

const Header = props => {
    return (
        <header className='Header' style={styles.header}>
            <div style={styles.container}>
                <div style={styles.logoWrapper}>
                    <img src={logo} alt="Logo" style={styles.img} />
                    <h1 style={styles.h1}>{props.pgTitle}</h1>
                </div>
                <form className='SearchDiv' style={styles.container}>
                {/* This is not working right. */}
                {/* <SearchBar
                    mobile
                    onChange={props.searchPost}
                    onFocus={() => console.log('focused')}
                    size='large'
                    width='60%'
                    autoFocus
                    placeholder='Search...'
                    onClear={() => console.log('closed')}
                /> */}
                <input type="text" onChange={props.searchPost} />
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
    }
}
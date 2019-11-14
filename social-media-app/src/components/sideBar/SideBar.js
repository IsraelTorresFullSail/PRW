import React from 'react'
import './SideBar.css'
import { NavLink } from 'react-router-dom'

import { FaHome } from 'react-icons/fa'
import { IoIosPaper } from 'react-icons/io'
import { MdQuestionAnswer } from 'react-icons/md'
import { MdVideoLibrary } from 'react-icons/md'

const SideBar = () => {
    return (                                                  
        <div className='SideBar'>
            <ul style={styles.ul}>                  
                <li><NavLink to="/" style={styles.link}><FaHome style={styles.icon}/>Home</NavLink></li>
                <li><NavLink to="/"  style={styles.link}><IoIosPaper style={styles.icon}/>News Feed</NavLink></li>
                <li><NavLink to="/"  style={styles.link}><MdQuestionAnswer style={styles.icon}/>Messages</NavLink></li>
                <li><NavLink to="/"  style={styles.link}><MdVideoLibrary style={styles.icon}/>Watch</NavLink></li>
            </ul>
        </div>
    )
}

export default SideBar

const styles = {
    ul: {
        listStyleType: 'none'
    },
    link: {
        color: '#040B71',
        fontSize: '1.25em',
        lineHeight: '2.5em',
        textDecoration: 'none',
        fontWeight: '700'
    },
    icon: {
        color: 'rgba(4,11,113,0.3)',
        fontSize: '1.25em',
        lineHeight: '2.5em',
        textDecoration: 'none',
        fontWeight: '700',
        marginRight: '20px'
    }
}
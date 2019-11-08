import React from 'react'
import './SideBar.css'

import { FaHome } from 'react-icons/fa'
import { IoIosPaper } from 'react-icons/io'
import { MdQuestionAnswer } from 'react-icons/md'
import { MdVideoLibrary } from 'react-icons/md'

const SideBar = () => {
    return (                                                  // Urls used as a placeholder to avoid warnings
        <div className='SideBar'>
            <ul style={styles.ul}>                                                                                
                <li><FaHome style={styles.icon}/><a href="http://localhost:3000/" style={styles.a}>Home</a></li>                    
                <li><IoIosPaper style={styles.icon}/><a href="http://localhost:3000/" style={styles.a}>News Feed</a></li>
                <li><MdQuestionAnswer style={styles.icon}/><a href="http://localhost:3000/" style={styles.a}>Messages</a></li>
                <li><MdVideoLibrary style={styles.icon}/><a href="http://localhost:3000/" style={styles.a}>Watch</a></li>
            </ul>
        </div>
    )
}

export default SideBar

const styles = {
    ul: {
        listStyleType: 'none'
    },
    a: {
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
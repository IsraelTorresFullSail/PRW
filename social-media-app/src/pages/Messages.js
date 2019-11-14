import React, { Component } from 'react'

class Messages extends Component {
    render() {
        return (
            <section style={styles.MessagesSeccion}>
                <h1 style={styles.h1}>Messages Page</h1>
            </section>
        )
    }
}

export default Messages

const styles = {
    MessagesSeccion: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        width: '65%',
        margin: '190px auto 0px auto',
        padding: '20px',
        backgroundColor: '#ffffff',
        color: '#040B71',
        borderRadius: '5px',
        boxShadow: '0px 1px 20px 0px rgba(4,11,113,0.16)',
        transition: 'all ease .3s'
    },
    h1: {
        color: '#040B71',
        fontSize: '1.25em',
        fontWeight: '800',
        textAlign: 'center'
    }
}

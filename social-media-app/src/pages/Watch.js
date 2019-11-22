import React, { Component } from 'react'
import YoutubeVideos from '../components/youtubeVideos/YoutubeVideos'

const apiUrl = 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=11&playlistId=PLxjwC9b4YxZ7BmQI7EqIvUSJSIXoxn9QE&key=AIzaSyCUBE9jRemJ4Nol-O5bFiWyf9KeO6ylBVg'
class Watch extends Component {
    state = {
        videos: []
    }

    // Fetch Youtube API
    async componentDidMount(){
        await fetch(apiUrl)
            .then(async results => {
                return await results.json()
            })
            .then(data => {
                let videos = []
                data.items.map((video) => {
                    videos.push({videoId: video.snippet.resourceId.videoId})
                    return videos
                })
                this.setState({videos: videos})
            })
    }
    render() {
        let myList = this.state.videos.map( (item, i) => {
            return <YoutubeVideos key={i} videoId={item.videoId} />
        })
        return (
            <section>
                <div style={styles.WatchSeccion}>
                    <h1 style={styles.h1}>Watch Social Media Videos</h1>
                </div>
                <div style={styles.listWrapper}>
                    {myList}
                </div>
            </section>
        )
    }
}

export default Watch

const styles = {
    WatchSeccion: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        width: '60%',
        margin: '20px auto 0px auto',
        padding: '0 20px',
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
    },
    listWrapper: {
        marginBottom: '5px'
    }
}
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
                <div style={styles.listWrapper}>
                    {myList}
                </div>
            </section>
        )
    }
}

export default Watch

const styles = {
    listWrapper: {
        margin: '85px 0 5px 0'
    }
}
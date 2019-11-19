import React, { Component } from 'react'
import YouTube from 'react-youtube'
import './YoutubeVideos.css'

class YoutubeVideos extends Component {
    videoOnReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }

    render() {
        const opts = {
          height: '600',
          width: '100%',
          playerVars: { // https://developers.google.com/youtube/player_parameters
            autoplay: 1
          }
        }
        const {videoId} = this.props
        return (
            <div className="VideoItem" style={styles.list}>
            <YouTube
                videoId={videoId}
                opts={opts}
                onReady={this.videoOnReady}
            />
            </div>
        )
    }
}

export default YoutubeVideos

const styles = {
    list: {
        display: 'flex',
        flexDirection: 'column',
        width: '66%',
        margin: '20px auto',
        padding: '5px',
        backgroundColor: '#ffffff',
        color: '#040B71',
        borderRadius: '5px',
        boxShadow: '0px 1px 20px 0px rgba(4,11,113,0.16)',
        transition: 'all ease .3s'
    }
}
import React from 'react'
import YouTube from 'react-youtube'
import './YoutubeVideos.css'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    list: {
        margin: ' 0 auto',
    },
    paper: {
      padding: theme.spacing(2),
      color: theme.palette.text.secondary,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      transition: 'all ease .3s'
    }
}));

const YoutubeVideos = props => {
    const videoOnReady = event => {event.target.pauseVideo()}
    const opts = {
        height: '600px',
        width: '1230px',
        playerVars: { // https://developers.google.com/youtube/player_parameters
            autoplay: 1
        }
    }
    const {videoId} = props
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={8} className={classes.list}>
                    <Paper className={classes.paper}>
                        <YouTube
                            videoId={videoId}
                            opts={opts}
                            onReady={videoOnReady}
                        />
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}
export default YoutubeVideos

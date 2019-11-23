import React from 'react'
import YouTube from 'react-youtube'
import './YoutubeVideos.css'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import {
    createMuiTheme,
    MuiThemeProvider
} from "@material-ui/core/styles"

const theme = createMuiTheme({
    breakpoints: {
      values: { xs: 375, sm: 600, md: 960, lg: 1440, xl: 1920 }
    },
    
})

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    list: {
        margin: ' 0 auto',
        transition: 'all ease .3s',
        [theme.breakpoints.down("lg")]: {
            marginLeft: '200px',
        },
        [theme.breakpoints.down("md")]: {
            marginLeft: '100px',
        },
        [theme.breakpoints.down("sm")]: {
            marginLeft: 'auto',
            marginRight: 'auto'
        },
    },
    video: {
        [theme.breakpoints.down("md")]: {
            height: '500px',
        },
        [theme.breakpoints.down("sm")]: {
            height: '400px',
        },
        [theme.breakpoints.down("xs")]: {
            height: '300px',
        },
    },
    paper: {
      padding: theme.spacing(2),
      color: theme.palette.text.secondary,
      transition: 'all ease .3s'
    }
}));

const YoutubeVideos = props => {
    const videoOnReady = event => {event.target.pauseVideo()}
    const opts = {
        height: '600px',
        width: '100%',
        playerVars: { // https://developers.google.com/youtube/player_parameters
            autoplay: 1
        }
    }
    const {videoId} = props
    const classes = useStyles()
    return (
        <MuiThemeProvider theme={theme}>
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={8} className={classes.list}>
                    <Paper className={classes.paper}>
                        <YouTube
                            className={classes.video}
                            videoId={videoId}
                            opts={opts}
                            onReady={videoOnReady}
                        />
                    </Paper>
                </Grid>
            </Grid>
        </div>
        </MuiThemeProvider>
    )
}
export default YoutubeVideos

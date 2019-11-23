import React from 'react'                               // eslint-disable-next-line
import MyBtn, {BtnDelete} from '../buttons/MyBtn'
import './ListMessage.css'
import { TiDelete } from 'react-icons/ti'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import {
    createMuiTheme,
    MuiThemeProvider
} from "@material-ui/core/styles"

const theme = createMuiTheme({
    breakpoints: {
      values: { xs: 0, sm: 600, md: 960, lg: 1440, xl: 1920 }
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
    paper: {
      padding: theme.spacing(2),
      color: theme.palette.text.secondary,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      transition: 'all ease .3s'
    },
    h1: {
        color: '#040B71',
        fontSize: '1.25em',
        fontWeight: '700'
    },
    tiDelete: {
        position: 'absolute',
        top: '10px',
        right: '15px',
        width: '1.2em',
        height: '1.2em'
    },
    img: {
        borderRadius: '50px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    p: {
        marginBottom: '50px',
        marginRight: '5px'
    },
    imgWrapper: {
        width: '10%'
    },
    textWrapper: {
        width: '75%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: '15px 0px',
    },
    dateWrapper: {
        width: '15%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        textAlign: 'right',
        padding: '0px'
    },
}));

const ListMessage = props => {
    const classes = useStyles()
    return (
        <MuiThemeProvider theme={theme}>
        <div className={classes.root} key={props.id}>
            <Grid container spacing={3}>
                <Grid item xs={8} className={classes.list}>
                    <Paper className={classes.paper}>
                        <div className='ImgWrapper'>
                            <img src={props.val.mImage} alt='User Avatar' className={classes.img}/>
                        </div>
                        <div className='TextWrapper'>
                            <h1 className={classes.h1}>{props.val.userFirst} {props.val.userLast}</h1>
                            <p>{props.val.message}</p>
                        </div>
                        <div className='DateWrapper'>
                            <p className={classes.p}>{props.val.datetime}</p>
                            <BtnDelete btnText="Delete" icon={<TiDelete className={classes.tiDelete} />} onClick={props.deleteMe}></BtnDelete>
                        </div>
                    </Paper>
                </Grid>
            </Grid>
        </div>
        </MuiThemeProvider>
    )
}
export default ListMessage
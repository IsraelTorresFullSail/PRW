import React from 'react'
import './MessageForm.css'                                   // eslint-disable-next-line
import MyBtn, {BtnAdd} from '../buttons/MyBtn'
import { IoIosAddCircle } from 'react-icons/io'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
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
      marginTop: '30px'
    },
    list: {
        display: 'flex',
        flexDirection: 'column',
        margin: ' 0 auto',
        color: '#040B71',
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
    },
    messageForm: {
        width: '98.5% !important'
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '100%',
    },
    btnDiv: {
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        marginTop: '20px'
    },
    ioIosAddCircle: {
        position: 'absolute',
        top: '10px',
        right: '15px',
        width: '1.2em',
        height: '1.2em'
    }
}));

const MessageForm = props => {
    const classes = useStyles()
    return (
        <MuiThemeProvider theme={theme}>
        <div className={classes.root} key={props.id}>
            <Grid container spacing={3}>
                <Grid item xs={8} className={classes.list}>
                    <Paper className={classes.paper}>
                            <form name="messageForm" className={classes.messageForm} onSubmit={props.createMessage} noValidate>
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Required"
                                    defaultValue="Create Message..."
                                    className={classes.textField}
                                    margin="normal"
                                    variant="outlined"
                                    multiline={true}
                                    rows={2}
                                    rowsMax={4}
                                    onChange={props.changeMeMan}
                                />
                                <div className={classes.btnDiv}>
                                    <BtnAdd btnText="Create" icon={<IoIosAddCircle className={classes.ioIosAddCircle} />}></BtnAdd>
                                </div>
                            </form>
                    </Paper>
                </Grid>
            </Grid>
        </div>
        </MuiThemeProvider>
    )
}

export default MessageForm
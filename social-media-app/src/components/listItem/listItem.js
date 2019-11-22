import React from 'react'                               // eslint-disable-next-line
import MyBtn, {BtnDelete} from '../buttons/MyBtn'
import './listItem.css'
import { TiDelete } from 'react-icons/ti'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    list: {
        display: 'flex',
        flexDirection: 'column',
        margin: ' 0 auto',
        color: '#040B71',
        transition: 'all ease .3s'
    },
    paper: {
      padding: theme.spacing(2),
      color: theme.palette.text.secondary,
    },
    h1: {
        color: '#040B71',
        fontSize: '1.25em',
        fontWeight: '700',
        marginBottom: '10px'
    },
    tiDelete: {
        position: 'absolute',
        top: '10px',
        right: '15px',
        width: '1.2em',
        height: '1.2em'
    }
}));

const ListItem = props => {
    const classes = useStyles()
    return (
        <div className={classes.root} key={props.id}>
            <Grid container spacing={3}>
                <Grid item xs={8} className={classes.list}>
                    <Paper className={classes.paper}>
                        <h1 className={classes.h1}>{props.val.gTitle}</h1>
                        <p>{props.val.gPost}</p>
                        <BtnDelete btnText="Delete" icon={<TiDelete className={classes.tiDelete} />} onClick={props.deleteMe}></BtnDelete>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}
export default ListItem
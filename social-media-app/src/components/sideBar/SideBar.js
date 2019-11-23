import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import DashboardIcon from '@material-ui/icons/Dashboard'
import AddCommentIcon from '@material-ui/icons/AddComment'
import PersonalVideoIcon from '@material-ui/icons/PersonalVideo'
import { NavLink } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: '250px',
    backgroundColor: theme.palette.background.paper,
    position: 'fixed',
    top: '64px',
    left: 0,
    height: '100%',
    borderRight: '1px solid #eeeeee'
  },
  link: {
    display: 'flex',
    flex: 'row',
    alignItems: 'center',
    color: 'rgba(4,11,113,0.8)',
    fontSize: '1.25em',
    lineHeight: '2.5em',
    textDecoration: 'none',
    fontWeight: '700'
    },
  icon: {
    color: 'rgba(4,11,113,0.8)',
    fontSize: '1.25em',
    lineHeight: '2.5em',
    textDecoration: 'none',
    fontWeight: '700',
    marginLeft: '10px',
    [theme.breakpoints.down("lg")]: {
      marginBottom: '20px'
    },
  }
}));

export default function SideBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="main menu">
        <ListItem button>
            <NavLink to="/"  className={classes.link}>
                <ListItemIcon className={classes.icon}>
                    <DashboardIcon />
                </ListItemIcon>
                <span className={classes.span}>News Feed</span>
            </NavLink>
        </ListItem>
        <ListItem button>
            <NavLink to="/Messages"  className={classes.link}>
                <ListItemIcon className={classes.icon}>
                    <AddCommentIcon />
                </ListItemIcon>
                <span className={classes.span}>Messages</span>
            </NavLink>
        </ListItem>
        <ListItem button>
            <NavLink to="/Watch"  className={classes.link}>
                <ListItemIcon className={classes.icon}>
                    <PersonalVideoIcon />
                </ListItemIcon>
                <span className={classes.span}>Watch</span>
            </NavLink>
        </ListItem>
      </List>
    </div>
  );
}
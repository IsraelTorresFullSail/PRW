import React from 'react'
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import './Header.css'
import Nav from '../nav/Nav'
import logo from '../../images/logo.png'

const useStyles = makeStyles(theme => ({
    grow: {
      flexGrow: 1,
    },
    title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
      },
    },
    searchIcon: {
      width: theme.spacing(7),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 7),
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: 200,
      },
    },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    },
    sectionMobile: {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
  }));
  
const Header = props => {
    const classes = useStyles();
  
    return (
      <div className={classes.grow}>
        <AppBar position="static">
          <Toolbar>
            <img src={logo} alt="Logo" style={styles.img} />
            <Typography className={classes.title} variant="h6" noWrap>
                {props.pgTitle}
            </Typography>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
                onChange={props.searchPost}
              />
            </div>
            <div className={classes.grow} />
            <Nav />
          </Toolbar>
        </AppBar>
      </div>
    );
  }

  export default Header

// const Header = props => {
    
//     return (
//         <header className='Header' style={styles.header}>
//             <div style={styles.container}>
//                 <div style={styles.logoWrapper}>
//                     <img src={logo} alt="Logo" style={styles.img} />
//                     <h1 style={styles.h1}>{props.pgTitle}</h1>
//                 </div>
//                 <form className='SearchDiv' style={styles.searchDiv} >
//                     <GoSearch style={styles.icon}/>
//                     <input type="text" onChange={props.searchPost} style={styles.searchBar}/>
//                 </form>
//                 <Nav />
//             </div>
//         </header>
//     )
// }

// export default Header

const styles = {
    container: {
        minHeight: '50px',
        margin: '0 auto',
        paddingTop: '10px',
        paddingBottom: '10px',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    searchDiv: {
        position: 'relative',
        paddingLeft: '45px',
        width: '65%',
        backgroundColor: '#404FAB',
        borderRadius: '5px',
    },
    searchBar: {
        minHeight: '40px',
        width: '100%',
        backgroundColor: '#ffffff',
        transition: 'all ease .3s',
        color: '#404FAB',
        fontSize: '1em',
        borderTopRightRadius: '5px',
        borderBottomRightRadius: '5px',
        border: '1px solid rgba(4, 11, 113, 0.3)',
        borderLeft: '0px'
    },
    logoWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    h1: {
        fontSize: '1.25em',
        textAlign: 'center',
        color: '#040B71',
        textTransform: 'uppercase'
    },
    img: {
        width: '60px',
        marginRight: '10px',
        marginLeft: '30px'
    },
    icon: {
        position: 'absolute',
        top: '12px',
        left: '12px',
        color: '#ffffff',
        fontSize: '1.25em',
        lineHeight: '2.5em',
        textDecoration: 'none',
        fontWeight: '700',
        marginRight: '20px'
    }
}
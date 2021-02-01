import React from 'react'
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SideBar from './SideBar';
import { createMuiTheme } from '@material-ui/core/styles';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import DashBoard from './DashBoard';
import ManageBloodGroup from './ManageBloodGroup';
import ContactUsQuery from './ContactUsQuery';
import DonarList from './DonarList';
import AddDonar from './AddDonar';

const drawerWidth = 240;



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        display: 'flex'
    },
    title: {
        flexGrow: 1,
    },
    appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        // padding: theme.spacing(3),
    },
}));

function AdminDashboard({match}) {
    const classes = useStyles();
    return (
        <Router>
        <div className={classes.root}>
            <SideBar />
            <main className={classes.content}>

                <Switch>

                </Switch>
            </main>
        </div>
        </Router>
    )
}

export default AdminDashboard
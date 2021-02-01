import React from 'react'
import SideBar from './SideBar'
import { Typography, makeStyles, Grid, Container, CssBaseline } from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';


const useStyle = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    title: {
        textAlign: "left",
        color: "blue"
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    content: {
        textAlign: "left",
        fontSize: "25px"
    },
    appBar: {
        marginLeft: "240px",
        width: `calc(100% - 240px)`,
        flexGrow: 1,
    },
    headerTitle: {
        flexGrow: 1
    }
}))

function DashBoard() {
    const classes = useStyle()

    return (
        <>
            <CssBaseline />
            <AppBar position="static" className={classes.appBar}>
                <Toolbar className={classes.toolbar}>
                    <Typography component="h1" variant="h6" className={classes.headerTitle}>
                        Admin Dashboard
                          </Typography>
                </Toolbar>
            </AppBar>

            <Container component="main" maxWidth="xl" className={classes.root}>
                <SideBar />
                <div style={{margin:"2em"}}>                <Grid container spacing={1} >
                    <Grid item sm={12} >
                        <Typography variant={"h3"} className={classes.title}>Welcome to Dashboard</Typography>
                    </Grid>
                    <Grid item sm={12}>
                    </Grid>
                </Grid>
                </div>

            </Container>
        </>
    )
}
export default DashBoard
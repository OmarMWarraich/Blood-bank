import React from 'react'
import SideBar from './SideBar'
import { Typography, makeStyles, Grid, Container, CssBaseline, Paper, Button, Box } from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Footer from '../Footer'

const useStyle = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
    },
    title: {
        textAlign: "left",
        padding: "20px",
        color: "blue"
    },
    headerTitle: {
        flexGrow: 1
    }
}))

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

function ManageBloodGroup() {

    const classes = useStyle()

    return (
        <div  className={classes.root}>

            <AppBar position="static" className={classes.appBar}>
                <Toolbar className={classes.toolbar}>
                    <Typography component="h1" variant="h6" className={classes.headerTitle}>
                        Admin Dashboard
                          </Typography>
                </Toolbar>
            </AppBar>
            <Grid container >
                <CssBaseline />
                <Grid item xs={2} >
                    <SideBar />
                </Grid>
                <Grid item xs={10} >
                    <Grid contianer>
                        <Grid item xs={12}>
                            <Typography variant={"h3"} className={classes.title}>Manage Blood Group</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Box display="flex" style={{ margin: "0px 3em" }} >
                                <TextField margin="dense" id="addBloodGroup" label="Enter Blood Group" type="search" variant="outlined" />
                                <Box alignSelf="center" style={{ marginLeft: "1em" }} >
                                    <Button variant="contained" color="primary" >
                                        Add Blood Group
                                    </Button>
                                </Box>
                            </Box>
                            <Divider style={{ margin: "1em" }} />
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant={"h4"} style={{ margin: " 5px 1em" }} className={classes.title}>Blood Groups</Typography>
                        </Grid>
                        <Grid item xs={12}>

                            <Box width="60%">


                                <TableContainer component={Paper} >
                                    <Table aria-label="simple table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell align="center">Calories</TableCell>
                                                <TableCell align="center">Fat&nbsp;(g)</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {rows.map((row) => (
                                                <TableRow key={row.name}>
                                                    <TableCell align="center">{row.calories}</TableCell>
                                                    <TableCell align="center">{row.fat}</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Footer />
        </div>
    )
}

export default ManageBloodGroup
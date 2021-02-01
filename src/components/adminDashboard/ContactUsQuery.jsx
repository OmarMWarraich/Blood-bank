import { AppBar, Box, Button, Container, CssBaseline, Grid, makeStyles, MenuItem, Paper, TextareaAutosize, Toolbar, Typography } from '@material-ui/core'
import { TextField } from 'formik-material-ui'
import React from 'react'
// import BreadCrumbs from './BreadCrumbs'
import * as Yup from 'yup'
import { Field, Form, Formik } from 'formik'
import SideBar from './SideBar'
// import Header from './Header'
import Footer from '../Footer'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

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
    form: {
        width: '100%', // Fix IE 11 issue.
        // marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
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

 function ContactUsQuery() {
    const classes = useStyle()
    return (
        <>
            <div className={classes.root} >
                {/* <Header /> */}
                <AppBar position="static" className={classes.appBar}>
                    <Toolbar className={classes.toolbar}>
                        <Typography component="h1" variant="h6" className={classes.headerTitle}>
                            Admin Dashboard
                          </Typography>
                    </Toolbar>
                </AppBar>
                <Grid container >
                    <CssBaseline />
                    <Grid item xs={2}>
                        <SideBar />
                    </Grid>

                    <Grid item xs={10}>
                        <Grid contianer>
                            <Grid item xs={12}>

                                <Typography variant={"h3"} className={classes.title}>Manage Contact Us Queries</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Box width="80%">


                                    <TableContainer component={Paper} >
                                        <Table aria-label="simple table">
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell align="center">Name</TableCell>
                                                    <TableCell align="center">Mobile No&nbsp;(g)</TableCell>
                                                    <TableCell align="center">Email&nbsp;(g)</TableCell>
                                                    <TableCell align="center">Message&nbsp;(g)</TableCell>
                                                    <TableCell align="center">Posting Date&nbsp;(g)</TableCell>
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
        </>
    )
 }

 export default ContactUsQuery
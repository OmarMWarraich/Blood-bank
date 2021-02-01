import { AppBar, Button, Container, CssBaseline, Grid, makeStyles, MenuItem, TextareaAutosize, Toolbar, Typography } from '@material-ui/core'
import { TextField } from 'formik-material-ui'
import React from 'react'
// import BreadCrumbs from './BreadCrumbs'
import * as Yup from 'yup'
import { Field, Form, Formik } from 'formik'
import SideBar from './SideBar'
// import Header from './Header'
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

const initialValues = {
    fullName: '',
    mobileNumber: '',
    emailID: '',
    age: '',
    gender: '',
    bloodGroup: '',
    address: ''
}

const validationSchema = Yup.object({
    fullName: Yup.string().min(4).required("Name is Required and should be min.4 characters"),
    mobileNumber: Yup.string().matches(/^[789]\d{9}$/, "Enter a valid Mobile number").required("Valid Mobile Number is Required"),
    emailID: Yup.string().email().required("Enter Valid Email"),
    age: Yup.number().min(8).max(60).required("Age is Required"),
    address: Yup.string().min(5).max(100).required("Enter Valid Address")
})

const onSubmit = values => {
    console.log(values)
}

function AddDonar() {
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

                            <Typography variant={"h3"} className={classes.title}>Add a Donar</Typography>
                        </Grid>
                        <Grid item xs={12}>


                            <Formik initialValues={initialValues} validationSchema={validationSchema} className={classes.formElements} onSubmit={onSubmit}>
                                <Form className={classes.form}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} sm={4}>
                                            <Field
                                                component={TextField}
                                                id="fullName"
                                                name="fullName"
                                                label="Full Name"
                                                variant="outlined"
                                                fullWidth
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={4}>
                                            <Field
                                                component={TextField}
                                                id="mobileNumber"
                                                name="mobileNumber"
                                                label="Mobile No."
                                                variant="outlined"
                                                fullWidth
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={4}>
                                            <Field
                                                component={TextField}
                                                id="emailID"
                                                name="emailID"
                                                label="Email ID"
                                                variant="outlined"
                                                fullWidth
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={4}>
                                            <Field
                                                component={TextField}
                                                id="gender"
                                                name="gender"
                                                label="Gender"
                                                variant="outlined"
                                                fullWidth
                                                select
                                            >
                                                <MenuItem value={`Male`}>Male</MenuItem>
                                                <MenuItem value={`Female`}>Female</MenuItem>
                                            </Field>
                                        </Grid>
                                        <Grid item xs={12} sm={4}>
                                            <Field
                                                component={TextField}
                                                id="age"
                                                name="age"
                                                label="Age"
                                                variant="outlined"
                                                fullWidth
                                            >
                                            </Field>
                                        </Grid>
                                        <Grid item xs={12} sm={4}>
                                            <Field
                                                component={TextField}
                                                id="bloodGroup"
                                                name="bloodGroup"
                                                label="Blood Group"
                                                variant="outlined"
                                                fullWidth
                                                select
                                            >
                                                <MenuItem value={'A+'}>A+</MenuItem>
                                                <MenuItem value={'A-'}>A-</MenuItem>
                                                <MenuItem value={'AB+'}>AB+</MenuItem>
                                                <MenuItem value={'AB-'}>AB-</MenuItem>
                                                <MenuItem value={'O+'}>O+</MenuItem>
                                                <MenuItem value={'O-'}>O-</MenuItem>
                                            </Field>
                                        </Grid>
                                        <Grid item xs={12} sm={4}>
                                            <Field
                                                component={TextField}
                                                id="address"
                                                name="address"
                                                label="Address"
                                                variant="outlined"
                                                fullWidth
                                                multiline
                                                rows={4}
                                            >
                                            </Field>
                                        </Grid>
                                    </Grid>
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        color="primary"
                                        className={classes.submit}
                                    >
                                        Sign Up
                        </Button>
                                </Form>
                            </Formik>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Footer />
            </div>
        </>
    )
}
export default AddDonar
import { Button, Container, CssBaseline, Grid, makeStyles, Typography } from '@material-ui/core'
import { Field, Form, Formik } from 'formik'
import { TextField } from 'formik-material-ui'
import React from 'react'
import * as Yup from 'yup'
import BreadCrumbs from './BreadCrumbs'
import Header from './Header'

const useStyle = makeStyles(theme => ({
    title: {
        textAlign: "left",
        padding: "20px",
        color: "blue"
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}))

const initialValues = {
    fullName: '',
    mobileNumber: '',
    emailID: '',
    message: ''
}

const validationSchema = Yup.object({
    fullName: Yup.string().min(4).required("Name is Required and should be min.4 characters"),
    mobileNumber: Yup.string().matches(/^[789]\d{9}$/, "Enter a valid Mobile number").required("Valid Mobile Number is Required"),
    emailID: Yup.string().email().required("Enter Valid Email"),
    message: Yup.string().max(250).required("Enter Valid Address")
})

const onSubmit = values => {
    console.log(values)
}

function ContactUs() {
    const classes = useStyle()
    return (
        <>
         <Header />
        <Container component="main" maxWidth="lg">
            <BreadCrumbs />
            <CssBaseline />
            <Typography variant={"h3"} className={classes.title}>Contact Us</Typography>
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
                        <Grid item xs={12} sm={12}>
                            <Field
                                component={TextField}
                                id="message"
                                name="message"
                                label="Message"
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
                    >Submit</Button>
                </Form>
            </Formik>
        </Container>
        </>
    )
}
export default ContactUs
import { Button, Container, CssBaseline, makeStyles, Typography } from '@material-ui/core';
import { Field, Form, Formik } from 'formik';
import { TextField } from 'formik-material-ui';
import React from 'react'
import * as Yup from 'yup'
import Header from './Header';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const initialValues = {
    username: '',
    password: ''
}

const validationSchema = Yup.object({
    username: Yup.string().required("Username is Required"),
    username: Yup.string().required("Password is Required")
})


function Login(props) {
    const classes = useStyles();
    const { history } = props;

    const onSubmit = values => {
        history.push("admin/Dashboard")
    }

    return (
        <>
         <Header />
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                    Sign in
        </Typography>
                <Formik initialValues={initialValues} validationSchema={validationSchema} className={classes.formElements} onSubmit={onSubmit}>
                    <Form className={classes.form}>
                        <Field
                            component={TextField}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="username"
                            label="Username"
                            name="username"
                            autoComplete="username"
                            autoFocus
                        />
                        <Field
                            component={TextField}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >Submit</Button>
                    </Form>
                </Formik>
            </div>
        </Container>
        </>
    )
}
export default Login
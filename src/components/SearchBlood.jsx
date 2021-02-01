import { Button, Card, CardContent, Container, CssBaseline, Divider, Grid, makeStyles, MenuItem, Typography } from '@material-ui/core'
import { Field, Form, Formik } from 'formik'
import { TextField } from 'formik-material-ui'
import React from 'react'
import BreadCrumbs from './BreadCrumbs'
import * as Yup from 'yup'
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
    bloodGroup: ''
}

const validationSchema = Yup.object({
    bloodGroup: Yup.string().required("Select A Blood Group")
})

const onSubmit = values => {
    console.log(values)
}

const bloodDonars = [
    {
        name: "Rahul",
        gender: "male",
        bg: "O+",
        loc: "Bangalore"
    },
    {
        name: "Ashwini",
        gender: "Female",
        bg: "B+",
        loc: "Mangalore"
    },
    {
        name: "Sharath",
        gender: "male",
        bg: "AB+",
        loc: "New Delhi"
    },
    {
        name: "Shalini",
        gender: "Female",
        bg: "O+",
        loc: "Chennai"
    },
    {
        name: "Rakul",
        gender: "male",
        bg: "A+",
        loc: "Jaipur"
    },
    {
        name: "Neha",
        gender: "Female",
        bg: "O-",
        loc: "Kalkota"
    },
    {
        name: "Prema",
        gender: "Female",
        bg: "O+",
        loc: "Bangalore"
    }
]

function SearchBlood() {
    const classes = useStyle()

    return (
        <>
         <Header />
        <Container component="main" maxWidth="lg">
              <BreadCrumbs />
            <CssBaseline />
            <Typography variant={"h3"} className={classes.title}>Search Donar</Typography>
            <Formik initialValues={initialValues} validationSchema={validationSchema} className={classes.formElements} onSubmit={onSubmit}>
                <Form className={classes.form}>
                    <Grid container spacing={2}>
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
                        </Grid>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >Search Donar</Button>
                </Form>
            </Formik>
            <Grid container spacing={1} className={classes.gridPadding}>
                {bloodDonars.map((donar) => (<Grid item sm={4} xs={12} md={3} >
                    <Card className={classes.donarCard} variant="outlined"  >
                        <CardContent >
                            <Typography variant="h5" className={classes.recentDonarTitle} >
                                {donar.name}
                            </Typography>
                            <Divider />
                            <Typography variant="h6">
                                Gender:{donar.gender}
                            </Typography>
                            <Typography variant="h6" component="p">
                                Blood Group:{donar.bg}
                            </Typography>
                            <Typography variant="h6" component="p">
                                Location:{donar.loc}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>))}
            </Grid>
        </Container>
        </>
    )
}
export default SearchBlood
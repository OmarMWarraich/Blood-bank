import { Typography, makeStyles, Grid, Container, CssBaseline } from '@material-ui/core'
import React from 'react'
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
    content: {
        textAlign:"left",
        fontSize:"25px"
    },
}))

function AboutUs() {
    const classes = useStyle()
    return (
        <>
        <Header />
        <Container component="main" maxWidth="lg">
            <BreadCrumbs />
            <CssBaseline />
            <Typography variant={"h3"} className={classes.title}>About Us</Typography>
            <Grid container spacing={2} >
                <Grid item sm={12}>
                    <Typography variant={"P"} component={"p"} className={classes.content} >
                        Each day, thousands of people – people just like you – provide compassionate care to those in need. Our network of generous donors, volunteers and employees share a mission of preventing and relieving suffering, here at home and around the world.
                        We roll up our sleeves and donate time, money and blood. We learn or teach life-saving skills so our communities can be better prepared when the need arises. We do this every day because the Red Cross is needed - every day.
            </Typography>
                </Grid>
            </Grid>
        </Container>
        </>
    )
}
export default AboutUs
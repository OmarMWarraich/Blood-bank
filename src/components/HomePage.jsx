import { Card, CardContent, CardMedia, Divider, Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import CarosouelHP from './CarosouelHP'
import Footer from './Footer';
import Header from './Header';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        minHeight: 200
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    gridPadding: {
        padding: 30
    },
    recentDonarTitle: {
        color: "blue"
    },
    donarCard: {
        justifyContent: "left",
        textAlign: "left"

    }
});

const Details = [
    {
        title: "The Need For Blood Donation",
        desc: "The reason to donate is simple…it helps save lives. In fact, every two seconds of every day, someone needs blood. Since blood cannot be manufactured outside the body and has a limited shelf life, the supply must constantly be replenished by generous blood donors."
    },
    {
        title: "Blood Donation Tips",
        desc: "Get plenty of sleep the night before you plan to donate.Eat a healthy meal before your donation.Avoid fatty foods, such as hamburgers, french fries or ice cream before donating."
    },
    {
        title: "Who You Could Help",
        desc: "Every day, blood donors help patients of all ages: accident and burn victims, heart surgery and organ transplant patients. In fact, every two seconds, someone in the U.S. needs blood."
    }
]

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

function HomePage() {
    const classes = useStyles();
    return (
        <>
             <Header />
            <CarosouelHP />
            <Typography variant={`h4`}>
                Welcome to BloodBank & Donor Management System
           </Typography>
            <Grid container spacing={1} className={classes.gridPadding}>
                {Details.map((detail) => (<Grid item sm={6} xs={12} md={4} >
                    <Card className={classes.root} variant="outlined"  >
                        <CardContent>
                            <Typography variant="h6" >
                                {detail.title}
                            </Typography>
                            <Typography component="p">
                                <Divider />
                                {detail.desc}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>))}
            </Grid>
            <Typography variant={`h4`}>
                Recent Donars
           </Typography>
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
            <Typography variant={`h4`}>
                Blood Groups
           </Typography>
            <Divider />
            <Grid container spacing={2}>
                <Grid item sm={7} >
                    <Typography variant={`p`} display="block" gutterBottom>
                    blood group of any human being will mainly fall in any one of the following groups. </Typography>
                    <Typography>   A positive or A negative</Typography>
                    <Typography>   B positive or B negative</Typography>
                    <Typography>   O positive or O negative</Typography>
                    <Typography>   AB positive or AB negative.</Typography>
                    <Typography>    A healthy diet helps ensure a successful blood donation, and also makes you feel better! Check out the following recommended foods to eat prior to your donation.
           </Typography>
                </Grid>
                <Grid item sm={5}>
                     <img src={'../../images/bd1.jpg'} alt={'Donate B;ood'} />
                </Grid>
            </Grid>
        </>
    )
}
export default HomePage
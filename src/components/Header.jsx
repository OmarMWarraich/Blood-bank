import { AppBar, Button, makeStyles, Toolbar, Typography } from '@material-ui/core';
import React from 'react'
import { withRouter } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

function Header(props) {
    const classes = useStyles();
    const { history } = props;

    const onButtonClick= (e)=>{
       history.push(e.currentTarget.id)
    }

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" id="home" className={classes.title} onClick={onButtonClick}>
                  Blood Bank & Donar Management System
            </Typography>
            <Button color="inherit" id="aboutUs" name="aboutUsBtn" onClick={onButtonClick}>About Us</Button>
            {/* <Button color="inherit" id="becomeDonar" onClick={onButtonClick}>Become a Donar</Button> */}
            <Button color="inherit" id="searchBlood" onClick={onButtonClick}>Search Blood</Button>
            <Button color="inherit" id="contactUs" onClick={onButtonClick}>Contact Us</Button>
            <Button color="inherit" id="login" onClick={onButtonClick}>Login</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
}

export default withRouter(Header)
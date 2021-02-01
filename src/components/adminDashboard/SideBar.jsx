import React from 'react'
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import { withRouter } from 'react-router-dom';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor:"#3f51b5",
    palette:"dark"
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar
}));

// const onMenuClick = (e)=>{
//   console.log(e.currentTarget.id)
// }

// const theme = createMuiTheme({
//   palette:{
//       type:"dark",
//       background:{
//           paper:"#3f51b5"
//       }
//   }
// })

function SideBar(props) {
    const classes = useStyles();
    const {history,match} = props

    const onMenuClick = (e)=>{
      // history.push("/admin/"+e.currentTarget.id)
      history.push("/admin/"+e.currentTarget.id)

    }


    return (
      <>
       <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        <Divider />
            <ListItem button id="Dashboard" onClick ={onMenuClick}>
              <ListItemIcon><InboxIcon style={{color:"white"}} /> </ListItemIcon>
              <ListItemText primary="Dashboard" style={{color:"white"}} />
            </ListItem>
            <ListItem button  id="ManageBloodGroup"  onClick ={onMenuClick}>
              <ListItemIcon style={{color:"white"}}><InboxIcon /> </ListItemIcon>
              <ListItemText primary="Manage Blood Group" style={{color:"white"}}/>
            </ListItem>
            <ListItem button id="AddDonar" onClick ={onMenuClick}>
              <ListItemIcon style={{color:"white"}}><InboxIcon /> </ListItemIcon>
              <ListItemText primary="Add Donar" style={{color:"white"}} />
            </ListItem>
            <ListItem button id="DonarList" onClick ={onMenuClick}>
              <ListItemIcon style={{color:"white"}}><InboxIcon /> </ListItemIcon>
              <ListItemText primary="Donar List" style={{color:"white"}} />
            </ListItem>
            <ListItem button id="ContactUsQuery" onClick ={onMenuClick}>
              <ListItemIcon style={{color:"white"}}><InboxIcon /> </ListItemIcon>
              <ListItemText primary="Contact Us Query" style={{color:"white"}} />
            </ListItem>
        <Divider />
      </Drawer>
      </>
    )
}
export default withRouter(SideBar)
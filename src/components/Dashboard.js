import React, { useState } from "react"
import { Button, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useHistory } from "react-router-dom"
import logo from './img/1.png';








import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import MoreIcon from '@mui/icons-material/More';
import Typography from '@mui/material/Typography';
import StarsIcon from '@mui/icons-material/Stars';
import Divider from '@mui/material/Divider';
import HomeIcon from '@mui/icons-material/Home';
import { makeStyles } from '@mui/styles';
import SearchIcon from '@mui/icons-material/Search';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import GroupIcon from '@mui/icons-material/Group';
import CampaignIcon from '@mui/icons-material/Campaign';
import Grid from '@material-ui/core/Grid';
import LogoutIcon from '@mui/icons-material/Logout';
import IconButton from '@mui/material/IconButton';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import CollectionsIcon from '@mui/icons-material/Collections';
import GroupsIcon from '@mui/icons-material/Groups';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import CakeIcon from '@mui/icons-material/Cake';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Input } from "@mui/material";
import UpdateIcon from '@mui/icons-material/Update';




const drawerWidth = 240;






const useStyles = makeStyles({
  root: {
    background: '#29b6f6',
    borderColor:'#212121'
   
  },
  sdbar:{
height:'auto'
  },
  toolbarButtons: {
    marginLeft: 'auto',
    
  },
  ic:{
    color:'#212121'
    
  },
  tool:{
    background:'#29b6f6',
    color:"#212121"
  },
  search:{
    marginLeft: 'auto'
  }
});


const openedMixin = (theme) => ({
  width: drawerWidth,

  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
  
});

const closedMixin = (theme) => ({
  
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
color:'#29b6f6',    
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  }));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
 
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);








export default function Dashboard() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()



  const theme = useTheme();
  const [open, setOpen] = React.useState(false);






  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const classes = useStyles();
  





  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/login")
    } catch {
      setError("Failed to log out")
    }
  }

  return (
    <>
   <div>
      
      <Box sx={{ display: 'fixed' }}>
        <CssBaseline />
        <AppBar position="fixed" open={open} className={classes.root} >
       
   
  
          <Toolbar className={classes.tool} >
            <IconButton
           
              color="error"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{

                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon  />
            </IconButton>
            <img src={logo} width="70" height="40" class="d-inline-block align-top" alt=""/>
<Typography variant="h6" noWrap component="div"  >
             DashBoard

            </Typography>
            <div className={classes.toolbarButtons}>
    <Input   inputProps={{ maxLength: 12 }}  defaultValue="Search" type="search"></Input>  <SearchIcon/>
    </div>
    <Divider  variant="middle" orientation="vertical" flexItem />
    <div className={classes.toolbarButtons}>
 
            <Link to="/update-profile" >
            <UpdateIcon  color='#212121'size="large"/>
          </Link>
          
          
          <Typography>
          Update Profile
          </Typography>
          </div>
          <Divider variant="middle" orientation="vertical" flexItem />
           <div className={classes.toolbarButtons}>
      
        <Link variant="link" onClick={handleLogout}>
        <LogoutIcon>
        
          </LogoutIcon>
          </Link>
        <Typography>Log out</Typography>

      </div>
            
      
          </Toolbar>
         
          </AppBar>    
        <Drawer variant="permanent" className={classes.sdbar} open={open}>
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List className={classes.root}>
            {['Home', 'My Group', 'Gallery CGI', 'BirthDay Column','Public Group','My Task','Notification',"Announcement",'Achivement Score','Activity','More'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index  === 0 ? <HomeIcon className={classes.ic} /> : index  === 1 ? <GroupIcon className={classes.ic}/> : index  === 2 ? <CollectionsIcon className={classes.ic}/> : index  === 3 ? <CakeIcon className={classes.ic}/> : index  === 4 ? <GroupsIcon className={classes.ic}/> : index  === 5 ? < TaskAltIcon className={classes.ic}/> : index  === 6 ? <NotificationsActiveIcon className={classes.ic}/> : index  === 7 ? <CampaignIcon  className={classes.ic}/> : index  === 8 ? <StarsIcon className={classes.ic}/> : index  === 9 ? <LocalActivityIcon className={classes.ic}/> : <MoreIcon className={classes.ic} />}
                </ListItemIcon>
                <ListItemText secondary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
        
        </Drawer>
  
  

    
      
      
    
  
  
  
  
       
  
  
  
  
  
  
  
  
  
  
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader bgcolor="primary.main" />
  
                </Box>
      </Box>
  
  </div>
  
        </>
  )
}

































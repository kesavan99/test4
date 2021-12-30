import * as React from 'react';
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

import Rbar from './Rbar';


const drawerWidth = 240;






const useStyles = makeStyles({
  root: {
    background: '#828484',
    borderColor:'#e63a3f'
   
  },
  ic:{
    color:'#e63a3f'
    
  },
  tool:{
    background:'#828484',
    color:"#82848"
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
color:'#828484',    
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
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

export default function Home() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);






  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const classes = useStyles();
  
  return (
    <div>
      
    <Box  sx={{ display: 'fixed' }}>
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
          <Typography variant="h6" noWrap component="div"  >
           CGI
          </Typography>
        </Toolbar>
        </AppBar>    
      <Drawer variant="permanent" className={classes.root} open={open}>
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
        <DrawerHeader />

              </Box>
    </Box>
<Rbar/>
</div>
    
  );
}


import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import { experimentalStyled as styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@mui/styles';
import { typography } from '@mui/system';


const drawerWidth = 440;




const useStyles = makeStyles({
  root: {
    background: '#828484'
  
  }
});











export default function Rbar() {
  const classes = useStyles();

  return (
      <Drawer
      className={classes.root}
     
        sx={{
         
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
          
          },
        }}
        
        variant="permanent"
        anchor="right"
      >
        <Grid marginTop={10} gridColumn={1} className={classes.root} >
          <Grid borderColor='grey:900'  >
<Typography   color='grey:900'> Notification</Typography>

</Grid>
<Grid  className={classes.root}  marginTop={20}>
  <typography>
New    
  </typography>
</Grid>
<Grid  className={classes.root}  marginTop={10}>
  <typography>
Earlier    
  </typography>
</Grid>
<Grid  className={classes.root}  marginTop={10}>
  <typography>
Members   
  </typography>
</Grid>
<Grid  className={classes.root}  marginTop={10}>
  <typography>
  NEWS Letter   
  </typography>
</Grid>
</Grid>


      </Drawer>
     

  
  );
}

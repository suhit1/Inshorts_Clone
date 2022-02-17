import React from 'react';
import {AppBar,Toolbar,makeStyles} from '@material-ui/core'
import {Menu} from '@material-ui/icons';

const useStyles = makeStyles({
    header: {
      backgroundColor: '#fff',
      height:70
    },
    logo:{
        height:65,
        margin:"auto",
        paddingRight:70
    },
    icon:{
        color:'black'
    }
  });

const Header = () => {
    const classes=useStyles();
    const url = 'https://assets.inshorts.com/website_assets/images/logo_inshorts.png';
  return (
      <AppBar className={classes.header}>
          <Toolbar>
          <Menu className={classes.icon} />
              <img src={url} alt='logo' className={classes.logo} />
          </Toolbar>
      </AppBar>
  )
};

export default Header;

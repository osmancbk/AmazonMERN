import React, { useContext } from 'react';
import { Drawer, Container, Badge, useMediaQuery, Menu, MenuItem } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import ShoppingCartOutlined from '@material-ui/icons/ShoppingCartOutlined';
import { Context } from '../../router/Router'
import { Link, useHistory } from "react-router-dom";
import { styles, StyledBadge, DrawerButton, NavLogo, SignIn, SignInRet } from './Navbar.style'
import logo from '../../assets/amazonLg.png'
import { SearchBar } from '../SearchBar';
import { useTheme } from "@material-ui/core/styles";

export default function ButtonAppBar() {
  const classes = styles();
  const history = useHistory();
  const consumer = useContext(Context)
  //
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
  //
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClick = pageURL => {
    history.push(pageURL);
    setAnchorEl(null);
    if (pageURL === "/") {
      consumer.getProducts();
    }

  };

  const handleButtonClick = pageURL => {
    history.push(pageURL);
  };

  const handleAuthentication = () => {
    if (consumer?.currentUser) {
      consumer?.setCurrentUser(null);
      localStorage.removeItem("token");
      history.push('/');
      consumer.setCheckout(null);
      consumer.setTotal(null);
    }
  };

  const menuItems = [
    {
      menuTitle: "Home",
      pageURL: "/"
    },
    {
      menuTitle: "Login",
      pageURL: "/login"
    },
    {
      menuTitle: "Checkout",
      pageURL: "/checkout"
    },

  ];
// Todo:  Func link
  return (
    <Container maxWidth={'xl'} className={classes.root}>
      <AppBar position="static" className={classes.header}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>

          <Link to="/" className={classes.logoAmazon}  onClick={() => consumer.getProducts()}> 
            <NavLogo src={logo} alt="Logo" />
          </Link>

          <SearchBar />

          {isMobile ? (
            <>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
                onClick={handleMenu}
              >
                <AccountBoxIcon style={{ marginLeft: "30", fontSize: "30" }} />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                open={open}
                onClose={() => setAnchorEl(null)}
              >

                {menuItems.map(menuItem => {
                  const { menuTitle, pageURL } = menuItem;
                  return (
                    <MenuItem onClick={() => handleMenuClick(pageURL)}>
                      {menuTitle}
                    </MenuItem>
                  );
                })}
              </Menu>
            </>
          ) : (
              <>
                <Link className={classes.loginStyle} to={!consumer?.currentUser && "/login"}>
                  <SignIn onClick={handleAuthentication} >
                    <SignIn>
                      {consumer?.currentUser ? consumer?.currentUser?.userEmail : "HelloGuess"}
                    </SignIn>

                    <SignIn>
                      <b>{consumer?.currentUser ? "Sign Out" : "SignIn"}</b>
                    </SignIn>
                  </SignIn>
                </Link>

                <SignInRet>
                  <SignInRet>Returns</SignInRet>
                  <b><SignInRet>&Orders</SignInRet></b>
                </SignInRet>


                <Link onClick={() => { consumer?.getCheckout() }} to="/checkout">
                  <StyledBadge badgeContent={consumer?.checkout?.length} color="secondary" >
                    <ShoppingCartOutlined style={{ fill: "#FFFFFF", fontSize: "30" }} />
                  </StyledBadge>
                </Link>
              </>

            )}

        </Toolbar>
      </AppBar>
    </Container >
  );
}

// import React, { useState, useContext } from 'react';
// import { styles, DrawerButton, NavLogo, SignIn } from './Navbar.style'
// import { Link, useHistory } from "react-router-dom";
// import MenuIcon from '@material-ui/icons/Menu';
// import logo from '../../assets/amazonLg.png'//*
// import SearchIcon from '@material-ui/icons/Search';
// import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
// import { Drawer, IconButton, Container, Grid, TextField, Hidden } from '@material-ui/core';
// import { Context } from '../../router/Router'
// import { SearchBar } from '../SearchBar'

// function Navbar() {
//   const classes = styles();
//   const history = useHistory();
//   const [open, setOpen] = useState(false)

//   const handleDrawer = () => {
//     setOpen(true)
//   }

//   function NavbarRight() {
//     const consumer = useContext(Context);
//     const handleAuthentication = () => {
//       if (consumer?.currentUser) {
//         consumer?.setCurrentUser(null);
//         localStorage.removeItem("token");
//         history.push('/');
//         consumer.setCheckout(null);//
//         consumer.setTotal(null);//
//       }
//     };
//     //  <LinearProgress style={{ marginTop: 20 }} /> || 

//     return (
//       <>
//         <Grid item xs={5} >
//             <Link style={{ color: 'white' }} to={!consumer?.currentUser && "/login"}>
//               <SignIn onClick={handleAuthentication}>
//                 <SignIn > 
//                   {consumer?.currentUser ? consumer?.currentUser?.userEmail :  "Hello Guess"  }
//                 </SignIn>
//                 <SignIn>
//                  <b>{consumer?.currentUser ? "Sign Out" : "Sign In"}</b>
//                 </SignIn>
//               </SignIn>
//             </Link>
//         </Grid>

//         <Grid item xs={4}>
//           <SignIn>Returns</SignIn>
//           <b><SignIn>&Orders</SignIn></b>
//         </Grid>
//         <Grid item xs={3}>
//           <Link onClick={()=>{consumer.getCheckout()}} to="/checkout">
//             <ShoppingCartIcon  style={{ fill: "#FFFFFF" }}/>
//           </Link>
//           <SignIn>{consumer?.checkout?.length}  </SignIn>
//         </Grid>
//       </>
//     );
//   }//{consumer?.checkout?.length}

//   return (
//     <Container maxWidth={'xl'} className={classes.root}>
//       <Grid container spacing={3} >

//         <Grid item xs={1} sm={1} md={1} container>
//           <IconButton onClick={handleDrawer}>
//             <MenuIcon fontSize='large' style={{ color: 'white' }} />
//           </IconButton>
//         </Grid>
//         <Hidden xsDown>
//           <Grid item xs={1} sm={2} md={2} container >
//             <Link to="/">
//               <NavLogo src={logo} alt="Logo" />
//             </Link>
//           </Grid>
//         </Hidden>
//         <Grid item xs={5} sm={4} md={6} container >
//         <SearchBar />
//           {/* <Grid xs={11}>
//             <TextField
//               id="filled"
//               label="Search"
//               variant="outlined"
//               size="small"
//               fullWidth
//               style={{
//               backgroundColor: 'white',
//               }} />
//           </Grid>

//           <Grid xs={1}>
//             <SearchIcon className={classes.SearchIcon} />
//           </Grid> */}

//         </Grid>
//         <Grid item xs={5} sm={5} md={3} container spacing={3}>
//           <NavbarRight />//*
//         </Grid>
//       </Grid>
//       <Drawer
//         anchor='left'
//         open={open}
//         onClose={() => setOpen(false)}
//       >
//         <h3>This is a Drawer ... </h3>
//       </Drawer>
//     </Container>
//   )
// }

// export default Navbar;

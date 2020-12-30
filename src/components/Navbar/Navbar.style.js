import { makeStyles, withStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import { Badge } from '@material-ui/core';




//------UI------//
export const styles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingLeft: '0px',
    paddingRight: '0px',

  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  header: {
    color: 'white',
    backgroundColor: 'rgb(19, 25, 33)',
  },

  logoAmazon: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  loginStyle: {
    color: 'white',
    textDecoration: 'none'
  },
  //


}));


export const StyledBadge = withStyles((theme) => ({
  badge: {
    right: 2,
    top: -2,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}))(Badge);



//------Styled Comp------//
// export const DrawerButton = styled.div`
//     color: white;
//     margin-left: 20px;
// `

export const NavLogo = styled.img`
width: 100px;
margin-right:35px;  
`

export const SignIn = styled.div`
font-size: 14px;

`

export const SignInRet = styled.div`
font-size: 14px;
margin-left: 20px;
margin-right: 20px;
`
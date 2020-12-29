import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";


//------UI------//
export const styles = makeStyles(() => ({
    root: {
        color: 'white',
        backgroundColor: 'rgb(19, 25, 33)',
        paddingTop: 20,
        paddingLeft: '0px',
        paddingRight: '0px',

    
    },
    SearchBar: {


    },
    SearchIcon: {
        padding: '9px',
        height: '22px',
        backgroundColor: 'rgb(254,189,105)',

    },
 


}));

//------Styled Comp------//
// export const DrawerButton = styled.div`
//     color: white;
//     margin-left: 20px;
    

// `
export const NavLogo = styled.img`
width: 100px;
    

`

export const SignIn = styled.div`
font-size: 14px;

`
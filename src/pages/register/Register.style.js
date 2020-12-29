import { makeStyles } from '@material-ui/core/styles';
import styled from "styled-components";

export const styles = makeStyles({
    wrapper: {
        marginTop: "1rem",
    },
    registerContainer:{
         border:"1px solid #e0e0e0",
    },
    button:{
        background: 'linear-gradient(45deg, #F3CF75 30%, #F2CA66 90%)',
        color:"black",
        textTransform:"none"
    },
    inputs:{
        margin:"auto",
        maxWidth:"90%",
        flexBasis:"90%"
    },
    newSpan:{
        padding:"2rem"
    },
    routetoRegister:{
        background: 'linear-gradient(45deg, #E3E6EB 30%, #DCDFE4 90%)',
        color:"black",
        textTransform:"none",
        fontSize: "13px"
    }
});

export const Image = styled.img`
    width:10rem;
    height:auto;
    margin-left:7rem;
    padding-bottom:1rem; 
` 

export const Header = styled.h2`
    text-align:left;
`

export const Paragraph = styled.p`
    text-align:left;
    font-size: 13px;
`

export const HelpSpan = styled.span`
    padding-left:1.5rem;
    font-size: 13px;
`

export const NewSpan = styled.h6`
    color:grey;
    font-size: 12px;
    display:block;
`
export const ValidationError = styled.p`
    color:red;
    font-size:10px;
    text-align:left;
`
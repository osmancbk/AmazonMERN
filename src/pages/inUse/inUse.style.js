import { makeStyles } from '@material-ui/core/styles';
import styled from "styled-components";

export const styles = makeStyles({
    warning: {
        marginTop: "1rem",
        border: "2px solid #ffe082",
        //outline:"1px solid #",,
        boxShadow:"0px 0px 1px 1px #546e7a",
        margin:"auto",
        borderRadius:"5px",
    },
    warning2:{
        margin:"auto",
        paddingLeft:"2rem"
    },
    warningIcon:{
        backgroundColor:"yellow"
    }
})


export const WarningHeader = styled.h5`
    text-align:left;
    margin-left:.5rem;
`
export const WarningHeader2 = styled.h5`
    text-align:left;
`

export const WarningParagraph = styled.p`
    text-align:left;
    font-size: 13px;
    margin-left:2rem;
`

export const WarningParagraph2 = styled.p`
    text-align:left;
    font-size: 13px;
`

export const Link = styled.a`
    text-align:left;
    font-size: 13px;
    text-decoration:none;
    padding-bottom:5px;
`
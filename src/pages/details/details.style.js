import { makeStyles } from '@material-ui/core/styles';
import styled from "styled-components";


export const style = makeStyles({
    checkoutWrapper:{
        border:"1px solid #D5D9D9",
        borderRadius:"8px",
        padding:"1rem",
        marginLeft:"2rem"
    },
    container:{
        marginTop:"2rem"
    },
    containerAboutItem:{
        padding:"1rem"
    },
    similarItems:{
        marginTop:"2rem"
    },
    
    card:{
        marginTop:"2rem"
    },
    buttonBuyNow:{
        marginTop:"2rem",
        background: 'linear-gradient(45deg, #F3B567 30%, #EF9E39 90%)',
        color:"black",
        textTransform:"none"
    },
    buttonsGrid:{
        marginTop:"8rem"
    },
    canvas:{
        border:"1px solid gray",
        boxShadow:"5px 10px 18px #888888",
        marginBottom:"2rem",
    }
})

export const Image = styled.img`
    width:20rem;
    height:auto;
    margin:auto;
    padding-bottom:1rem;
    cursor:pointer;
`
export const Link = styled.a`
    text-align:left;
    font-size: 15px;
    text-decoration:none;
    padding-bottom:5px;
`

export const DetailHeader = styled.p`
    text-align:right;
`
export const DetailP = styled.p`
    text-align:left;
    margin-left:1rem;
`

export const CancelledPrice = styled.p`
    text-align:left;
    margin-left:1rem;
    text-decoration: line-through;
`



export const DetailRed = styled.p`
    color:red;
`

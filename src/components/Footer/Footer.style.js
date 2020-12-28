import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";



//------UI------//

export const styles = makeStyles((theme) => ({
    bottomContainer: {
        color: 'white',
        // direction: "row", 
        // justifyContent :"space-evenly",
        // alignItems:"center" 


    },
    defaultProps: {
        borderColor: '#3a4553',
        marginTop: '40px',
        marginBottom: '40px',
    }
}));



//------Styled Comp------//
export const FooterContainer = styled.div`
background-color:#232F3E;

`

export const Link = styled.a`


`

export const LinkText = styled.p`
background-color:#485769;
color:white;
text-align:center;
margin-bottom: 40px;
padding:13px;

`

export const FooterTitle = styled.span`
color:white;
font-weight:bold;

`
export const FooterSubTitle = styled.p`
color:white;
font-size:14px;
`


export const Image = styled.img`
    width: 76px;
    height: 23px;
`

export const Box1 = styled.span`
border: 1px solid #848688;
border-radius: 3px;
padding: 6px 18px 6px 8px;

`
export const Box2 = styled.span`
border: 1px solid #848688;
border-radius: 3px;
padding: 6px 18px 6px 8px;

`
export const Box3 = styled.span`
border: 1px solid #848688;
border-radius: 3px;
padding: 6px 18px 6px 8px;

`
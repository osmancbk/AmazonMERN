import { makeStyles } from "@material-ui/core/styles";
import styled from 'styled-components';

export const styles = makeStyles(() => ({ 
    wrapper: {
        marginTop: 20,
        marginLeft:10,
        width:"100%",
        display:"flex",
        flexDirection:"column",
        // justifyContent:"center",
        // alignItems:"center"
    },
    checkoutWarning:{
        height:"20rem",
        // display:"flex",
        // justifyItems:"center",
        // alignContent:"center"
    },
    alert:{
        marginTop:"3rem",
        textAlign:"center"
    },
    grid: {
        // marginTop: -200,
         marginTop: 250,
         marginBottom: 20,
    }
}));



export const Box = styled.div`
      font-variant: small-caps;
      font-weight: bold;
      position: relative;
      margin-bottom: 7px;
      background-color: #F5F6F6;
      padding: 10px;
      color: #0F1111;
      /* display:block; */
      /* box-sizing: border-box; */

`;
import { makeStyles } from '@material-ui/core/styles';
import styled from "styled-components";

// import CardMedia from '@material-ui/core/CardMedia';


//------UI------//
export const styles = makeStyles({
  root: {
    maxWidth: 300,
    minWidth: 200,
    width: 'auto',
    height: '100%',
    // textAlign: 'left',
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',

    transition: "0.3s",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.5)",
    "&:hover": {
      transform: "scale(1.02)",
      boxShadow: "0 20px 70px -13px rgba(0,0,0,0.5)",
    },
  },
  media: {
    height: 200,
    width: 250,
    objectFit: 'contain',

  },
  price: {
    marginBottom: 15,

  },
  actions: {
    // display:'flex', //*
    flexDirection: 'column',
    margin: 10,


  },
  button: {
    background: 'linear-gradient(45deg, #F3CF75 30%, #F2CA66 90%)',
    color: "black",
    textTransform: "none",
    fontSize: 12,
  }
});



//------Styled Comp------//
export const Price = styled.p`
/* font-weight: 'bold'; */
    /* font-size: 14px; */



    
    
    `;
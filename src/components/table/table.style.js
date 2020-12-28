import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import styled from "styled-components";

export const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
export const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);
  
export const useStyles = makeStyles({
    price:{
      color:"#C45500"
    },
    shipping:{
      height:"3.9rem"
    },
    imageGrid:{
      height:"12rem"
    },
    titleGrid:{
      height:"6rem"
    },
    headerContainer:{
      marginTop:"21.3rem"
    },
    rating:{
      height:"1.8rem"
    },
    tableContainer:{
      marginTop:"1rem" 
    }
  });

  export const SimilarItemImage = styled.img`
    width:9rem;
    height:auto;
    margin:auto;
    padding-bottom:1rem;
`
export const DetailP2 = styled.p`
    text-align:left;
    margin-left:1rem;
    padding:1rem;
`
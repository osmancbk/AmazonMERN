import React,{useContext} from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import Rating from '@material-ui/lab/Rating';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import { StyledTableCell, StyledTableRow, useStyles } from './table.style';
import AddToBasket from '../addToBasket';
import { Grid,Container } from "@material-ui/core";
import {SimilarItemImage, DetailP2} from './table.style';
import {Context} from '../../router/Router';

export default function CustomizedTables({similarProductsData, productNumber, r1, r2, r3a, r3b, r4 }) {
  const tableStyles = useStyles();
  const consumer = useContext(Context);
  return (
    <Grid>
      <Grid container className={tableStyles.imageGrid}>
        <SimilarItemImage src={similarProductsData[productNumber]?.image}></SimilarItemImage>
      </Grid>
      <Grid container className={tableStyles.titleGrid}>
        {/* <DetailP2><a onClick={()=>consumer.getDetails(similarProductsData[productNumber]?._id)} href="#">{similarProductsData[productNumber]?.title}</a></DetailP2> */}
        <DetailP2><a onClick={()=>consumer.setCurrentProductId(similarProductsData[productNumber]?._id)} href="#">{similarProductsData[productNumber]?.title}</a></DetailP2>
      </Grid>
      <AddToBasket onClick={()=>consumer.addToBasket(similarProductsData[productNumber]?._id)} />
      {/* <AddToBasket onClick={()=>console.log(similarProductsData[productNumber]?._id)} /> */}
      <TableContainer className={tableStyles.tableContainer} component={Paper}>
        <Table aria-label="customized table">
          <TableBody>
            <StyledTableRow>
              {/* <StyledTableCell component="th" scope="row">aasdasdasd</StyledTableCell> */}
              <StyledTableCell align="left"><Rating name="half-rating-read" precision={0.5} value={r1} readOnly /></StyledTableCell>
            </StyledTableRow>
            <StyledTableRow >
              <StyledTableCell className={tableStyles.price} align="left"><b>${r2}</b></StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell className={tableStyles.shipping} align="left"><b>{r3a}</b><a href="#">{r3b}</a></StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell align="left">{r4}</StyledTableCell>
            </StyledTableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
}
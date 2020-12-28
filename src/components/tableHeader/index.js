import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import { StyledTableCell, StyledTableRow, useStyles } from '../table/table.style';
import { Grid } from "@material-ui/core";

export default function CustomizedTables() {
  const tableStyles = useStyles();
  return (
    <Grid className={tableStyles.headerContainer}>
      <TableContainer component={Paper}>
        <Table aria-label="customized table">
          <TableBody>
            <StyledTableRow>
              <StyledTableCell className={tableStyles.rating} align="left"><b>Customer Rating</b></StyledTableCell>
            </StyledTableRow>
            <StyledTableRow >
              <StyledTableCell align="left"><b>Price</b></StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell className={tableStyles.shipping} align="left"><b>Shipping</b></StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell align="left"><b>Sold By</b></StyledTableCell>
            </StyledTableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
}
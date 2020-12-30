import { makeStyles } from "@material-ui/core/styles";
import styled from 'styled-components';


//------UI------//
export const styles = makeStyles((theme) => ({
    root: {
        [theme.breakpoints.down('xl')]: {
            // backgroundColor: 'pink',
            textAlign: 'center',
            position: 'relative',    
            marginBottom: 70,
            marginTop: -380,

          },
        [theme.breakpoints.down('lg')]: {
            textAlign: 'center',
            position: 'relative',    
            marginBottom: 70,
            marginTop: -280,

          },

        [theme.breakpoints.down('md')]: {
            textAlign: 'center',
            position: 'relative',    
            marginBottom: 70,
            marginTop: -250,

          },
          [theme.breakpoints.down('sm')]: {
            textAlign: 'center',
            position: 'relative',
            marginBottom: 70,
            marginTop: -170
            ,
          },

          [theme.breakpoints.down('xs')]: {
            textAlign: 'center',
            position: 'relative',
            marginBottom: 70,
            marginTop: -100,
          },

    },
    grid: {
        marginBottom: 20,
    }
}));


//------Styled Comp------//
export const Box = styled.div`
      font-weight: bold;
      position: relative;
      margin-bottom: 7px;
      background-color: #F5F6F6;
      padding: 10px;
      color: #0F1111;

`;
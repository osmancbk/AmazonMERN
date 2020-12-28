import styled from 'styled-components';
import { makeStyles } from "@material-ui/core/styles";
import "slick-carousel/slick/slick.css";//*
import "slick-carousel/slick/slick-theme.css";//*



export const styles = makeStyles(() => ({
  root: {
  padding:'0px',

  },

}));

// export const Wrapper = styled.div`
// width: 100%;
// z-index: -1; 
// position: absolute;
//  top: 59px;
// `;

export const StyledImage = styled.img`
width: 100%;
height: 100%;
`;

export const Page = styled.div`
 width: 100%;
  /* margin-bottom: -90px; */
  mask-image: linear-gradient(to top, transparent 20%, black 55%);
 
`;


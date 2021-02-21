import React from 'react';
import Logo from '../../../resources/images/loader.svg';
import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const StyledLogo = styled(Logo)`
animation: ${rotate} infinite 20s linear;
display:block;

`
//margin:auto;


function Loading(props) {
    return (
      <>
        <StyledLogo height={40} />
        <div style={{
          marginTop: '30px',
          color: '#aaaaaa'
        }}> 
          {props.message || 'Please wait...'}
        </div>
      </>
    )
}

export default Loading;
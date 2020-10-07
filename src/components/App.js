import React from 'react';
import Generating from './Generating/Generating';
import Encrypt from './Encrypt/Encrypt';
import Decrypt from './Decrypt/Decrypt';
import styled from 'styled-components'
function App() {
  return (
    <StyledComponents className="App">
        <Generating/>
        <Encrypt/>
        <Decrypt/>
    </StyledComponents>
  );
}

export default App;


const StyledComponents = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;

  @media(min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
`
import styled from 'styled-components';

export const StyledApp = styled.div`
  text-align: center;
  display: inline-block;
  min-width: 100%;
`;

export const StyledAppMain = styled.div`
  background-color: #282c34;
  min-height: 94vh;
  display: inline-flex;
  min-width: calc(100% - 6vh);
  font-size: calc(10px + 2vmin);
  color: white;
  padding: 3vh;
  
  & > * + * {
    margin-left: 1vw;
  }
`;
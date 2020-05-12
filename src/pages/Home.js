import React from "react";
import Button from "react-bootstrap/Button";
import styled from 'styled-components';

const Wrapper = styled.div`
    padding: 4em;
    background: papayawhip;
  `;
  const StyledButton = styled(Button)`
	font-size: 1em;
	margin: 1em;
	padding: 0.25em 1em;
    border-radius: 3px;
    outline: none;
    &:focus, &:active {
        outline: none !important;
        box-shadow: none;
     }
`;
  
const Home = () => {
  
  return (
    <Wrapper>
      <h1>Home Page</h1>
      <StyledButton>Heelo button</StyledButton>
    </Wrapper>
  );
};

export default Home;

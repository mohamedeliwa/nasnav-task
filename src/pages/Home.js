import React from "react";
import Button from "react-bootstrap/Button";
import styled from "styled-components";
import Controllers from "../components/Controllers";
import Header from "../components/Header";
import ShoppingByCategory from "../components/ShoppingByCategory";

const Wrapper = styled.div`
  background: #eee;
`;
const StyledButton = styled(Button)`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  outline: none;
  &:focus,
  &:active {
    outline: none !important;
    box-shadow: none;
  }
`;

const Home = () => {
  return (
    <Wrapper>
      <Controllers />
      <Header />
      <ShoppingByCategory />
    </Wrapper>
  );
};

export default Home;

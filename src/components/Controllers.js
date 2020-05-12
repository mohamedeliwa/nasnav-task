import React from "react";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Paymentbar from "./Paymentbar";
import Searchbar from "./Searchbar";
import Navbar from "./Navbar";


// Styles using Styled-Component
const Wrapper = styled(Container)`
  height: 224px;
//   background-color: #0056a8;
//   display: flex;
//   align-items: center;
padding: 0;
`;

const Controllers = () => {
  return (
    <Wrapper fluid>
      <Paymentbar />
      <Searchbar />
      <Navbar />
    </Wrapper>
  );
};

export default Controllers;

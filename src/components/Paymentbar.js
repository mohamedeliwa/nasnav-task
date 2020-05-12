import React from "react";
import Container from "react-bootstrap/Container";
import { Image } from "react-bootstrap";
import styled from "styled-components";
import mastercard1 from "../assets/images/controller/mastercard1.png";
import mastercard2 from "../assets/images/controller/mastercard2.png";
import visa from "../assets/images/controller/visa.png";
import { TiLocationOutline } from "react-icons/ti";
import { IoIosTimer } from "react-icons/io";
import { FiPhone } from "react-icons/fi";


// Styles using Styled-Component
const Wrapper = styled(Container)`
  height: 58px;
  background-color: #0056a8;
  display: flex;
  align-items: center;
`;

const StyledImage = styled(Image)`
  width: 42px;
  height: 25px;
  object-fit: contain;
  margin: 5px;
  cursor: pointer;
`;

const StyledSelect = styled.select`
  border: none;
  background-color: #0056a8;
  font-family: Comfortaa;
  font-size: 15px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.73;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;
  margin-left: 10px;
  cursor: pointer;
  &:focus,
  &:active {
    outline: none !important;
    box-shadow: none;
  }
  & option {
    background-color: #ffffff;
    color: #0056a8;
  }
`;

const StyledButton = styled.button`
  background-color: #0056a8;
  color: #fff;
  border: none;
  font-family: Comfortaa;
  font-size: 15px;
  font-weight: 600;
  &:focus,
  &:active {
    background-color: #0056a8;
    border: none;

    outline: none !important;
    box-shadow: none;
  }
`;

const Paymentbar = () => {
  return (
    <Wrapper fluid>
    <Container>
      <StyledImage src={mastercard1} rounded className="" />
      <StyledImage src={mastercard2} rounded className="" />
      <StyledImage src={visa} rounded className="" />

      <StyledSelect className="" id="" defaultValue="1">
        <option value="1">EGP</option>
        <option value="2">EUR</option>
        <option value="3">USD</option>
      </StyledSelect>
    </Container>
    <Container>
    <StyledButton><TiLocationOutline style={{fontSize: "20px"}} /> Stores</StyledButton>
    <StyledButton><IoIosTimer style={{fontSize: "20px"}} /> WorksTime</StyledButton>
    <StyledButton><FiPhone style={{fontSize: "20px"}} /> Contact</StyledButton>
  </Container>
  </Wrapper>
  );
};

export default Paymentbar;

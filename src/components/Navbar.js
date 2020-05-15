import React from "react";
import Container from "react-bootstrap/Container";
import styled from "styled-components";
import { GoPrimitiveDot } from "react-icons/go";
import { FiSmartphone } from "react-icons/fi";
import { IoIosBasket, IoIosShirt } from "react-icons/io";
import { MdTagFaces } from "react-icons/md";
import { FiStar } from "react-icons/fi";
import {
  GiEarthAfricaEurope,
  GiPizzaSlice,
  GiStethoscope,
} from "react-icons/gi";

// Styles using Styled-Component
const Wrapper = styled(Container)`
  min-height: 58px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const StyledButton = styled.button`
  background-color: #ffffff;
  border: none;
  margin: auto 10px;
  font-family: Comfortaa;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.63;
  letter-spacing: normal;
  text-align: left;
  color: #545e5f;
  &:focus,
  &:active {
    outline: none !important;
    box-shadow: none;
  }
`;

const Navbar = () => {
  return (
    <Wrapper fluid>
      <StyledButton>
        <FiSmartphone style={{color: "#f62434"}}/> Smart Phone
      </StyledButton>
      <StyledButton>
        <IoIosBasket style={{color: "#f62434"}}/> SuperMarket
      </StyledButton>
      <StyledButton>
        <MdTagFaces style={{color: "#f62434"}}/> Babys
      </StyledButton>
      <StyledButton>
        <FiStar style={{color: "#f62434"}}/> Girls
      </StyledButton>
      <StyledButton>
        <GiStethoscope style={{color: "#f62434"}}/> Health Care
      </StyledButton>
      <StyledButton>
        <GiEarthAfricaEurope style={{color: "#f62434"}}/> Baby World
      </StyledButton>
      <StyledButton>
        <IoIosShirt style={{color: "#f62434"}}/> Clothes
      </StyledButton>
      <StyledButton>
        <GiPizzaSlice style={{color: "#f62434"}}/> Food
      </StyledButton>
      <StyledButton>
        <GoPrimitiveDot style={{color: "#0056a8", fontSize: "15px"}}/>
        <GoPrimitiveDot style={{color: "#0056a8", fontSize: "15px"}}/>
        <GoPrimitiveDot style={{color: "#0056a8", fontSize: "15px"}}/>
      </StyledButton>
    </Wrapper>
  );
};

export default Navbar;

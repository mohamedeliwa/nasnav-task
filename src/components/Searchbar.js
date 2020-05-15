import React from "react";
import Logo from "../assets/images/controller/logo.jpg";
import styled from "styled-components";
import { InputGroup, FormControl, Container, Image } from "react-bootstrap";
import { MdSearch } from "react-icons/md";
import { FiShoppingCart } from "react-icons/fi";
import { AiOutlineUserAdd } from "react-icons/ai";
const Wrapper = styled(Container)`
  height: 102px;
  border: solid 1px #e8e8e8;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  @media (max-width: 745px) {
    flex-direction: column;
    height: 180px;
    padding: 15px;
    justify-content: space-between;
  }
  @media (max-width: 524px) {
    height: 220px;
  }
`;

const StyledInputGroup = styled(InputGroup)`
  width: 738px;
  height: 49px;
  border-radius: 5px;
  border: solid 1px rgba(0, 0, 0, 0.09);
  background-color: #ffffff;
  & DropdownButton {
    height: 49px;
  }
  @media (max-width: 745px) {
    max-width: 500px;
  }
  @media (max-width: 524px) {
    max-width: 350px;
  }
  @media (max-width: 370px) {
    max-width: 300px;
  }
 
`;

const StyledSelect = styled.select`
  border: none;
  padding: 10px;
  font-family: Comfortaa;
  font-size: 15px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.47;
  letter-spacing: normal;
  text-align: left;
  color: #0056a8;
  &:focus,
  &:active {
    outline: none !important;
    box-shadow: none;
  }
  @media (max-width: 700px) {
    font-size: 12px;
  }
  @media (max-width: 370px) {
    font-size: 10px;
  }
`;

const StyledSearch = styled(FormControl)`
  border: none;
  border-left: solid 1px rgba(0, 0, 0, 0.09) !important;
  &:focus,
  &:active {
    outline: none !important;
    box-shadow: none;
  }
 
`;

const StyledButton = styled.button`
  color: #fff;
  height: 49px;
  width: ${(props) => props.width};
  border: none;
  border-radius: 5px;
  box-shadow: 0px 1px 4px 0 rgba(0, 0, 0, 0.21);
  //   background-color: #0056a8;
  background-color: ${(props) => props.bg};
  font-family: Comfortaa;
  font-size: 15px;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.47;
  letter-spacing: normal;
  margin-left: 6px;
  &:focus,
  &:active {
    outline: none !important;
    box-shadow: none;
  }
  @media (max-width: 920px) {
    .button-text {
      display: none;
    }
  }
`;

const Searchbar = () => {
  return (
    <Wrapper fluid>
      <Image src={Logo} rounded />
      <StyledInputGroup className="">
        <InputGroup.Prepend>
          <StyledSelect className="" id="" defaultValue="1">
            <option value="1">All Category</option>
            <option value="2">Category 2</option>
            <option value="3">Category 3</option>
          </StyledSelect>
        </InputGroup.Prepend>
        <StyledSearch
          type="search"
          placeholder="Search"
          style={{ height: "100%" }}
        />
      </StyledInputGroup>
      <Container fluid style={{padding: 0, maxWidth: "285px", margin: 0}}>
        <StyledButton width="52px" bg="#0056a8" style={{ fontSize: "18px" }}>
          <MdSearch />
        </StyledButton>
        <StyledButton width="52px" bg="#f62434" style={{ fontSize: "18px" }}>
          <FiShoppingCart />
        </StyledButton>
        <StyledButton width="52px" bg="#2e353c" style={{ fontSize: "18px" }}>
          5
        </StyledButton>
        <StyledButton width="105px" bg="#0056a8">
          <AiOutlineUserAdd style={{ fontSize: "18px" }} />{" "}
          <span className="button-text">Login</span>
        </StyledButton>
      </Container>
    </Wrapper>
  );
};

export default Searchbar;

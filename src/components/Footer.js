import React from "react";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import logoimage from "../assets/images/footer/Logo.png";
import { GoLocation } from "react-icons/go";
import { FaRegEnvelope } from "react-icons/fa";
import paymentimage from "../assets/images/footer/payments.png";
import nasnavImage from "../assets/images/footer/nasnav.png";
const Wrapper = styled(Container)`
  height: 423px;
  // background-color: #eee;
  padding: 0;
`;
const Head = styled(Container)`
  height: 323px;
  // background-color: red;
  display: flex;
  padding: 0;
`;
const Tail = styled(Container)`
  height: 100px;
  // background-color: yellow;
  display: flex;
  align-items: center;
  justify-content: space-around;
  p {
    font-family: Comfortaa;
    font-size: 17px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.82;
    letter-spacing: normal;
    color: #232828;
    img {
      width: 107px;
      height: 20px;
      margin-left: 5px;
    }
  }
  img {
    width: 217px;
    height: 36px;
  }
`;
const Navigation = styled(Container)`
  height: 323px;
  // background-color: lightgreen;
  flex-basis: 48%;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;
const Reach = styled(Container)`
  height: 323px;
  // background-color: lightblue;
  flex-basis: 62%;
  padding: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const Logo = styled(Container)`
  // background-color: green;
  flex-basis: 50%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  img {
    width: 200px;
    height: 75px;
    object-fit: contain;
    margin-right: 170px;
  }
`;
const Links = styled(Container)`
  flex-basis: 50%;

  // background-color: grey;
  display: flex;
  justify-content: center;
  align-items: center;
  ul {
    list-style: none;
    text-align: left;
    font-family: Comfortaa;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.94;
    letter-spacing: normal;
    text-align: left;
    color: #545e5f;
    li {
      cursor: pointer;
    }
  }
`;

const Subscribe = styled(Container)`
  width: 365px;
  height: 145.9px;
  border-radius: 2px;
  border: solid 1px #e6ecef;
  background-color: #f6f8f9;
  margin: 0 0 -80px 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  div {
    font-family: Comfortaa;
    font-size: 20px;
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: 0.85;
    letter-spacing: normal;
    text-align: left;
    color: #445252;
    padding-bottom: 29px;
  }
  form {
    display: flex;
    padding: 10px;
    height: 51px;
    border-radius: 2px;
    box-shadow: 0px 1px 4px 0 rgba(0, 0, 0, 0.21);
    background-color: #ffffff;
    font-family: Comfortaa;
    font-size: 15px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: normal;
    text-align: left;
    color: #7e7272;
    input {
      border: none;
      background-color: #ffffff;
      &:focus,
      &:active {
        outline: none !important;
        box-shadow: none;
      }
    }
  }
`;
const Find = styled(Container)`
  width: 365px;
  height: 145.9px;
  border-radius: 2px;
  border: solid 1px #e6ecef;
  background-color: #f6f8f9;
  margin: 0 0 -80px 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  div {
    font-family: Comfortaa;
    font-size: 20px;
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: 0.85;
    letter-spacing: normal;
    text-align: left;
    color: #445252;
    padding-bottom: 29px;
  }
  button {
    border: none;
    width: 263.8px;
    height: 51px;
    border-radius: 2px;
    box-shadow: 0px 1px 4px 0 rgba(0, 0, 0, 0.21);
    background-color: #0053a1;
    font-family: Comfortaa;
    font-size: 15px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: normal;
    color: #ffffff;
    &:focus,
    &:active {
      outline: none !important;
      box-shadow: none;
    }
  }
`;

const Footer = () => {
  return (
    <Wrapper fluid>
      <Head fluid>
        <Navigation>
          <Logo>
            <img src={logoimage} alt="Logo" />
          </Logo>
          <Links>
            <ul>
              <li>Smart Phone</li>
              <li>SuperMarket</li>
              <li>Babys</li>
            </ul>
            <ul>
              <li>Girls</li>
              <li>Health Care</li>
              <li>Baby World</li>
            </ul>
            <ul>
              <li>Baby World</li>
              <li>Clothes</li>
              <li>Food</li>
            </ul>
          </Links>
        </Navigation>
        <Reach>
          <Find>
            <div>
              <GoLocation style={{ color: "#0053a1" }} />{" "}
              <span style={{ fontWeight: "bold", color: "#232828" }}>
                Find a
              </span>{" "}
              carrefour store
            </div>
            <button>Find Store</button>
          </Find>
          <Subscribe>
            <div>
              <FaRegEnvelope style={{ color: "#f6303f" }} />{" "}
              <span style={{ fontWeight: "bold", color: "#232828" }}>
                Subscribe to
              </span>{" "}
              carrefour
            </div>
            <form onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Your Email" />
              <input
                type="submit"
                value="Subscribe"
                style={{ color: "#f6303f" }}
              />
            </form>
          </Subscribe>
        </Reach>
      </Head>
      <Tail fluid>
        <p>© Careefour Store . Inc</p>
        <img src={paymentimage} alt="accepted payments" />
        <p>
          Powerd by <img src={nasnavImage} alt="developer" />
        </p>
      </Tail>
    </Wrapper>
  );
};

export default Footer;

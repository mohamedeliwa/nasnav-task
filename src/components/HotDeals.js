import React, { useState } from "react";
import styled from "styled-components";
import { Container, Tabs, Tab } from "react-bootstrap";
import TabContent from "./TabContent";
import image1 from "../assets/images/hotdeals/Layer_35.png";
import image2 from "../assets/images/hotdeals/Layer_43.png";
import image3 from "../assets/images/hotdeals/Layer_37.png";
const Wrapper = styled(Container)`
  //   height: 416px;

  background-color: #fff;
  //   background-color: grey;
  padding: 0;
  padding-top: 64px;
  //   display: flex;
  //   flex-direction: column;
  //   align-items: center;
  position: relative;
  overflow: hidden;
  //   justify-content: center;
`;
const Header = styled(Container)`
  //   background-color: #eee;
  max-width: 1235px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  header {
    // background-color: yellow;
    h3 {
      font-family: Comfortaa;
      font-size: 22px;
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.68;
      letter-spacing: normal;
      text-align: left;
      color: #303637;
    }
    p {
      font-family: Comfortaa;
      font-size: 18px;
      font-weight: 300;
      font-stretch: normal;
      font-style: normal;
      line-height: 2.06;
      letter-spacing: normal;
      text-align: left;
      color: #f62434;
      margin-top: -10px;
    }
  }
  nav {
    // background-color: red;
    width: 610px;
    display: inline-flex;
    justify-content: space-between;

    p {
      font-family: Comfortaa;
      font-size: 16px;
      font-weight: 300;
      font-stretch: normal;
      font-style: normal;
      line-height: 2.31;
      letter-spacing: normal;
      text-align: left;
      color: #303637;
      cursor: pointer;
    }
    .active {
      border-bottom: 3px solid #0056a8;
    }
  }
`;
const StyledTabs = styled(Tabs)`
  //   display: flex;
  //   align-items: center;
  //   justify-content: flex-end;
  border: none;
  background-color: white;

  a {
    display: none;
  }
`;
const Products = styled(Container)`
  // background-color: #eee;
`;
const Product = styled(Container)`
  // background-color: yellow;
  width: 408px;
  height: 455px;
  display: inline-block;
  margin: 34px;
  padding: 0;
  position: relative;
  img {
    width: 100%;
    height: 100%;
  }
  section {
    position: absolute;
    bottom: 34px;
    left: 117px;
    h4 {
      font-family: Comfortaa;
      font-size: 22px;
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.68;
      letter-spacing: normal;
      text-shadow: 0 0 13px rgba(0, 0, 0, 0.96);
      color: #ffffff;
    }
    P {
      font-family: Comfortaa;
      font-size: 16px;
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: 2.31;
      letter-spacing: normal;
      color: #f62434;
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;
const HotDeals = () => {
  const [key, setKey] = useState("all");

  const changeTabs = (e) => {
    const tabs = document.querySelectorAll(".tabsnav");
    tabs.forEach((tab) => tab.classList.remove("active"));
    setKey(e.target.id);
    e.target.classList.add("active");
  };
  return (
    <Wrapper fluid>
      <Header>
        <header>
          <h3>Hot Deals</h3>
          <p>New Hot Deals Now </p>
        </header>
        <nav>
          <p id="all" className="active tabsnav" onClick={changeTabs}>
            All
          </p>
          <p id="supermarket" className="tabsnav" onClick={changeTabs}>
            Super Market
          </p>
          <p id="babyworld" className="tabsnav" onClick={changeTabs}>
            BabyWorld
          </p>
          <p id="tv" className="tabsnav" onClick={changeTabs}>
            TV
          </p>
          <p id="smartphones" className="tabsnav" onClick={changeTabs}>
            Smart Phones
          </p>
        </nav>
      </Header>
      <StyledTabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
      >
        <Tab eventKey="all" title="All">
          <TabContent />
        </Tab>
        <Tab eventKey="supermarket" title="Super Market">
          <TabContent />
        </Tab>
        <Tab eventKey="babyworld" title="BabyWorld">
          <TabContent />
        </Tab>
        <Tab eventKey="tv" title="TV">
          <TabContent />
        </Tab>
        <Tab eventKey="smartphones" title="Smart Phones">
          <TabContent />
        </Tab>
      </StyledTabs>
      <Products fluid>
        <Product>
          <img src={image1} />
          <section>
            <h4>Sports Products</h4>
            <p>SHOP NOW</p>
          </section>
        </Product>
        <Product>
          <img src={image2} />
          <section>
            <h4>Food Products</h4>
            <p>SHOP NOW</p>
          </section>
        </Product>
        <Product>
          <img src={image3} />
          <section>
            <h4>Smart Products</h4>
            <p>SHOP NOW</p>
          </section>
        </Product>
      </Products>
    </Wrapper>
  );
};

export default HotDeals;

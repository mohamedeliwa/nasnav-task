import React, { useState } from "react";
import { Container, Tabs, Tab } from "react-bootstrap";
import styled from "styled-components";
import TabContent from "./TabContentMultiRows";

const Wrapper = styled(Container)`
  width: 1676px;
  height: 1284px;
  padding: 0;
  padding-top: 64px;

  position: relative;
//   overflow: hidden;

  border: solid 1px #e6ecef;
  background-color: #f6f8f9;
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

const OurProducts = () => {
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
          <h3>Our Products</h3>
          <p>Browse our fascinating sections!</p>
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
    </Wrapper>
  );
};

export default OurProducts;

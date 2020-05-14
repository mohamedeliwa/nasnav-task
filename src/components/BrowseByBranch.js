import React from "react";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import image1 from "../assets/images/Branches/Layer_23.png";
import image2 from "../assets/images/Branches/Layer_24.png";
import image3 from "../assets/images/Branches/Layer_25.png";
import image4 from "../assets/images/Branches/Layer_26.png";
import image5 from "../assets/images/Branches/Layer_360.png";
const Wrapper = styled(Container)`
  height: 416px;
  background-color: #f6f8f9;
  //   background-color: #eee;
  //   padding: 0;
  //   display: flex;
  //   flex-direction: column;
  //   align-items: center;
  position: relative;
  overflow: hidden;
  //   justify-content: center;
`;
const Header = styled(Container)`
  //   background-color: lightyellow;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 61px;

  h3 {
    font-family: Comfortaa;
    font-size: 22px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 0.73;
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
    line-height: 1;
    letter-spacing: 0.72px;
    text-align: left;
    color: #f62434;
  }
`;
const Branches = styled(Container)`
  width: 77%;
  //   background: yellow;
  display: flex;
  align-items: center;
  justify-content: space-around;
  
  margin-top: 59px;
`;

const Branch = styled(Container)`
  width: 298px;
  height: 181px;
  text-shadow: 0px 5px 8px rgba(0, 0, 0, 0.75);
  font-family: Cairo;
  font-size: 30px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.53;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;
  background-image: url(${(props) => props.image});
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;
const Image360 = styled.img`
  //   width: 283px;
  //   height: 239px;

  position: absolute;
  top: -70px;
  right: -1px;
  z-index: 1;
`;
const BrowseByBranch = () => {
  return (
    <Wrapper fluid>
      <Image360 src={image5} />

      <Header>
        <h3>BROWSE BY BRANCH</h3>
        <p>Choose the branch closest to you</p>
      </Header>
      <Branches fluid>
        <Branch image={image1}>
          <p>City Stars</p>
        </Branch>
        <Branch image={image2}>
          <p>City Stars</p>
        </Branch>
        <Branch image={image3}>
          <p>City Stars</p>
        </Branch>
        <Branch image={image4}>
          <p>City Stars</p>
        </Branch>
      </Branches>
    </Wrapper>
  );
};

export default BrowseByBranch;

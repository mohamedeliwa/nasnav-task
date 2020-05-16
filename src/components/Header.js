import React, { useState } from "react";
import { Container, Carousel, Image } from "react-bootstrap";
import styled from "styled-components";
import Slide1 from "../assets/images/header/slide1.jpg";
import Slide2 from "../assets/images/header/slide2.jpg";
import { FaAngleRight } from "react-icons/fa";
// Styles using Styled-Component
const Wrapper = styled(Container)`
  max-height: 474px;

  background-color: #ffffff;
  padding: 0;
  position: relative;
  //   display: flex;
  //   align-items: center;
  //   justify-content: center;
`;

const StyledCarousel = styled(Carousel)`
  // height: 474px;
  max-height: 474px;

  overflow: hidden;
`;

const StyledImage = styled(Image)`
  // max-height: 474px;
  // margin-bottom: 100px;
  // background-image: url(Slide2);
`;

const StyledCaption = styled(Carousel.Caption)`
  position: absolute;
  left: 1px;
  top: 94px;
  max-width: 722px;
  max-height: 312px;
  box-shadow: 0px 1px 4px 0 rgba(0, 0, 0, 0.21);
  background-color: #ffffff;
  padding: 36px 75px 36px 117px;
  border-bottom: solid 8px #f62434;
  h3 {
    font-family: Comfortaa;
    font-size: 27px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.44;
    letter-spacing: normal;
    text-align: left;
    color: #303637;
    span {
      color: #0056a8;
    }
  }
  p {
    font-family: Comfortaa;
    font-size: 17px;
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.65;
    letter-spacing: normal;
    text-align: left;
    color: #4a5056;
  }
  div {
    width: 60px;
    height: 60px;
    box-shadow: 0px 1px 4px 0 rgba(0, 0, 0, 0.21);
    background-color: #0056a8;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    font-weight: 400;
    position: absolute;
    right: 26px;
    bottom: 36px;
    cursor: pointer;
  }
  @media (max-width: 1200px) {
    max-width: 622px;
    padding: 36px 75px 26px 75px;
    div {
      right: 20px;
      bottom: 10px;
    }
  }
  @media (max-width: 1020px) {
    max-width: 522px;
    padding: 36px 75px 36px 36px;
  }
  @media (max-width: 797px) {
    max-width: 422px;
    max-height: 250px;
    h3 {
      font-size: 23px;
      line-height: normal;
    }
    P {
      font-size: 16px;
    }
    padding: 26px 46px 26px 26px;
  }
  @media (max-width: 575px) {
    max-width: 415px;
    padding: 20px 46px 26px 10px;
    h3 {
      font-size: 20px;
      line-height: normal;
      // font-weight: 400;
    }
    P {
      font-size: 16px;
      line-height: 1.2;
    }
  }
  @media (max-width: 505px) {
    div {
      width: 40px;
      height: 40px;
    }
  }
  @media (max-width: 482px) {
    padding: 10px 36px 5px 5px;
    h3 {
      font-size: 18px;
    }
    P {
      font-size: 15px;
    }
    div {
      right: 5px;
      bottom: 5px;
    }
  }
  @media (max-width: 449px) {
    max-height: 70px;
    top: 190px;
    p {
      display: none;
    }
  }
  @media (max-width: 444px) {
    padding: 5px 5px 5px 5px;
    min-height: 40px;
    top: 170px;
    h3 {
      font-size: 12px;
      br {
        display: none;
      }
    }
    div {
      width: 25px;
      height: 25px;
      top: 1px;
      font-size: 25px;
      color: #0056a8;
      background: #ffffff;
      box-shadow: none;
    }
  }
  @media (max-width: 359px) {
    padding: 5px 50px 5px 5px;
    top: 150px;
  }
  @media (max-width: 326px) {
    top: 120px;
  }
`;
const Indicators = styled.div`
  display: inline-flex;
  position: absolute;
  right: 68px;
  bottom: 64px;

  @media (max-width: 797px) {
    right: 38px;
    bottom: 40px;
  }

  @media (max-width: 715px) {
    bottom: 60px;
  }
  @media (max-width: 682px) {
    bottom: 90px;
  }
  @media (max-width: 638px) {
    right: 20px;
    top: 10px;
  }
`;

const Indicator = styled.div`
  width: 22px;
  height: 22px;
  box-shadow: 0px 1px 4px 0 rgba(0, 0, 0, 0.21);
  background-color: ${(props) => (props.active ? "#f62434" : "#ffffff")};
  border-radius: 50%;
  margin: 3px;
  cursor: pointer;
`;

const Header = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (e) => {
    const ind = document.querySelectorAll(".ind");
    ind.forEach((ind) => {
      if (ind.id !== e.target.id) {
        return (ind.style.background = "#fff");
      }
      ind.style.background = "#f62434";
    });
    e.target.style.background = "#f62434";
    switch (e.target.id) {
      case "ind-1":
        setIndex(0);
        break;
      case "ind-2":
        setIndex(1);
        break;
      case "ind-3":
        setIndex(2);
        break;
      default:
        setIndex(0);
        break;
    }
  };
  return (
    <Wrapper fluid>
      <StyledCarousel activeIndex={index} controls={false} indicators={false}>
        <Carousel.Item>
          <StyledImage
            className="d-block w-100"
            src={Slide2}
            alt="First slide"
            // fluid
          />
          <StyledCaption>
            <h3>
              <span>FAST FOOD</span> ON CARREFOUR <br />
              HERE NOW
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
            </p>
            <div>
              <FaAngleRight />
            </div>
          </StyledCaption>
        </Carousel.Item>

        <Carousel.Item>
          <StyledImage
            className="d-block w-100"
            src={Slide1}
            alt="Second slide"
          />
          <StyledCaption>
            <h3>
              <span>FAST FOOD</span> ON CARREFOUR <br />
              HERE NOW
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
            </p>
            <div>
              <FaAngleRight />
            </div>
          </StyledCaption>
        </Carousel.Item>

        <Carousel.Item>
          <StyledImage
            className="d-block w-100"
            src={Slide2}
            alt="Third slide"
          />
          <StyledCaption>
            <h3>
              <span>FAST FOOD</span> ON CARREFOUR <br />
              HERE NOW
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
            </p>
            <div>
              <FaAngleRight />
            </div>
          </StyledCaption>
        </Carousel.Item>
      </StyledCarousel>
      <Indicators>
        <Indicator
          className="ind"
          id="ind-1"
          onClick={handleSelect}
          active={true}
        />
        <Indicator
          className="ind"
          id="ind-2"
          onClick={handleSelect}
          active={false}
        />
        <Indicator
          className="ind"
          id="ind-3"
          onClick={handleSelect}
          active={false}
        />
      </Indicators>
    </Wrapper>
  );
};

export default Header;

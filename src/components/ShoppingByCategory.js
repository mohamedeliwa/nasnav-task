import React from "react";
import { Container, Image } from "react-bootstrap";
import styled from "styled-components";
import Slider from "react-slick";
import image1 from "../assets/images/shoppingbycategory/Layer_9.png";
import image2 from "../assets/images/shoppingbycategory/Layer_10.png";
import image3 from "../assets/images/shoppingbycategory/Layer_11.png";
import image4 from "../assets/images/shoppingbycategory/Layer_12.png";
import image5 from "../assets/images/shoppingbycategory/Layer_13.png";
import image6 from "../assets/images/shoppingbycategory/Layer_14.png";
import { MdDirectionsBike } from "react-icons/md";
import { GiCutDiamond } from "react-icons/gi";
import { FaRegCreditCard, FaRegCompass } from "react-icons/fa";
const sliderImagesArr = [
  {
    path: image1,
    top: "35px",
    left: "38px",
  },
  {
    path: image2,
    top: "26px",
    left: "24px",
  },
  {
    path: image3,
    width: "164px",
    height: "164px",
    top: "12px",
    left: "38px",
  },
  {
    path: image6,
    width: "250px",
    height: "118px",
    top: "50px",
    left: "0px",
    bg: "#f62434",
  },
  {
    path: image4,
    width: "180px",
    height: "134px",
    top: "25px",
    left: "11px",
  },
  {
    path: image5,
    width: "113px",
    height: "133px",
    top: "31px",
    left: "23px",
  },
];

const Wrapper = styled(Container)`
  // height: 468px;
  background-color: #ffffff;
  //  background-color: #eee;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  .slick-next,
  .slick-prev {
    top: 40%;
    &:before{
     color: #dae9f0;  
      font-size: 30px;
    }
  }
  .slick-next{
    right: -25px;
  }
  .slick-prev{
    left: -30px;
  }
  //   justify-content: center;
`;
const Header = styled(Container)`
  // background: lightgrey;
  padding-top: 61px;
  padding-left: 192.1px;

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
  }
  @media (max-width: 649px){
    padding-left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
  }
  @media (max-width: 335px){
    padding-right: 0;
     p {
      font-size: 17px;
     }
  }
`;
const StyledSlider = styled(Slider)`
  //   background-color: grey;
  width: 85%;
  margin-top: 52px;
`;
const SliderCard = styled(Container)`
  background: white;
  section {
    width: 164px;
    height: 164px;
    display: inline-block;
    background-color: ${(props) =>
      props.bg ? props.bg : "#f6f8f9"}; //#f6f8f9;
    border-radius: 50%;
    overflow: hidden;
    position: relative;
  }
  img {
    width: ${(props) => (props.width ? props.width : null)};
    hegiht: ${(props) => (props.height ? props.height : null)};
    // background: green;
    display: inline;
    position: absolute;
    top: ${(props) => props.top}; /*35px;*/
    left: ${(props) => props.left}; //38px;
  }
  p {
    // background: red;
  }
  &:focus,
  &:active {
    outline: none !important;
    box-shadow: none;
  }
`;
const Features = styled(Container)`
  // background-color: #eee;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 85%;
  margin-top: 52px;
  margin-bottom: 52px;
  padding: 0;

  @media (max-width: 1649px){
    width: 100%;
  }
  @media (max-width: 1000px){
    flex-wrap: wrap;
  }
`;
const Feature = styled(Container)`
padding: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  section {
    font-size: 30px;
    color: #fff;
    width: 76px;
    height: 76px;
    box-shadow: 0px 1px 4px 0 rgba(0, 0, 0, 0.21);
    background-color: #0056a8;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  span {
    font-family: Comfortaa;
    font-size: 17px;
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.59;
    letter-spacing: normal;
    text-align: left;
    color: #586162;
    padding-top: 15px;
    margin-left: -50px;
    h3 {
      font-size: 20px;
      font-weight: bold;
      color: #303637;
    }
  }
  @media (max-width: 1393px){
    justify-content: center;
    span{
      margin: 0;
    }
  }
  @media (max-width: 1195px){
    section {
      width: 66px;
    height: 66px;
    }
    span {
      font-size: 16px;
      line-height: 1.5;
    }
  }
  @media (max-width: 1000px){
    flex-basis: 50%;
  }
  @media (max-width: 538px){
    flex-basis: 100%;
  }
`;

const ShoppingByCategory = () => {
  //setting for slider
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 100,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
     {
      breakpoint: 1280,
      settings: {
        slidesToShow: 5,
      }
     },
     {
      breakpoint: 1075,
      settings: {
        slidesToShow: 4,
      }
     },
     {
      breakpoint: 856,
      settings: {
        slidesToShow: 3,
      }
     },
     {
      breakpoint: 646,
      settings: {
        slidesToShow: 2,
      }
     },
     {
      breakpoint: 433,
      settings: {
        slidesToShow: 1,
      }
     }
    ]
  };

  const SliderCards = sliderImagesArr.map((image, i) => {
    return (
      <SliderCard
        top={image.top}
        left={image.left}
        bg={image.bg || null}
        width={image.width}
        height={image.height}
        key={i}
      >
        <section>
          <Image src={image.path} alt="First slide" />
        </section>
        <p>Smart Phones</p>
      </SliderCard>
    );
  });

  return (
    <Wrapper fluid>
      <Header fluid>
        <h3>SHOPPING BY CATEGORY</h3>
        <p>online shopping for every thing</p>
      </Header>

      <StyledSlider {...settings}>
        {SliderCards} {SliderCards}
      </StyledSlider>

      <Features fluid>
        <Feature>
          <section>
            <MdDirectionsBike />
          </section>
          <span>
            <h3>FREE SHIPPING</h3>
            <p>While not exectly line</p>
          </span>
        </Feature>
        <Feature>
          <section>
            <GiCutDiamond />
          </section>
          <span>
            <h3>SAVE 50% UP</h3>
            <p>While not exectly line</p>
          </span>
        </Feature>
        <Feature>
          <section>
            <FaRegCreditCard />
          </section>
          <span>
            <h3>ONLINE PAY</h3>
            <p>While not exectly line</p>
          </span>
        </Feature>
        <Feature>
          <section>
            <FaRegCompass />
          </section>
          <span>
            <h3>TRACK ORDER</h3>
            <p>While not exectly line</p>
          </span>
        </Feature>
      </Features>
    </Wrapper>
  );
};

export default ShoppingByCategory;

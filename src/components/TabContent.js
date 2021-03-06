import React from "react";
import Slider from "react-slick";
import Container from "react-bootstrap/Container";
import styled from "styled-components";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import image1 from "../assets/images/hotdeals/Layer_17.png";
import image2 from "../assets/images/hotdeals/Layer_18.png";
import image3 from "../assets/images/hotdeals/Layer_19.png";
import image4 from "../assets/images/hotdeals/Layer_20.png";

const cardsArray = [
  {
    img: image1,
    sale: "50%",
    cPrice: "150$",
    pPrice: "190$",
    name: "Pampers Premium Care New",
    updated: "2018/00/00",
  },
  {
    img: image2,
    sale: "50%",
    cPrice: "150$",
    pPrice: "190$",
    name: "Pampers Premium Care New",
    updated: "2018/00/00",
  },
  {
    img: image3,
    sale: "50%",
    cPrice: "150$",
    pPrice: "190$",
    name: "Pampers Premium Care New",
    updated: "2018/00/00",
  },
  {
    img: image4,
    sale: "50%",
    cPrice: "150$",
    pPrice: "190$",
    name: "Pampers Premium Care New",
    updated: "2018/00/00",
  },
];
const Wrapper = styled(Container)`
    // background-color: grey;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0;
  .controls-overlay { 
    background-color: grey;
    position relative;
    width: 1258px;
    marginBottom: 20px;
    height: 0px;
    @media (max-width: 1365px){
      width: 1150px;
    }
    @media (max-width: 1246px){
      max-width: 990px;
    }
    @media (max-width: 1086px){
      width: 700px;
    }
    @media (max-width: 793px){
      width: 650px;
    }
    @media (max-width: 746px){
      width: 350px;
    }

  }
`;
const StyledSlider = styled(Slider)`
 max-width: 1258px;
// background-color: yellow;
// marginLeft: -55px;
marginBottom: 20px;
@media (max-width: 1246px){
  max-width: 990px;
}
@media (max-width: 1086px){
  max-width: 750px;
}
@media (max-width: 793px){
  max-width: 650px;
}
@media (max-width: 746px){
  max-width: 350px;
}
@media (max-width: 443px){
  marginLeft: -100px;
}
`;
const Card = styled(Container)`
  width: 298px;
  height: 491px;
  border-radius: 2px;
  border: solid 1px #e6ecef;
  background-color: #ffffff;
  padding: 0;
  .card-header {
    height: 45px;
    border: solid 1px #e6ecef;
    background-color: #f6f8f9;
    font-family: Comfortaa;
    font-size: 16px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: normal;
    color: #303637;
    span {
      color: #f62434;
    }
  }
  .card-img {
    // background: red;
    display: flex;
    justify-content: center;
    margin-top: 31px;
    img {
      width: 200px;
      height: 200px;
    }
  }
  .card-price {
    width: 99px;
    margin: auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-family: Comfortaa;
    .current-price {
      font-size: 19px;
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.95;
      letter-spacing: normal;
      text-align: left;
      color: #0056a8;
    }
    .prev-price {
      font-size: 16px;
      font-weight: normal;
      color: #7f8a95;
    }
  }
  .card-name {
    font-family: Comfortaa;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.31;
    letter-spacing: normal;
    color: #303637;
  }
  .card-select {
    font-family: Comfortaa;
    select {
      width: 170px;
      height: 52px;
      border-radius: 2px;
      border: solid 1px #e6ecef;
      background-color: #ffffff;
    }
    button {
      width: 81px;
      height: 52px;
      border-radius: 2px;
      border: solid 1px #f62434;
      background-color: #f62434;
      color: white;
      margin-left: 13px;
      &:focus,
      &:active {
        outline: none !important;
        box-shadow: none;
      }
    }
  }
  .card-updated {
    margin-top: 27px;
    border: none;
    display: flex;
    justify-content: center;

    p {
      width: 264px;
      height: 46px;
      margin: 0;
      border-radius: 2px;
      border: solid 1px #e6ecef;
      background-color: #f6f8f9;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;
const NextArrow = styled.button`
  font-size: 30px;
  width: 74.7px;
  height: 74.7px;
  border: solid 1px #e6ecef;
  background-color: #ffffff;
  display: inline-block;
  border-radius: 50%;
  position: absolute;
  top: -310px;
  right: -40px;
  color: #e6ecef;
  display: flex;
  justify-content: center;
  &:focus,
  &:active {
    outline: none !important;
    box-shadow: none;
  }
  @media (max-width: 443px){
    right: 10px;
  }
  @media (max-width: 345px){
    right: 20px;
  }
`;
const PrevArrow = styled.button`
  font-size: 30px;
  width: 74.7px;
  height: 74.7px;
  border: solid 1px #e6ecef;
  background-color: #ffffff;
  display: inline-block;
  border-radius: 100%;
  position: absolute;
  top: -310px;
  left: -20px;
  color: #e6ecef;
  display: flex;
  justify-content: center;
  &:focus,
  &:active {
    outline: none !important;
    box-shadow: none;
  }
  @media (max-width: 443px){
    left: 10px;
  }
  @media (max-width: 345px){
    left: 20px;
  }
`;

const sliderCards = cardsArray.map((card, i) => {
  return (
    <Container key={i}>
      <Card>
        <div className="card-header">
          Sale <span>${card.sale}</span>
        </div>
        <div className="card-img">
          <img src={card.img} alt="product"/>
        </div>
        <div className="card-price">
          <p className="current-price">{card.cPrice}</p>
          <p className="prev-price">{card.pPrice}</p>
        </div>
        <div className="card-name">{card.name}</div>
        <div className="card-select">
          <select name="num" id="num-select">
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
          <button>Add</button>
        </div>
        <div className="card-updated">
          <p>Last Update: {card.updated}</p>
        </div>
      </Card>
    </Container>
  );
});
const TabContent = () => {
  let slider;
  const next = () => {
    slider.slickNext();
  };
  const previous = () => {
    slider.slickPrev();
  };
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 100,
    slidesToShow: 4,
    slidesToScroll: 1,
    // nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1365,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1086,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 746,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <Wrapper fluid>
      <StyledSlider
        {...settings}
        // style={{  }}
        ref={(c) => (slider = c)}
      >
        {sliderCards}
        {sliderCards}
      </StyledSlider>
      <div className= "controls-overlay">
        <PrevArrow className="button" onClick={previous}>
          <IoIosArrowBack />
        </PrevArrow>
        <NextArrow className="button" onClick={next}>
          <IoIosArrowForward />
        </NextArrow>
      </div>
    </Wrapper>
  );
};

export default TabContent;
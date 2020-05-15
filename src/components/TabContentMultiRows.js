import React from "react";
import Slider from "react-slick";
import Container from "react-bootstrap/Container";
import styled from "styled-components";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import image1 from "../assets/images/ourproducts/Layer_27.png";
import image2 from "../assets/images/ourproducts/Layer_28.png";
import image3 from "../assets/images/ourproducts/Layer_29.png";
import image4 from "../assets/images/ourproducts/Layer_30.png";
import image5 from "../assets/images/ourproducts/Layer_31.png";
import image6 from "../assets/images/ourproducts/Layer_32.png";
import image7 from "../assets/images/ourproducts/Layer_33.png";
import image8 from "../assets/images/ourproducts/Layer_34.png";

const cardsArray = [
  {
    img: image1,
    // sale: "50%",
    cPrice: "150$",
    pPrice: "190$",
    name: "Pampers Premium Care New",
    updated: "2018/00/00",
  },
  {
    img: image2,
    // sale: "50%",
    cPrice: "150$",
    pPrice: "190$",
    name: "Pampers Premium Care New",
    updated: "2018/00/00",
  },
  {
    img: image3,
    // sale: "50%",
    cPrice: "150$",
    pPrice: "190$",
    name: "Pampers Premium Care New",
    updated: "2018/00/00",
  },
  {
    img: image4,
    // sale: "50%",
    cPrice: "150$",
    pPrice: "190$",
    name: "Pampers Premium Care New",
    updated: "2018/00/00",
  },
  {
    img: image5,
    // sale: "50%",
    cPrice: "150$",
    pPrice: "190$",
    name: "Pampers Premium Care New",
    updated: "2018/00/00",
  },
  {
    img: image6,
    // sale: "50%",
    cPrice: "150$",
    pPrice: "190$",
    name: "Pampers Premium Care New",
    updated: "2018/00/00",
  },
  {
    img: image7,
    // sale: "50%",
    cPrice: "150$",
    pPrice: "190$",
    name: "Pampers Premium Care New",
    updated: "2018/00/00",
  },
  {
    img: image8,
    // sale: "50%",
    cPrice: "150$",
    pPrice: "190$",
    name: "Pampers Premium Care New",
    updated: "2018/00/00",
  },
];
const Wrapper = styled(Container)`
  //   background-color: #eee;
  margin-top: 40px;
`;

const Card = styled(Container)`
  width: 298px;
  height: 491px;
  border-radius: 2px;
  border: solid 1px #e6ecef;
  background-color: #ffffff;
  margin-top: 18px;
  padding: 0;
  //   .card-header {
  //     height: 45px;
  //     border: solid 1px #e6ecef;
  //     background-color: #f6f8f9;
  //     font-family: Comfortaa;
  //     font-size: 16px;
  //     font-weight: bold;
  //     font-stretch: normal;
  //     font-style: normal;
  //     letter-spacing: normal;
  //     color: #303637;
  //     span {
  //       color: #f62434;
  //     }
  //   }
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
    margin-top: 72px;
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
  bottom: -37px;
  right: 745px;
  color: #e6ecef;
  display: flex;
  justify-content: center;
    &:focus,
  &:active {
    outline: none !important;
    box-shadow: none;
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
  bottom: -37px;
  left: 747px;
  color: #e6ecef;
  display: flex;
  justify-content: center;
    &:focus,
  &:active {
    outline: none !important;
    box-shadow: none;
  }
`;
const sliderCards = cardsArray.map((card, i) => {
  return (
    <Container key={i}>
      <Card>
        {/* <div className="card-header">
          Sale <span>${card.sale}</span>
          </div> */}
        <div className="card-img">
          <img src={card.img} />
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
    rows: 2,
  };
  return (
    <Wrapper>
      <Slider
        {...settings}
        style={{ width: "1258px", marginLeft: "-55px", marginBottom: "20px" }}
        ref={(c) => (slider = c)}
      >
        {sliderCards}
        {sliderCards}
      </Slider>
      <PrevArrow className="button" onClick={previous}> 
        <IoIosArrowBack />
      </PrevArrow>
      <NextArrow className="button" onClick={next}> 
        <IoIosArrowForward  />
      </NextArrow>
    </Wrapper>
  );
};

export default TabContent;

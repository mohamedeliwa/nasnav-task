import React from "react";
import styled from "styled-components";
import Controllers from "../components/Controllers";
import Header from "../components/Header";
import ShoppingByCategory from "../components/ShoppingByCategory";
import BrowseByBranch from "../components/BrowseByBranch";
import HotDeals from "../components/HotDeals";
import OurProducts from "../components/OurProducts";
import Footer from "../components/Footer";

const Wrapper = styled.div`
  // background: #eee;
`;

const Home = () => {
  return (
    <Wrapper>
      <Controllers />
      <Header />
      <ShoppingByCategory />
      <BrowseByBranch />
      <HotDeals />
      <OurProducts />
      <Footer />
    </Wrapper>
  );
};

export default Home;

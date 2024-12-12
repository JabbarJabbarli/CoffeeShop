import React from "react";
import Header from "../../components/Header";
import { links } from "../../data/header";
import FromViena from "../../components/FromViena";
import AboutHome from "../../components/AboutHome";
import Question from "../../components/QuestionSection";
import ProductsHome from "../../components/ProductsHome";
import { productsImg } from "../../data/products.js";
import StroiesHome from "../../components/StroiesHome/index.jsx";
import { stories } from "../../data/storiesProd.js";
// import AboutOurHome from "../../components/AboutOurHome/index.jsx";
// import { aboutUs } from "../../data/aboutUs.js";
import FromVienaVideo from "../../components/FromVienaVideo/index.jsx";
import NewsHome from "../../components/NewsHome/index.jsx";
import { newsData } from "../../data/newsData.js";
import Footer from "../../components/Footer/index.jsx";
import { footer, icons } from "../../data/footer.js";
const HomePage = () => {
  return (
    <div className="bg-bgImage bg-cover bg-center w-full h-screen">
      <Header links={links} />
      <FromViena />
      <AboutHome />
      <Question />
      <ProductsHome productsImg={productsImg} />
      <StroiesHome stories={stories} />
      {/* <AboutOurHome aboutUs={aboutUs} /> */}
      <FromVienaVideo />
      <NewsHome newsData={newsData} />
      <Footer footer={footer} icons={icons} />
    </div>
  );
};

export default HomePage;

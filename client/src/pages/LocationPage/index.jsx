import React from "react";
import Header from "../../components/Header/index";
import { links } from "../../data/header";
import { footer,icons } from "../../data/footer";
import LocationFind from "../../components/LocationFind";
import Footer from "../../components/Footer";
const LocationPage = () => {
  return (
    <div>
      <Header links={links} />
      <LocationFind />
      <Footer footer={footer} icons={icons}/>
    </div>
  );
};

export default LocationPage;

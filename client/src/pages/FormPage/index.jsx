import React from "react";
import Header from "../../components/Header";
import { links } from "../../data/header";
import { footer, icons } from "../../data/footer";
import Form from "../../components/Form";
import Footer from "../../components/Footer";
const FormPage = () => {
  return (
    <div>
      <Header links={links} />
      <Form />
      <Footer footer={footer} icons={icons} />
    </div>
  );
};

export default FormPage;

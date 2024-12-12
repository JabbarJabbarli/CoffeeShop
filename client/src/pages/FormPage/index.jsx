import React from "react";
import Header from "../../components/Header";
import { links } from "../../data/header";
import Form from "../../components/Form";

const FormPage = () => {
  return (
    <div>
      <Header links={links} />
      <Form />
    </div>
  );
};

export default FormPage;

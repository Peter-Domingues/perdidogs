"use client";

import Form from "@/components/Form";
import { Provider } from "react-redux";
import store from "@/store";

const FormPage = () => {
  return (
    <Provider store={store}>
      <Form />
    </Provider>
  );
};

export default FormPage;

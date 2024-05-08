"use client";

import Form from "@/components/Form";
import { Provider } from "react-redux";
import store from "@/store";

const FormPage = () => {
  return (
    <Provider store={store}>
      <div className="form-page">
        <Form />
      </div>
    </Provider>
  );
};

export default FormPage;

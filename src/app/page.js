"use client";
import Form from "@/components/Form";
import HomePage from "@/components/Home";
import { Provider } from "react-redux";
import store from "../store";

export default function Home() {
  return (
    <Provider store={store}>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <HomePage />
        <Form />
      </main>
    </Provider>
  );
}

"use client";

import { Provider } from "react-redux";
import store from "../store";
import HomePage from "@/components/Home";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <Provider store={store}>
      <main className="flex min-h-screen flex-col items-center">
        <HomePage />
        <Footer />
      </main>
    </Provider>
  );
}

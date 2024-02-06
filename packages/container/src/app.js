import React from "react";
import MarketingSection from "./components/MarketingSection";
import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom";

export default () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <MarketingSection />
      </div>
    </BrowserRouter>
  );
};

import React from "react";
import Content from "./Content/Content";
import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";
import bgColor from "./Home.module.css";

function Home() {
  return (
    <div className={bgColor.mainContainer}>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default Home;

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Content from "./Content/Content";
import { Footer } from "./Footer/Footer";
import { LogInForm } from "./Forms/LogIn/LogInForm";
import { RegistrationForm } from "./Forms/Registration/RegistrationForm";
import { Header } from "./Header/Header";
import bgColor from "./Home.module.css";

function Home() {
  return (
    <BrowserRouter>
      <div className={bgColor.mainContainer}>
        <Header />
        <Routes>
          <Route path="/Content" element={<Content />} />
          <Route path="/RegistrationForm" element={<RegistrationForm />} />
          <Route path="/LogInForm" element={<LogInForm />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default Home;

import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import ContactForm from "./components/ContactFom";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div>
        <Header/>
        <HeroSection/>
        <Services/>
        <ContactForm/>
        <Footer/>
    </div>
  );
}

export default App;

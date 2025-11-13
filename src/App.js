import React, { useState } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import Services from "./components/Services";
import Footer from "./components/Footer";
import ModalForm from "./components/ModalForm";
import DataTable from "./components/DataTable";
import StartOrganizing from "./components/StartOrganizing";
import Testimonial from "./components/Testimonial";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [entries, setEntries] = useState([]);

  const handleAddEntry = (data) => {
    const newEntry = {
      ...data,
      time: new Date().toLocaleString(),
    };
    setEntries((prev) => [...prev, newEntry]);
  };

  return (
    <div>
      <Header />
      <HeroSection onOpenModal={() => setShowModal(true)} />
      <FeatureSection onOpenModal={() => setShowModal(true)} />
      <Services />
      <Testimonial/>
      <ModalForm
        show={showModal}
        onClose={() => setShowModal(false)}
        onSubmitData={handleAddEntry}
      />
      <StartOrganizing/>
      <DataTable data={entries} />
      <Footer />
    </div>
  );
}

export default App;

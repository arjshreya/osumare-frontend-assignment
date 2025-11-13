import React, { useState } from "react";
import "./HeroSection.css";
import ModalForm from "./ModalForm";

const HeroSection=()=>{
    const[showModal, setShowModal]=useState(false);
    return(
        <section className="hero" id="home">
            <div className="hero-content">
                <h1>Organize. Achieve. Relax.</h1>
                <p>
                Grow your productivity with Osumare’s smart task management tools.
                </p>
                <button className="btn" onClick={()=>setShowModal(true)}>
                    Get Organizing
                </button>
            </div>
        
             <div className="hero-image">
                 <img src="/assets/hero.png" alt="Marketing Illustartion"/>
             </div>
        <ModalForm show={showModal} onClose={()=>setShowModal(false)}/>
        </section>
    );
};
export default HeroSection;
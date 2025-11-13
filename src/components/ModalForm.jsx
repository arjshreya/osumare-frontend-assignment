import React, { useState } from "react";
import "./ModalForm.css"

const ModalForm=({show, onClose})=>{
    const[formData , setFormData]=useState({name:"",phone:"",email:""});
    const[submitted, setSubmitted]=useState(false);
    const handleChange=(e)=>{
        setFormData({...formData,[e.target.name]: e.target.value});
    };
    const handleSubmit=(e)=>{
        e.preventDefault();
        setSubmitted(true);
        setTimeout(()=>onClose(),2000);
    };
    if(!show)return null;

    return(
        <div className="modal-overlay">
            <div className="modal-content">
                {!submitted?(
                    <>
                        <h3>Enter Your Details</h3>
                        <form onSubmit={handleSubmit}>
                            <input type="text" name="name" placeholder="Full Name" onChange={handleChange} required/>
                            <input type="tel" name="phone" placeholder="Phone Number" onChange={handleChange} required/>
                            <input type="email" name="email" placeholder="Email Address" onChange={handleChange} required/>
                            <button type="Submit" className="btn">Submit</button>
                        </form>
                        <button className="close-btn" onClick={onClose}>X</button>
                    </>
                ):(
                    <div className="thank-you">
                        <h3>Thank You!</h3>
                        <p>We'll contact you soon.</p>
                    </div>

                )}
            </div>
        </div>
    );

};
export default ModalForm;
import React, { useState, useEffect } from "react";
import "./ModalForm.css";

const ModalForm = ({ show, onClose, onSubmitData }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    languages: [],
    email: "",
    agree: false,
  });
  const [submitted, setSubmitted] = useState(false);

  // Reset form whenever modal opens
  useEffect(() => {
    if (show) {
      setSubmitted(false);
      setFormData({
        firstName: "",
        lastName: "",
        gender: "",
        languages: [],
        email: "",
        agree: false,
      });
    }
  }, [show]);

  if (!show) return null;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox" && name === "languages") {
      const updatedLanguages = checked
        ? [...formData.languages, value]
        : formData.languages.filter((lang) => lang !== value);
      setFormData({ ...formData, languages: updatedLanguages });
    } else if (type === "checkbox" && name === "agree") {
      setFormData({ ...formData, agree: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.agree) {
      alert("Please agree to the Terms & Conditions before proceeding.");
      return;
    }
    setSubmitted(true);
    if (onSubmitData) onSubmitData(formData);
    setTimeout(() => onClose(), 2000);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {!submitted ? (
          <>
            <button className="close-btn" onClick={onClose}>
              ×
            </button>
            <h3 className="modal-title">Get Started</h3>
            <h4 className="modal-subtitle">Fill in your details and take control of your tasks.</h4>
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    id="firstName"
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    id="lastName"
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="field-label">Gender</label>
                <div className="gender-options">
                  <label>
                    <input
                      type="radio"
                      name="gender"
                      value="Male"
                      checked={formData.gender === "Male"}
                      onChange={handleChange}
                      required
                    />
                    Male
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="gender"
                      value="Female"
                      checked={formData.gender === "Female"}
                      onChange={handleChange}
                    />
                    Female
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="gender"
                      value="Other"
                      checked={formData.gender === "Other"}
                      onChange={handleChange}
                    />
                    Other
                  </label>
                </div>
              </div>

              <div className="form-group">
                <label className="field-label">Languages Known</label>
                <div className="language-options">
                  <label>
                    <input
                      type="checkbox"
                      name="languages"
                      value="English"
                      onChange={handleChange}
                    />
                    English
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="languages"
                      value="Hindi"
                      onChange={handleChange}
                    />
                    Hindi
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="languages"
                      value="Marathi"
                      onChange={handleChange}
                    />
                    Marathi
                  </label>
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group agree">
                <label>
                  <input
                    type="checkbox"
                    name="agree"
                    checked={formData.agree}
                    onChange={handleChange}
                    required
                  />
                  I agree to the <a href="#">Terms & Conditions</a>
                </label>
              </div>

              <button type="submit" className="btn-submit">
                Done
              </button>
            </form>
          </>
        ) : (
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

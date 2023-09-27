import React, { useState, useRef } from "react";
import IconContact from "../IconContact";
// Styles
import styles from "./styles.module.scss";
// Assets
import arrow from "../../assets/icon/arrowgray.png";
const InputField = ({ name, label, value, onChange, error }) => {
  return (
    <>
      <label htmlFor={name}>{label}:</label>
      <input
        type="text"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={`Ton ${label.toLowerCase()} ici`}
      />
      {error && <div className={styles.error}>{error}</div>}
    </>
  );
};

const Form = ({ title, content, image, alt }) => {
  const [textVisible, setTextVisible] = useState(false);
  const rightContentRef = useRef(null);

  const toggleText = () => {
    setTextVisible(!textVisible);
    if (rightContentRef.current) {
      rightContentRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    const newErrors = {};

    // Validez le nom
    if (formData.name.trim() === "") {
      newErrors.name = "Le nom est requis";
    }

    // Validez le nom de famille
    if (formData.lastName.trim() === "") {
      newErrors.lastName = "Le nom de famille est requis";
    }

    // Validez l'e-mail
    if (!validateEmail(formData.email)) {
      newErrors.email = "L'e-mail n'est pas valide";
    }

    setErrors(newErrors);
    // La Object.keys()méthode statique renvoie un tableau des noms de propriétés énumérables à clé de chaîne d'un objet donné.
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      alert(
        `Name: ${formData.name}, LastName: ${formData.lastName}, Email: ${formData.email}, Message: ${formData.message}`
      );
    } else {
      alert(
        "Le formulaire contient des erreurs. Veuillez corriger les champs."
      );
    }
  };

  return (
    <>
      <div className={styles.__left_content}>
        <div className={styles.__image}>
          <img src={image} alt={alt}></img>
          <span className={styles.__arrow}>
            {" "}
            <img src={arrow} alt={"arrow icon"} onClick={toggleText} />
          </span>
        </div>
        <div className={styles.__infoBox}>
          <span>
            <h2>{title}</h2>
            <p>{content}</p>
          </span>
        </div>
      </div>

      {/* Form */}
      <div className={styles.__right_content} ref={rightContentRef}>
        <form onSubmit={handleSubmit} className={styles.__container_form}>
          <div className={styles.__form_element}>
            <InputField
              name="name"
              label="Name"
              value={formData.name}
              onChange={handleChange}
              error={errors.name}
            />
          </div>
          <div className={styles.__form_element}>
            <InputField
              name="lastName"
              label="LastName"
              value={formData.lastName}
              onChange={handleChange}
              error={errors.lastName}
            />
          </div>

          <div className={styles.__form_element}>
            <InputField
              name="email"
              label="Email"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
            />
          </div>
          <div className={styles.__form_element}>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Ton message ici"
            />
          </div>
          <button type="submit">Submit</button>
          <div className={styles.__icons}>
            <IconContact />
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;

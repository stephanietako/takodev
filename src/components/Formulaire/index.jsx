import React, { useState } from "react";
import DOMPurify from "dompurify";
// Styles
import styles from "./styles.module.scss";

const InputField = ({ name, label, value, onChange, error, placeholder }) => {
  return (
    <>
      <label htmlFor={name}>{label}:</label>
      <input
        type="text"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      {error && <div className={styles.error}>{error}</div>}
    </>
  );
};

const TextareaField = ({
  name,
  label,
  value,
  onChange,
  error,
  placeholder,
}) => {
  return (
    <>
      <label htmlFor={name}>{label}:</label>
      <textarea
        type="text"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      {error && <div className={styles.error}>{error}</div>}
    </>
  );
};

const Formulaire = () => {
  // eslint-disable-next-line
  const [form, setForm] = useState("");
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateFirstname = (firstname) => {
    const nameRegex = /^[a-zA-Z]+[a-zA-Z]+$/;
    return nameRegex.test(firstname);
  };

  const validateLastname = (lastname) => {
    const nameRegex = /^[a-zA-Z]+[a-zA-Z]+$/;
    return nameRegex.test(lastname);
  };

  const validateEmail = (email) => {
    // eslint-disable-next-line
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return emailRegex.test(email);
  };

  const validateMessage = (message) => {
    const messageRegex = /^[\s\S]{10,1000}$/;
    return messageRegex.test(message);
  };

  const validateForm = () => {
    const newErrors = {};
    // Validez le firstname
    if (!validateFirstname(formData.firstname)) {
      newErrors.fistname =
        "Le prénom n'est pas valide, il comporte moins de lettres et/ou des chiffres";
    }

    // Validez le lastname
    if (!validateLastname(formData.lastname)) {
      newErrors.lastname =
        "Le nom n'est pas valide, il comporte moins de lettres et/ou des chiffres";
    }

    // Validez l'e-mail
    if (!validateEmail(formData.email)) {
      newErrors.email = "Veuillez entrer une adresse e-mail valide";
    }

    // Validez le message
    if (!validateMessage(formData.message)) {
      newErrors.message =
        "Votre message doit comporter au moins 10 mots et pas plus de 1000";
    }

    setErrors(newErrors);
    // La Object.keys()méthode statique renvoie un tableau des noms de propriétés énumérables à clé de chaîne d'un objet donné.
    return Object.keys(newErrors).length === 0;
  };
  //
  const backendUrl = process.env.REACT_APP_URL_BACK_PROD;
  //
  const handleSubmit = async (e) => {
    e.preventDefault();
    setForm("");

    if (validateForm()) {
      const cleanedFirstname = DOMPurify.sanitize(formData.firstname);
      const cleanedLastname = DOMPurify.sanitize(formData.lastname);
      const cleanedEmail = DOMPurify.sanitize(formData.email);
      const cleanedMessage = DOMPurify.sanitize(formData.message);
      alert(
        `Firstname: ${cleanedFirstname}, Lastname: ${cleanedLastname}, Email: ${cleanedEmail}, Message: ${cleanedMessage}`
      );
    } else {
      alert(
        "Le formulaire contient des erreurs. Veuillez corriger les champs."
      );
    }

    try {
      const response = await fetch(`${backendUrl}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Form sent successfully!");
        alert("Form sent successfully!");
      } else {
        console.error("Failed to send form.");
        alert("Failed to send form.");
      }
    } catch (error) {
      console.error("An error occurred:", error);
      alert("Something went wrong, please try again later. " + error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.__container_form}>
        <div className={styles.__form_element}>
          <InputField
            name="firstname"
            label="Prénom"
            value={formData.firstname}
            onChange={handleChange}
            error={errors.firstname}
            placeholder="Ton Prénom ici"
          />
        </div>
        <div className={styles.__form_element}>
          <InputField
            name="lastname"
            label="Nom"
            value={formData.lastname}
            onChange={handleChange}
            error={errors.lastname}
            placeholder="Ton Nom de Famille ici"
          />
        </div>

        <div className={styles.__form_element}>
          <InputField
            name="email"
            label="Email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
            placeholder="Ton e-mail ici"
          />
        </div>
        <div className={styles.__form_element}>
          <TextareaField
            name="message"
            label="Message"
            value={formData.message}
            onChange={handleChange}
            error={errors.message}
            placeholder="Ton message ici"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
export default Formulaire;

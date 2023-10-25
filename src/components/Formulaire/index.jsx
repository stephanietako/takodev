import React, { useState } from "react";
import DOMPurify from "dompurify";
import fetchForm from "../../helpers/fetchForm";
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
  const [loading, setLoading] = useState(false);

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
    // eslint-disable-next-line
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return emailRegex.test(email);
  };

  const validateMessage = (message) => {
    const messageRegex = /^[\s\S]{10,1000}$/;
    return messageRegex.test(message);
  };

  const validateName = (name) => {
    const nameRegex = /^[a-zA-Z]+[a-zA-Z]+$/;
    return nameRegex.test(name);
  };

  const validateLastName = (lastname) => {
    const nameRegex = /^[a-zA-Z]+[a-zA-Z]+$/;
    return nameRegex.test(lastname);
  };

  const validateForm = () => {
    const newErrors = {};

    // Validez l'e-mail
    if (!validateEmail(formData.email)) {
      newErrors.email = "Veuillez entrer une adresse e-mail valide";
    }

    // Validez le message
    if (!validateMessage(formData.message)) {
      newErrors.message =
        "Votre message doit comporter au moins 10 mots et pas plus de 1000";
    }

    // Validez le name
    if (!validateName(formData.name)) {
      newErrors.name =
        "Le prénom n'est pas valide, il comporte moins de lettres et/ou des chiffres";
    }

    // Validez le lastname
    if (!validateLastName(formData.lastName)) {
      newErrors.lastName =
        "Le prénom n'est pas valide, il comporte moins de lettres et/ou des chiffres";
    }

    setErrors(newErrors);
    // La Object.keys()méthode statique renvoie un tableau des noms de propriétés énumérables à clé de chaîne d'un objet donné.
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      const cleanedName = DOMPurify.sanitize(formData.name);
      const cleanedLastName = DOMPurify.sanitize(formData.lastName);
      const cleanedEmail = DOMPurify.sanitize(formData.email);
      const cleanedMessage = DOMPurify.sanitize(formData.message);
      alert(
        `Name: ${cleanedName}, LastName: ${cleanedLastName}, Email: ${cleanedEmail}, Message: ${cleanedMessage}`
      );

      setLoading(true);

      fetchForm(cleanedName, cleanedLastName, cleanedEmail, cleanedMessage)
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("erreur pour la reponse");
          }
        })
        .then((data) => {
          setLoading(false);
          alert("Formulaire soumis avec succès");
        })
        .catch((error) => {
          // Gérez les erreurs du fetch ici
          console.error(error);
          alert("Erreur dans la soumission du formulaire");
        });
    } else {
      alert(
        "Le formulaire contient des erreurs. Veuillez corriger les champs."
      );
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.__container_form}>
        <div className={styles.__form_element}>
          <InputField
            name="name"
            label="Name"
            value={formData.name}
            onChange={handleChange}
            error={errors.name}
            placeholder="Ton Prénom ici"
          />
        </div>
        <div className={styles.__form_element}>
          <InputField
            name="lastName"
            label="LastName"
            value={formData.lastName}
            onChange={handleChange}
            error={errors.lastName}
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

import { useState } from "react";
import DOMPurify from "dompurify";
// Helpers
import fetchUserMail from "../../helpers/fetchUserMail";
// Assets
import arrowform from "../../assets/icon/arrowform.svg";
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
const KeepInTouch = () => {
  const [formData, setFormData] = useState({
    email: "",
  });
  const [email, setEmail] = useState("");
  const [result, setResult] = useState("");
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

  const validateForm = () => {
    const newErrors = {};
    // Validez l'e-mail
    if (!validateEmail(formData.email)) {
      newErrors.email = "Veuillez entrer une adresse e-mail valide";
    }

    setErrors(newErrors);
    // La Object.keys()méthode statique renvoie un tableau des noms de propriétés énumérables à clé de chaîne d'un objet donné.
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (validateForm()) {
      const cleanedEmail = DOMPurify.sanitize(formData.email);
      alert(` Email: ${cleanedEmail}`);
    } else {
      alert(
        "Le formulaire contient des erreurs. Veuillez corriger les champs."
      );
    }

    try {
      const response = await fetchUserMail(email);
      setEmail("");
      if (response) {
        setResult("Thank you for subscribing to our newsletter!");
      } else {
        setResult("Something went wrong, please try again later.");
      }
    } catch {
      setResult("Something went wrong, please try again later.");
    }
  };

  return (
    <div className={styles.kpintch_container}>
      <h4>subscribe to our latest updates</h4>
      <form onSubmit={handleSubmit}>
        <div className={styles.__form_element}>
          <InputField
            name="email"
            label="Email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
            placeholder="Ton e-mail ici"
          />
          <div className={styles.__result}>{result}</div>

          <button type="submit">
            <img className={styles.__arrow} src={arrowform} alt="icon arrow" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default KeepInTouch;

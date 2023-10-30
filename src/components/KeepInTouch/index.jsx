import { useState } from "react";
import DOMPurify from "dompurify";
import fetch from "node-fetch";
import { toast, ToastContainer, Zoom } from "../Toasts";

// Assets
import arrowform from "../../assets/icon/arrowform.svg";
// Styles
import styles from "./styles.module.scss";

const InputField = ({ name, label, value, onChange, placeholder }) => {
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
    </>
  );
};

const KeepInTouch = () => {
  const [formData, setFormData] = useState({
    email: "",
  });
  // eslint-disable-next-line
  const [email, setEmail] = useState("");
  const [result, setResult] = useState("");
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateEmail = (email) => {
    // eslint-disable-next-line
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    const newErrors = {};
    if (!validateEmail(formData.email)) {
      newErrors.email = "Veuillez entrer une adresse e-mail valide";
    }

    setErrors(newErrors);

    // La Object.keys()méthode statique renvoie un tableau des noms de propriétés énumérables à clé de chaîne d'un objet donné.
    return Object.keys(newErrors).length === 0;
  };

  const backendUrl = process.env.REACT_APP_URL_BACK_PROD;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormData({
      email: "",
    });
    if (!formData.email) {
      toast.error("Veuillez entrer une adresse e-mail");
      return; // Quittez la fonction s'il n'y a pas d'email
    }

    if (validateForm()) {
      const cleanedEmail = DOMPurify.sanitize(formData.email);
      setResult("Email envoyé !");
      toast.info(` Email: ${cleanedEmail}`);
    } else {
      toast.error(
        "Le formulaire contient des erreurs. Veuillez corriger les champs."
      );
    }

    try {
      const response = await fetch(`${backendUrl}/email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Email sent successfully!");
        toast.success("Email envoyé !");
        setResult("Merci pour votre inscription !");
      } else {
        console.error("Failed to send email.");
        toast.error("Une erreur est survenue, essayez plus tard.");
      }
    } catch (error) {
      console.error("An error occurred:", error);
      toast.error("Une erreur est survenue, essayez plus tard. ");
    }
  };

  return (
    <div className={styles.kpintch_container}>
      <h4>abonnez-vous</h4>
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
      <ToastContainer
        transition={Zoom}
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default KeepInTouch;

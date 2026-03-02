import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BoutonComponent from "../components/bouton.component";
import api from "../service/api";
import "./Contact.css";
import { contactValidation } from "../validation.forms/contact.validation";
import InputText from "../components/input.component";

function FormulaireContact() {
  /* const [nom, setNom] = useState("")
  
  const [sujet, setSujet] = useState("")
  const [message, setMessage] = useState("") */
  const [response, setResponse] = useState("");
  const initFormData: ContactForm = {
    id: null,
    nom: "",
    email: "",
    sujet: "",
    message: "",
  };
  const [formData, setFormData] = useState<ContactForm>(initFormData);
  const [errors, setErrors] = useState<any>();

  const resetForm = () => {
    setFormData(initFormData);
  };
  const validateFields = contactValidation.safeParse(formData);
  const navigation = useNavigate();

  const handleSubmit = async () => {
    try {
      if (validateFields.success) {
        const dataObj = { ...validateFields.data, id: null };
        const res = await api.post("/contact/post", dataObj);
        if (res?.data && res?.data?.code === "201") {
          setResponse(res.data.message);
          resetForm();
          navigation("/");
        } else {
          setResponse(res?.data ? res.data.message : res.status);
        }
      } else {
        const errorsMsg = validateFields.error.flatten().fieldErrors; ///getZodFieldsErrors(validateFields.error)
        setErrors(errorsMsg as any);
        const msg = Object.values(errorsMsg).join("\n");
        console.log({ ...errorsMsg });
        setResponse(msg);
      }
    } catch (err) {
      console.error(err);
      setResponse("Erreur lors de l'envoi");
    }
  };

  return (
    <div className="form-container flex-col gap-1.5">
      <form className="contact-form">
        <h2>Contactez-nous</h2>
        <InputText
          value={formData.nom}
          placeholder="Votre nom et prénoms"
          textLabel="Nom et prénom"
          onChange={(e) => {
            setFormData({ ...formData, nom: e?.currentTarget?.value });
            setErrors({ ...errors, nom: null });
          }}
          className=""
          errorField={errors?.nom}
        />
        <InputText
          value={formData.email}
          placeholder="Votre email"
          textLabel="Email"
          onChange={(e) => {
            setFormData({ ...formData, email: e?.currentTarget?.value });
            setErrors({ ...errors, email: null });
          }}
          className=""
          errorField={errors?.email}
        />
        <InputText
          value={formData.sujet}
          placeholder="Saisisser le sujet"
          textLabel="Sujet"
          onChange={(e) => {
            setFormData({ ...formData, sujet: e?.currentTarget?.value });
            setErrors({ ...errors, sujet: null });
          }}
          className=""
          errorField={errors?.sujet}
        />
        <InputText
          value={formData.message}
          placeholder="Saisisser le message"
          textLabel="message"
          onChange={(e) => {
            setFormData({ ...formData, message: e?.currentTarget?.value });
            setErrors({ ...errors, message: null });
          }}
          className=""
          errorField={errors?.message}
        />
        {/* 
        <button type="submit">Envoyer</button> */}
      </form>
      <BoutonComponent
        className="mb-1 w-3/4"
        buttonText="Envoyer"
        onClick={handleSubmit}
      />
      <BoutonComponent
        className="bg-red-500 text-white w-3/4"
        buttonText="Annuler"
        onClick={resetForm}
      />
      {response && <p className="response">{response}</p>}
    </div>
  );
}

export default FormulaireContact;

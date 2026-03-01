import { useState } from "react"
import { useNavigate } from "react-router-dom"
import BoutonComponent from "../components/bouton.component"
import api from "../service/api"
import "./Contact.css"
import { contactValidation, getZodFieldsErrors } from "../validation.forms/contact.validation"
import InputText from "../components/input.component"

function FormulaireContact() {
  /* const [nom, setNom] = useState("")
  
  const [sujet, setSujet] = useState("")
  const [message, setMessage] = useState("") */
  const [response, setResponse] = useState("")
  const initFormData:ContactForm={
    id:null,
    nom: "",
    email: "",
    sujet: "",
    message:""
  }
const [formData, setFormData] = useState<ContactForm>(initFormData)
const [errors, setErrors] = useState(null)

const resetForm=()=>{
   setFormData(initFormData)
}
const validateFields=contactValidation.safeParse(formData)
  const navigation = useNavigate()

  const handleSubmit = async () => {
    try {
      if(validateFields.success){
        const dataObj={...validateFields.data,id:null}
      const res = await api.post("/contact/post",dataObj )
      if(res?.data&&res?.data?.code==="201"){
    setResponse(res.data.message)
    resetForm()
    navigation("/")
  }else{
    setResponse(res?.data?res.data.message:res.status)
  }
    }else{
      const errorsMsg=getZodFieldsErrors(validateFields.error)
      setErrors(errorsMsg as any)
      setResponse(Object.values(errorsMsg).join("\n"))
    }
    } catch (err) {
      console.error(err)
      setResponse("Erreur lors de l'envoi")
    }
  }

  return (
    <div className="form-container">
      <form className="contact-form" onSubmit={handleSubmit}>
        <h2>Contactez-nous</h2>
<InputText />
        <InputText />
        <InputText />
        <InputText />
{/* 
        <button type="submit">Envoyer</button> */}
        <BoutonComponent buttonText="Envoyer" onClick={handleSubmit} />
      </form>

      {response && <p className="response">{response}</p>}
    </div>
  )
}

export default FormulaireContact
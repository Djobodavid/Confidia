import { useState } from "react"
import { useNavigate } from "react-router-dom"
import BoutonComponent from "../components/bouton.component"
import api from "../service/api"
import "./Contact.css"

function FormulaireContact() {
  const [nom, setNom] = useState("")
  const [email, setEmail] = useState("")
  const [sujet, setSujet] = useState("")
  const [message, setMessage] = useState("")
  const [response, setResponse] = useState("")

  const navigation = useNavigate()

  const handleSubmit = async () => {
    try {
      const res = await api.post("/contact/post", { nom, email, sujet, message })
      setResponse(res.data.message)
      setNom(""); setEmail(""); setSujet(""); setMessage("")
    } catch (err) {
      console.error(err)
      setResponse("Erreur lors de l'envoi")
    }
  }

  return (
    <div className="form-container">
      <form className="contact-form" onSubmit={handleSubmit}>
        <h2>Contactez-nous</h2>

        <label>Nom :</label>
        <input value={nom} onChange={e => setNom(e.target.value)} type="text" placeholder="Votre nom" required />

        <label>Email :</label>
        <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="Votre email" required />

        <label>Sujet :</label>
        <input value={sujet} onChange={e => setSujet(e.target.value)} type="text" placeholder="Sujet" required />

        <label>Message :</label>
        <textarea value={message} onChange={e => setMessage(e.target.value)} placeholder="Votre message..." required />
{/* 
        <button type="submit">Envoyer</button> */}
        <BoutonComponent buttonText="retour" onClick={() => navigation("/")} />
      </form>

      {response && <p className="response">{response}</p>}
    </div>
  )
}

export default FormulaireContact
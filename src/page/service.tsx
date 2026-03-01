import {  useNavigate } from "react-router-dom"
import BoutonComponent from "../components/bouton.component"



function Service() {

const navigate = useNavigate()

  return (
    <div>
    <h1>Page service</h1>
    <p>Nous vous proposons un service de qualité</p>
    <BoutonComponent buttonText="retour" onClick={()=>{navigate("/")}}  className=""/>
    </div>
  
)}

export default Service
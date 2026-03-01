import { useNavigate } from "react-router-dom"
import BoutonComponent from "../components/bouton.component"



function About() {

const navigation = useNavigate()

  return (
    <div >
        <h1>Page About</h1>
        <BoutonComponent buttonText="retour" onClick={()=>{navigation("/")}}  className=""/>
    </div>
)}

export default About
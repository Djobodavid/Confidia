import { useNavigate } from "react-router-dom"
import BoutonComponent from "../components/bouton.component"



function Design() {

    const navigation = useNavigate()

  return (
    <div>
    <h1>Page design</h1>
    <p>D'acccccorrrrrrrrd</p>
    <BoutonComponent buttonText="retour" onClick={()=>{navigation("/")}}  className=""/>
    </div>
  
)}

export default Design
import { useNavigate } from "react-router-dom"
import BoutonComponent from "../components/bouton.component"


const Apropos = () => {
    const navigation =useNavigate()
  return (
    <div>
      <h1>A propos</h1>
      <BoutonComponent buttonText="retour" onClick={()=>{navigation("/")}}  className=""/>
        
    </div>
  )
}
 
export default Apropos

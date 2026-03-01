
import { CiFacebook } from "react-icons/ci";
import "./home.css";
import { FaGoogle, FaInstagram, FaSkype, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Bienvenue sur ConfiDia</h1>
      <p>Plateforme de gestion médicale</p>

        <div className="form">
            <h2>Login Here</h2>
            <input aria-label="text" type="email" name="email" placeholder="Entrez l'email"/>
            <input type="password" placeholder="Entrez le mot de passe"/>
            <button className="btnn">Login</button>

            <p className="link">Créer un compte <br/>
            <Link to="/registre" >Cliquez ici</Link></p>
            <p className="liw">Se connecter avec</p>

            <div className="iconn">
               <CiFacebook />
               <FaInstagram />
               <FaTwitter />
               <FaGoogle />
               <FaSkype />
            </div>
        </div>

    </div>
  )
}

export default Home
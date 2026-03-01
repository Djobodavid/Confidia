import './registre.css'

const FormulaireContact = () => {


  return (
    <div className="form-container">
      
      <form >

        <h2>Formulaire de Contact</h2>

        <label>Nom :</label>
        <input
          aria-label="text"
          type="text"
          name="nom"
          required
        />

        <label>Prénom :</label>
        <input
          aria-label="text"
          type="text"
          name="prenom"
          required
        />

        <label>Genre :</label>
        <select
          aria-label="text"
          name="genre"
          required
        >
          <option value="">Sélectionnez</option>
          <option value="masculin">Masculin</option>
          <option value="feminin">Féminin</option>
          <option value="autre">Autre</option>
        </select>

        <label>Groupage sanguin :</label>
        <select
          aria-label="text"
          name="groupage"
          required
        >
          <option value="">Sélectionnez</option>
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
        </select>

        <label>État civil :</label>
        <select
          aria-label="text"
          name="etatCivil"
          required
        >
          <option value="">Sélectionnez</option>
          <option value="celibataire">Célibataire</option>
          <option value="marie">Marié(e)</option>
          <option value="divorce">Divorcé(e)</option>
          <option value="veuf">Veuf/Veuve</option>
        </select>

        <label>Motif :</label>
        <textarea
          aria-label="text"
          name="motif"
          required
        />

        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
};

export default FormulaireContact;
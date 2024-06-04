export default function Cas1(){
    
    return (
<fieldset>
      <legend>CAS 1</legend>
      <p>
        <label htmlFor="piles_2">Nombres de piles : </label>
      <input type="number" name="piles_2" id="piles_2" value={2}/>{/*nb_piles après*/}
      </p>
      <p>
        <button id="name_cas1">Exploser</button>
      </p>
      <p>
        <label htmlFor="Exploser">Contenu boutton : </label>
      <input type="text" name="'Exploser'" id="Exploser" value={'Exploser'}/>{/* buttton_contenu */}
      </p>
      <p>Appuyer et relacher le boutton</p>
    </fieldset>
    )

}

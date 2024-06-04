export default function Cas2(){
    return (
        <>
        <fieldset>
      <legend>CAS 2</legend>
      <p>
        <label htmlFor="piles_3">Nombre de piles : </label>
        <input type="number" name="piles_3" id="piles_3" value={3}/>{/*nb_piles après*/}
      </p>
      <p>
        <label htmlFor="FRK">Contenu boutton : </label>
        <input type="text" name='FRK' id='FRK' value={'FRK'}/>
      </p>
        <p>Apppuyer et relacher</p>
        </fieldset>
        </>
    )
}
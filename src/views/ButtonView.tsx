import { useState } from 'react';
import '../ButtonComponent.scss'
export default function ButtonComponent() {
  const [bande, setBande] = useState('');

  const res_bande = () => {
    if (bande === 'blue') {
      return 'Relâche le bouton lorsque le compte à rebours affiche 4 à n\'importe quelle position';
    } 
    if (bande === 'yellow') {
      return 'Relâche le bouton lorsque le compte à rebours affiche 5 à n\'importe quelle position';
    } 
    if (bande === 'white') {
      return 'Relâche le bouton lorsque le compte à rebours affiche 1 à n\'importe quelle position';
    }
    return 'Sélectionnez une couleur';
  };

  return (
    <div className="container">
      <label className="label">Bande de couleur:</label>
      <select 
        className="input" 
        value={bande} 
        onChange={(e) => setBande(e.target.value)}
      >
        <option value="">Sélectionnez une couleur</option>
        <option value="blue">Blue</option>
        <option value="yellow">Yellow</option>
        <option value="white">White</option>
      </select>
      <p className="res">{res_bande()}</p>    
    </div>
  );
}

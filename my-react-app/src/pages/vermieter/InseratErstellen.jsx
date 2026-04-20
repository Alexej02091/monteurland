export default function InseratErstellen() {
  return (
    <div className="inserat-erstellen">
      <h1>Inserat erstellen</h1>

      <input type="text" placeholder="Titel" />
      <input type="text" placeholder="Ort" />
      <input type="number" placeholder="Preis pro Nacht" />
      <textarea placeholder="Beschreibung"></textarea>

      <button>Speichern</button>
    </div>
  );
}

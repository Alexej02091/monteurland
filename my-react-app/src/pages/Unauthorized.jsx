export default function Unauthorized() {
  return (
    <div className="text-center mt-5">
      <h1>403 – Kein Zugriff</h1>
      <p>Du hast keine Berechtigung, diese Seite zu sehen.</p>
      <a href="/" className="btn btn-primary mt-3">Zur Startseite</a>
    </div>
  );
}

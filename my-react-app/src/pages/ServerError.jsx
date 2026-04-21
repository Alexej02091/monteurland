export default function ServerError() {
  return (
    <div className="text-center mt-5">
      <h1 className="display-4">500</h1>
      <p className="lead">Ein unerwarteter Fehler ist aufgetreten.</p>

      <a href="/" className="btn btn-danger mt-3">
        Zur Startseite
      </a>
    </div>
  );
}

export default function Navigation({ mobile = false }) {
  const linkClass = mobile
    ? "d-block mb-3 fs-5"
    : "me-3";

  return (
    <nav>
      <a href="/" className={linkClass}>Home</a>
      <a href="/search" className={linkClass}>Suche</a>
    </nav>
  );
}

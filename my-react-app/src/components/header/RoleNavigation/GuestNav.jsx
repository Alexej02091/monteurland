export default function GuestNav({ mobile = false }) {
  const linkClass = mobile
    ? "d-block mb-3 fs-5"
    : "me-3";

  return (
    <nav>
      <a href="/login" className={linkClass}>Login</a>
      <a href="/register" className={linkClass}>Registrieren</a>
    </nav>
  );
}

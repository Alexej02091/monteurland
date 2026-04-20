export default function Login() {
  return (
    <div className="login-page">
      <h1>Login</h1>

      <input type="text" placeholder="E-Mail" />
      <input type="password" placeholder="Passwort" />

      <button>Einloggen</button>

      <p>Noch kein Konto? <a href="/register">Registrieren</a></p>
    </div>
  );
}

// src/components/header/SearchBar.jsx
export default function SearchBar() {
  return (
    <input
      type="text"
      className="form-control me-3"
      placeholder="Suchen..."
      style={{ maxWidth: "200px" }}
    />
  );
}

// src/components/header/RoleNavigation/index.jsx
import GuestNav from "./GuestNav";
import GesuchterNav from "./GesuchterNav";
import VermieterNav from "./VermieterNav";
import AdminNav from "./AdminNav";

export default function RoleNavigation({ role }) {
  switch (role) {
    case "gesuchter":
      return <GesuchterNav />;
    case "vermieter":
      return <VermieterNav />;
    case "admin":
      return <AdminNav />;
    default:
      return <GuestNav />;
  }
}

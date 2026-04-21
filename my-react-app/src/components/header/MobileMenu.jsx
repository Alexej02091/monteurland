import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import Navigation from "./Navigation";
import RoleNavigation from "./RoleNavigation";
import UserMenu from "./UserMenu";

export default function MobileMenu({ role, user }) {
  const [show, setShow] = useState(false);

  return (
    <>
      {/* Hamburger Button */}
      <button
        className="btn btn-outline-secondary d-md-none"
        onClick={() => setShow(true)}
      >
        ☰
      </button>

      {/* Offcanvas Menü */}
      <Offcanvas show={show} onHide={() => setShow(false)} placement="start">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menü</Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body>
          <div className="mb-4">
            <Navigation mobile />
          </div>

          <div className="mb-4">
            <RoleNavigation role={role} mobile />
          </div>

          <div className="mt-5">
            <UserMenu user={user} mobile />
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

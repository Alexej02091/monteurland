// src/components/footer/Footer.jsx
import FooterLinks from "./FooterLinks";
import SocialLinks from "./SocialLinks";
import ContactInfo from "./ContactInfo";
import LegalLinks from "./LegalLinks";

export default function Footer() {
  return (
    <footer className="bg-dark text-light mt-5 pt-4 pb-3">
      <div className="container">

        <div className="row mb-4">
          <div className="col-md-4 mb-3">
            <h5 className="text-uppercase">Navigation</h5>
            <FooterLinks />
          </div>

          <div className="col-md-4 mb-3">
            <h5 className="text-uppercase">Kontakt</h5>
            <ContactInfo />
          </div>

          <div className="col-md-4 mb-3">
            <h5 className="text-uppercase">Folge uns</h5>
            <SocialLinks />
          </div>
        </div>

        <div className="border-top pt-3 text-center">
          <LegalLinks />
          <p className="mt-2 mb-0">© {new Date().getFullYear()} MeineApp. Alle Rechte vorbehalten.</p>
        </div>

      </div>
    </footer>
  );
}

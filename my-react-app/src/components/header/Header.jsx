import Logo from "./Logo";
import Navigation from "./Navigation";
import SearchBar from "./SearchBar";
import Notifications from "./Notifications";
import UserMenu from "./UserMenu";
import RoleNavigation from "./RoleNavigation";
import MobileMenu from "./MobileMenu";

export default function Header({ role, user }) {
  return (
    <header className="p-3 bg-light border-bottom">
      <div className="container d-flex align-items-center justify-content-between">

        <Logo />

        {/* Desktop Navigation */}
        <div className="d-none d-md-flex align-items-center">
          <Navigation />
          <RoleNavigation role={role} />
          <SearchBar />
          <Notifications />
          <UserMenu user={user} />
        </div>

        {/* Mobile Navigation */}
        <MobileMenu role={role} user={user} />
      </div>
    </header>
  );
}

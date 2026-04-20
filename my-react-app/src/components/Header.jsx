import { Link } from "react-router-dom";

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">
                <Link className="navbar-brand" to="/">Mein Monteurzimmer</Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#mainNav"
                    >
                        <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse" id="mainNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Startseite</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-Link" to="/dashboard">Dashboard</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;
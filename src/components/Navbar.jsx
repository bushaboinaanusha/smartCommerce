
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-container">

                <div className="navbar-left">
                    <Link to="/auth" className="btn btn-primary">
                        Sign-in
                    </Link>
                </div>
                <div className="navbar-links">
                    <Link to="/" className="navbar-link">Home</Link>
                    <Link to="/checkout" className="navbar-link">Cart</Link>
                </div>
                <div className="navbar-right">
                    <Link to="/auth" className="btn btn-secondary">
                        Sign-out
                    </Link>
                </div>

            </div>
        </nav>
    );
}

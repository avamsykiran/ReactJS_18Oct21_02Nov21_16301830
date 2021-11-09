import { Link } from 'react-router-dom';

const Header = ({ title }) => (
    <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
        <div className="container-fluid">
            <a href="#" className="navbar-brand">{title}</a>

            <ul className="navbar-nav me-auto">
                <li className="nav-item">
                    <Link to="/" className="nav-link">Statement</Link>
                </li>
                <li className="nav-item">
                    <Link to="/about" className="nav-link">About Us</Link>
                </li>
            </ul>
        </div>
    </nav>
);

export default Header;
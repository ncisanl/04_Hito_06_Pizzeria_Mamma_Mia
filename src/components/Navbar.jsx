import { Link } from "react-router-dom";

export function Navbar() {
  const total = 25000;
  // TODO: token = true --> Profile / Logout
  // TODO: token = false --> Login / Register
  const token = false;
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Pizzería Mamma Mía!
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                🍕 Home
              </Link>
            </li>
            <li className="nav-item">
              {token ? (
                <Link className="nav-link" to="/profile">
                  🔓 Profile
                </Link>
              ) : (
                <Link className="nav-link" to="/login">
                  🔐 Login
                </Link>
              )}
            </li>
            <li className="nav-item">
              {token ? (
                <Link className="nav-link" to="/logout">
                  🔒 Logout
                </Link>
              ) : (
                <Link className="nav-link" to="/register">
                  🔐 Register
                </Link>
              )}
            </li>
          </ul>
        </div>
        <Link className="nav-link total-navbar" to="/cart">
          🛒 Total: ${total.toLocaleString("es-CL")}
        </Link>
      </div>
    </nav>
  );
}

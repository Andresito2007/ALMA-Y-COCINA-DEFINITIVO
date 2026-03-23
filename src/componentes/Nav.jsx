

function Nav() {
  return (
     <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <div className="container-fluid">
          <a className="navbar-brand" href="#inicio">Alma & Cocina</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#historia">HISTORIA</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#carta">CARTA</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#tipos-reserva">TIPOS DE RESERVA</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#atencion">HORARIOS</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#reservar">REGISTRARSE</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  );
}

export default Nav;
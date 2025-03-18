import React from "react";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand" href="#"></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item"><a className="nav-link" href="#">Inicio</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">Info</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">Servicios</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">Contacto</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
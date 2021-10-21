import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  const activate = (e) => {
    let nav = document.getElementById("nav").children;
    nav = Array.from(nav);
    nav.map((elem) => elem.classList.remove("active"));
    e.target.classList.add("active");
  };
  return (
    <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark fixed-top">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Porfolio
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav" id="nav">
            <Link
              className="nav-link active"
              aria-current="page"
              to="/"
              onClick={(e) => activate(e)}
            >
              Home
            </Link>
            <Link
              className="nav-link"
              to="/counter"
              onClick={(e) => activate(e)}
            >
              Counter
            </Link>
            <Link className="nav-link" to="/shop" onClick={(e) => activate(e)}>
              E-Commerce
            </Link>
            <Link className="nav-link" to="/todo" onClick={(e) => activate(e)}>
              Todo
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

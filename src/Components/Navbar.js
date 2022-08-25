import React from "react";
// import { useStateValue } from "../StateProvider";
import { Link } from "react-router-dom";

const Navbar = ({ cart }) => {
  // const [{ basket }, dispatch] = useStateValue();

  const ids = cart.map((o) => o.id);
  const filtered = cart.filter(({ id }, index) => !ids.includes(id, index + 1));
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          TeeRex Store
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/cart">
                Link
              </Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              id="searchText"
              placeholder="Search"
              aria-label="Search"
            />

            <Link to="/cart">
              <button className="btn btn-outline-success" type="submit">
                <ion-icon name="cart-outline"></ion-icon> {filtered?.length}
              </button>
            </Link>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

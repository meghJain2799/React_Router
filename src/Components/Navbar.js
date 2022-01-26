import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container-fluid text-center">
      <div className="container text-center">
        <ul class="nav justify-content-center bg-warning p-3">
          <li class="nav-item nav_items mx-2">
          <Link className="nav-link" to="/mounting">Mounting</Link>
          </li>
          <li class="nav-item nav_items mx-2">
          <Link className="nav-link" to="/updating">Updating</Link>
          </li>
          <li class="nav-item nav_items mx-2">
          <Link  className="nav-link" to="/unmounting">Unmounting</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

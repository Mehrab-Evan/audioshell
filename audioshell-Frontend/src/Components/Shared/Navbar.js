import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-black bg-gradient py-4">
      <NavLink style={{ textDecoration: "none" }}>
        <Link className="mx-2 text-white text-decoration-none" to="/">
          Home
        </Link>
        <Link className="mx-2 text-white text-decoration-none" to="/login">
          Login
        </Link>
        <Link className="mx-2 text-white text-decoration-none" to="/signup">
          Signup
        </Link>
        <Link className="mx-2 text-white text-decoration-none" to="/addnew">
          Add New
        </Link>
        <Link className="mx-2 text-white text-decoration-none" to="/profile">
          Profile
        </Link>
      </NavLink>
    </div>
  );
};

export default Navbar;

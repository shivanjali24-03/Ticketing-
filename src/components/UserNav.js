import React from "react";
import { Link, useLocation } from "react-router-dom";


function UserNav() {
  const location = useLocation(); // to highlight current page

  return (
    <div className="button-container">
      <Link
        to="/userlist"
        className={`btn btn-lg btn-primary ${
          location.pathname === "/userlist" ? "active" : ""
        }`}
      >
        User List
      </Link>

      <Link
        to="/addAccount"
        className={`btn btn-lg btn-primary ${
          location.pathname === "/addAccount" ? "active" : ""
        }`}
      >
        Add User
      </Link>

      <Link
        to="/manageroles"
        className={`btn btn-lg btn-primary ${
          location.pathname === "/manageroles" ? "active" : ""
        }`}
      >
        Manage Roles
      </Link>
    </div>
  );
}

export default UserNav;

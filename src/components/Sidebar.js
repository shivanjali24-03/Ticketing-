import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Sidebar({ isOpen }) {
  const [isHovered, setIsHovered] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const location = useLocation(); // to highlight active route

  const sidebarClass = isOpen || isHovered ? "expanded" : "collapsed";

  // ✅ Sidebar Menu Array (now includes route paths)
  const menuItems = [
    { name: "Home", icon: "bx bx-home", path: "/" },
    {
      name: "Profile",
      icon: "bx bx-user",
      submenu: [
        { name: "Account", path: "/account" },
        { name: "Privacy", path: "/privacy" },
        { name: "Notifications", path: "/notifications" },
      ],
    },
    {
      name: "Settings",
      icon: "bx bx-cog",
      submenu: [
        { name: "General", path: "/settings" },
        { name: "Security", path: "/security" },
      ],
    },
    { name: "Logout", icon: "bx bx-log-out", path: "/logout" },
  ];

  const handleSubmenuToggle = (menuName) => {
    setOpenMenu((prev) => (prev === menuName ? null : menuName));
  };

  return (
    <aside
      className={`sidebar ${sidebarClass}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="sidebar-logo d-flex align-items-center gap-2 p-3">
        <i className="bx bxs-layer fs-4"></i>
        {(isOpen || isHovered) && <span className="fw-semibold">MyApp</span>}
      </div>

      <ul className="sidebar-menu list-unstyled m-0 p-0">
        {menuItems.map((item) => (
          <li
            key={item.name}
            className={`menu-item ${item.submenu ? "has-submenu" : ""} ${
              openMenu === item.name ? "open" : ""
            }`}
          >
            {/* Main Menu */}
            <div
              className="menu-link d-flex align-items-center justify-content-between w-100 px-3 py-2"
              onClick={() =>
                item.submenu ? handleSubmenuToggle(item.name) : null
              }
              style={{ cursor: item.submenu ? "pointer" : "default" }}
            >
              {/* Left side: icon + label */}
              <div className="d-flex align-items-center gap-2">
                <i className={`${item.icon} fs-5`}></i>
                {(isOpen || isHovered) &&
                  (item.path ? (
                    <Link
                      to={item.path}
                      className={`text-decoration-none text-white ${
                        location.pathname === item.path ? "fw-bold text-warning" : ""
                      }`}
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <span>{item.name}</span>
                  ))}
              </div>

              {/* Arrow for submenu */}
              {item.submenu && (isOpen || isHovered) && (
                <i
                  className={`bx bx-chevron-${
                    openMenu === item.name ? "up" : "down"
                  } dropdown-arrow`}
                ></i>
              )}
            </div>

            {/* Submenu items */}
            {item.submenu &&
              openMenu === item.name &&
              (isOpen || isHovered) && (
                <ul className="submenu list-unstyled ps-4 mt-1 mb-2">
                  {item.submenu.map((sub) => (
                    <li key={sub.name} className="submenu-item py-1">
                      <Link
                        to={sub.path}
                        className={`text-decoration-none text-white d-block px-2 py-1 rounded ${
                          location.pathname === sub.path
                            ? "bg-secondary text-warning"
                            : "hover:bg-gray-700"
                        }`}
                      >
                        {sub.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;

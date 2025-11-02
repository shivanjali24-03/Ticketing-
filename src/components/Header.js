import React from "react";

function Header( {onToggleSidebar}) {
  return (
    
    <header className="header">
        {/* 
        Button for toggling sidebar 
        When clicked, calls the function from App.js
      */}
      <button className="hamburger" onClick={onToggleSidebar}>
          {/* Boxicons hamburger icon */}
        <i className="bx bx-menu"></i>
      </button>
        {/* App title */}
      <h1 style={{ marginLeft: "10px", marginBottom: "0px",  }}>Dashboard</h1>
    </header>
  );
}

export default Header;

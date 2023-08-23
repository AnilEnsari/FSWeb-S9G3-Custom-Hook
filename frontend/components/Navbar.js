import React from "react";

const Navbar = ({ modeChanger, darkTheme }) => {
  const toggleMode = (e) => {
    e.preventDefault();
    {
      modeChanger();
    }
  };

  return (
    <nav className="navbar">
      <h1>Kripto İzleyici</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkTheme ? "toggle toggled" : "toggle"}
        />
      </div>
    </nav>
  );
};

export default Navbar;

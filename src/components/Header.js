import React from "react";
import ListItems from "./ListItems";

function Header() {
  const navElements = [
    {
      className: "fa-solid fa-gauge",
      color: "blue",
    },
    {
      className: "fa-solid fa-utensils",
      color: "#90EE90",
    },
    {
      className: "fa-solid fa-dumbbell",
      color: "orange",
    },
    {
      className: "fa-solid fa-bolt",
      color: "#663399",
    },
    {
      className: "fa-solid fa-calendar",
      color: "white",
    },
    {
      className: "fa-solid fa-message",
      color: "white",
    },
    {
      className: "fa-solid fa-wand-sparkles",
      color: "white",
    },
    {
      className: "fa-solid fa-gears",
      color: "white",
    },
  ];
  return (
    <div id="wrapper">
      <nav className="navbar header-top fixed-top navbar-expand-lg navbar-dark bg-light navOne">
        <div className="container-fluid">
          <a className="navbar-brand text-white">ameya</a>
          <button
            className="navbar-toggler navbar-dark-active-color:"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon "></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav side-nav">
              {navElements.map((element) => {
                return (
                  <ListItems
                    className={element.className}
                    color={element.color}
                  />
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;

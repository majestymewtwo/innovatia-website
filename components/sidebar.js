"use client";
import { useState } from "react";

function Sidebar({ handleCallback }) {
  const [active, setActive] = useState(false);

  const moveMenuLeft = () => {
    const main = document.querySelector("main");
    main.classList.toggle("move-to-left");
  };

  const toggleMenu = () => {
    setActive((prev) => !prev);
    moveMenuLeft();
  };

  return (
    <>
      <div className={`fixed right-0 p-4 z-10`} onClick={toggleMenu}>
        <div className={`button${active ? " active" : ""}`} id='btn'>
          <div className='bar top'></div>
          <div className='bar middle'></div>
          <div className='bar bottom'></div>
        </div>
      </div>
      <div className={`sidebar ${active && "active"}`}>
        <ul className='sidebar-list space-y-6'>
          <li className={`sidebar-item ${active && "active"}`}>
            <a href='#' className='sidebar-anchor'>
              Home
            </a>
          </li>
          <li className={`sidebar-item ${active && "active"}`}>
            <a href='#' className='sidebar-anchor'>
              About
            </a>
          </li>
          <li className={`sidebar-item ${active && "active"}`}>
            <a href='#' className='sidebar-anchor'>
              Our Team
            </a>
          </li>
          <li className={`sidebar-item ${active && "active"}`}>
            <a href='#' className='sidebar-anchor'>
              Events
            </a>
          </li>
          <li className={`sidebar-item ${active && "active"}`}>
            <a href='#' className='sidebar-anchor'>
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;

"use client";
import Link from "next/link";
import { useState } from "react";

function Sidebar({ handleCallback }) {
  const [active, setActive] = useState(false);

  const moveMenuLeft = () => {
    const main = document.querySelector("main");
    main.classList.toggle("move-to-left");
  };

  const hideCustomCursor = () => {
    const customCursor = document.querySelector(".custom-cursor");
    if (customCursor) {
      customCursor.classList.toggle("hidden");
    }
  };

  const toggleMenu = () => {
    setActive((prev) => !prev);
    hideCustomCursor();
    moveMenuLeft();
  };
  
  return (
    <>
      <div
        className={`fixed right-0 p-4 z-10`}
        onClick={toggleMenu}
        id='ham-btn'>
        <div className={`button${active ? " active" : ""}`} id='btn'>
          <div className='bar top'></div>
          <div className='bar middle'></div>
          <div className='bar bottom'></div>
        </div>
      </div>
      <div className={`sidebar ${active && "active"}`}>
        <ul className='space-y-14 sidebar-list font-space text-xl'>
          <li className={`sidebar-item ${active && "active"}`}>
            <Link href='/' className='sidebar-anchor' onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li
            className={`sidebar-item ${active && "active"}`}
            onClick={toggleMenu}>
            <Link href='/about' className='sidebar-anchor'>
              About
            </Link>
          </li>
          <li
            className={`sidebar-item ${active && "active"}`}
            onClick={toggleMenu}>
            <Link href='/team' className='sidebar-anchor'>
              Our Team
            </Link>
          </li>
          <li
            className={`sidebar-item ${active && "active"}`}
            onClick={toggleMenu}>
            <Link href='/events' className='sidebar-anchor'>
              Events
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;

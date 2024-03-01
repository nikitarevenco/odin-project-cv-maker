import { useState } from "react";
import "../styles/dropdown.css";
import DropdownIndicator from "../assets/dropdown.svg";

export default function Dropdown({ title, children }) {
  const [open, setOpen] = useState(false);

  function handleClick() {
    setOpen(!open);
  }

  return (
    <div className="dropdown-container">
      <button className="dropdown-button" onClick={handleClick} type="button">
        <p>{title}</p>
        <DropdownIndicator />
      </button>
      <section className={`dropdown-children${open ? "" : " hidden"}`}>
        {children}
      </section>
    </div>
  );
}

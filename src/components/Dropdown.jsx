import { useRef, useState } from "react";
import "../styles/dropdown.css";
import DropdownIndicator from "../assets/dropdown.svg?react";

export default function Dropdown({
  title,
  children,
  openDropdown,
  setOpenDropdown,
}) {
  const [open, setOpen] = useState(false);
  const thisDropdown = useRef(0);

  function handleClick() {
    if (openDropdown && !open) {
      openDropdown.click();
    }
    if (!open) {
      setOpenDropdown(thisDropdown.current);
    }
    if (open && openDropdown) {
      setOpenDropdown(false);
    }
    setOpen(!open);
  }

  return (
    <div className="dropdown-container">
      <button
        ref={thisDropdown}
        className="dropdown-button"
        onClick={handleClick}
        type="button"
      >
        <p>{title}</p>
        <DropdownIndicator />
      </button>
      <section className={`dropdown-children${open ? "" : " hidden"}`}>
        {children}
      </section>
    </div>
  );
}

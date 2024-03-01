import { useState } from "react";

export default function Dialog({ children, name }) {
  const [open, setOpen] = useState(false);

  function handleClick() {
    setOpen(!open);
  }

  return (
    <>
      <button type="button" className="dialog-open" onClick={handleClick}>
        <p className="dialog-name">{name}</p>
      </button>
      <dialog className="edit-section-content" open={open}>
        {children}
        <button type="button" className="dialog-close" onClick={handleClick}>
          x
        </button>
      </dialog>
    </>
  );
}

import { useRef } from "react";

export default function Dialog({ children, name }) {
  // const [open, setOpen] = useState(false);
  const dialog = useRef(0);

  function openDialog() {
    dialog.current.showModal();
  }
  function closeDialog() {
    dialog.current.close();
  }


  return (
    <>
      <button type="button" className="dialog-open" onClick={openDialog}>
        <p className="dialog-name">{name}</p>
      </button>
      <dialog className="edit-section-content" ref={dialog}>
        {children}
        <button type="button" className="dialog-close" onClick={closeDialog}>
          x
        </button>
      </dialog>
    </>
  );
}

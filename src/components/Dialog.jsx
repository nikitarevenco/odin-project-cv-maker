import { useRef } from "react";
import "../styles/Dialog.css";
import Delete from "../assets/delete.svg?react";
import Invisible from "../assets/notvisible.svg?react";
import Visible from "../assets/visible.svg?react";

export default function Dialog({
  children,
  name,
  fullSections,
  sectionIndexToEdit,
  setSections,
  sectionName,
}) {
  // const [open, setOpen] = useState(false);
  const dialog = useRef(0);
  const clone = structuredClone(fullSections);

  function isHidden() {
    return fullSections[sectionName][sectionIndexToEdit].hidden === true;
  }

  function openDialog() {
    dialog.current.showModal();
  }
  function closeDialog() {
    dialog.current.close();
  }

  function hideFromCV() {
    clone[sectionName][sectionIndexToEdit].hidden = true;
    if (isHidden()) {
      clone[sectionName][sectionIndexToEdit].hidden = false;
    }
    setSections(clone);
  }

  function removeExperience() {
    clone[sectionName].splice(sectionIndexToEdit, 1);
    setSections(clone);
  }


  return (
    <>
      <div>
        <button type="button" className="dialog-open" onClick={openDialog}>
          <p className="dialog-name">{name}</p>
        </button>
        <button type="button" onClick={hideFromCV}>
          {isHidden() ? <Invisible /> : <Visible />} 
          {/* Maybe isHidden may need to change a little */}
        </button>
        <button type="button" onClick={removeExperience}>
          <Delete />
        </button>
      </div>
      <dialog className="edit-section-content" ref={dialog}>
        {children}
        <button type="button" className="dialog-close" onClick={closeDialog}>
          x
        </button>
      </dialog>
    </>
  );
}

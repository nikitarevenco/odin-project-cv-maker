import { useState } from "react";
import Dialog from "./Dialog";
import Dropdown from "./Dropdown";
import EditCVBasics from "./EditCVBasics";
import EditCVSection from "./EditCVSection";
import "../styles/CVEdit.css";
import AddDropdownItem from "./AddDropdownItem";
import ClearCV from "./ClearCV";
import LoadDefaults from "./LoadDefaults";
import exportPDF from "./ExportToPDF";
import ExportPDF from "./ExportToPDF";
import ChangeCVFont from "./ChangeCVFont";

export default function CVEdit({ sections, info, setInfo, setSections }) {
  const [openDropdown, setOpenDropdown] = useState(false);

  const dropdowns = Object.entries(sections).map(
    ([sectionName, subSections]) => {
      const dialogs = subSections.map((subSection, index) => {
        return (
          // TODO: Make dialogs be able to remove elements and also dialogs should be able to "hide" elements too
          <Dialog
            name={subSection.place}
            key={subSection.id}
            fullSections={sections}
            sectionIndexToEdit={index}
            setSections={setSections}
            sectionName={sectionName}
          >
            <EditCVSection
              sectionName={sectionName}
              fullSections={sections}
              sectionIndexToEdit={index}
              setSections={setSections}
            />
          </Dialog>
        );
      });
      return (
        <Dropdown
          title={sectionName}
          key={sectionName}
          openDropdown={openDropdown}
          setOpenDropdown={setOpenDropdown}
        >
          {dialogs}
          <AddDropdownItem
            sectionName={sectionName}
            fullSections={sections}
            setSections={setSections}
          />
        </Dropdown>
      );
    },
  );
  return (
    <section className="CV-edit">
      <ClearCV setInfo={setInfo} setSections={setSections} />
      <LoadDefaults setInfo={setInfo} setSections={setSections} />
      <EditCVBasics info={info} setInfo={setInfo} />
      {dropdowns}
      <ExportPDF />
      <ChangeCVFont />
    </section>
  );
}

import { useState } from "react";
import Dialog from "./Dialog";
import Dropdown from "./Dropdown";
import EditCVBasics from "./EditCVBasics";
import EditCVSection from "./EditCVSection";

export default function CVEdit({ sections, info, setInfo, setSections }) {
  const [openDropdown, setOpenDropdown] = useState(false);

  const dropdowns = Object.entries(sections).map(
    ([sectionName, subSections]) => {
      const dialogs = subSections.map((subSection, index) => {
        return (
          <Dialog name={subSection.place} key={subSection.id}>
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
        <Dropdown title={sectionName} key={sectionName} openDropdown={openDropdown} setOpenDropdown={setOpenDropdown}>
          {dialogs}
        </Dropdown>
      );
    },
  );
  return (
    <section className="CV-edit">
      <EditCVBasics info={info} setInfo={setInfo} />
      {dropdowns}
    </section>
  );
}

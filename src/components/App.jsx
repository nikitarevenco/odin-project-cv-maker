import { useState } from "react";
import "../styles/App.css";
import CV from "./CV";
import { initialInfo, initialSections } from "../data/initial-info";
import EditCVBasics from "./EditCVBasics";
import Dropdown from "./Dropdown";
import Dialog from "./Dialog";
import EditCVSection from "./EditCVSection";

function App() {
  const [info, setInfo] = useState(initialInfo);
  const [sections, setSections] = useState(initialSections);
  const dropdowns = Object.entries(sections).map(
    ([sectionName, subSections]) => {
      const dialogs = subSections.map((subSection, index) => {
        console.log(subSection);
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
      return <Dropdown title={sectionName} key={sectionName}>{dialogs}</Dropdown>;
    },
  );

  return (
    <>
      <EditCVBasics info={info} setInfo={setInfo} />
      {dropdowns}
      <CV info={info} sections={sections} />
    </>
  );
}

export default App;

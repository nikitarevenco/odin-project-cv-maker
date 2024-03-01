import { useState } from "react";
import "../styles/App.css";
import CV from "./CV";
import { initialInfo, initialSections } from "../data/initial-info";
import EditCVBasics from "./EditCVBasics";

function App() {
  const [info, setInfo] = useState(initialInfo);
  const [sections, setSections] = useState(initialSections);

  const CVSectionEdit = Object.entries(sections).map((section) => {
    <EditCVSection section={section} />;
  });

  return (
    <>
      <EditCVBasics info={info} setInfo={setInfo} />
      {CVSectionEdit}
      <CV info={info} sections={sections} />
    </>
  );
}

export default App;

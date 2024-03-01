import { useState } from "react";
import "../styles/App.css";
import CV from "./CV";
import { initialInfo, initialSections } from "../data/initial-info";
import EditCVBasics from "./EditCVBasics";
import Dropdown from "./Dropdown";

function App() {
  const [info, setInfo] = useState(initialInfo);
  const [sections, setSections] = useState(initialSections);

  const CVSectionEdit = Object.entries(sections).map((section) => {
    return <CVSectionTeaser section={section} />;
  });

  return (
    <>
      <EditCVBasics info={info} setInfo={setInfo} />
      <Dropdown>{CVSectionEdit}</Dropdown>
      <CV info={info} sections={sections} />
    </>
  );
}

export default App;

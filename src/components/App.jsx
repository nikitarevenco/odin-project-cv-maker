import { useState } from "react";
import "../styles/App.css";
import CV from "./CV";
import { initialInfo, initialSections } from "../data/initial-info";
import CVEdit from "./CVEdit";

function App() {
  const [info, setInfo] = useState(initialInfo);
  const [sections, setSections] = useState(initialSections);

  return (
    <>
      <CVEdit
        sections={sections}
        info={info}
        setInfo={setInfo}
        setSections={setSections}
      />

      <CV info={info} sections={sections} />
    </>
  );
}

export default App;

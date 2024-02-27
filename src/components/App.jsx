import { useState } from "react";
import "./App.css";
import CV from "./CV";
import { initialInfo, initialSections } from "../data/initial-info";

function App() {
  const [info, setInfo] = useState(initialInfo);
  const [sections, setSections] = useState(initialSections);
  return (
    <>
      <CV info={info} sections={sections}></CV>
    </>
  );
}

export default App;

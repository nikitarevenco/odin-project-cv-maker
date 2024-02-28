import { useState } from "react";
import "../styles/App.css";
import CV from "./CV";
import { initialInfo, initialSections } from "../data/initial-info";

function App() {
  const [info, setInfo] = useState(initialInfo);
  const [sections, setSections] = useState(initialSections);
  return <CV info={info} sections={sections} />;
}

export default App;

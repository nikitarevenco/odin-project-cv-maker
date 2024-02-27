import { useState } from "react";
import "./App.css";
import CV from "./CV";

function App({ initialInfo }) {
  const [basicInfo, setBasicInfo] = useState({
    name: initialInfo.name,
    location: initialInfo.location,
    email: initialInfo.email,
    phone: initialInfo.phone,
  });
  return (
    <>
      <CV basicInformation={basicInfo}></CV>
    </>
  );
}

export default App;

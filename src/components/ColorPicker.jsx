import { useState } from "react";
import "../styles/color-picker.css";

export default function ColorPicker() {
  const [value, setValue] = useState("#112444");
  function handleChange(e) {
    setValue(e.target.value);
    document.body.style.setProperty("--cv-color", e.target.value);
  }
  return (
    <input
      onChange={(e) => handleChange(e)}
      type="color"
      value={value}
      className="color-picker"
    />
  );
}

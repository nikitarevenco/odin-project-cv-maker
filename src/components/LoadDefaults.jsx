import {
  initialInfo,
  initialSections,
} from "../data/initial-info";

export default function LoadDefaults({ setInfo, setSections }) {
  function handleClick() {
    setSections(initialSections);
    setInfo(initialInfo);
  }
  return (
    <button onClick={handleClick} type="button">
      Load Defaults
    </button>
  );
}
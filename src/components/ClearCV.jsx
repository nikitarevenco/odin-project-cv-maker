import {
  emptyInfo,
  emptySections,
} from "../data/initial-info";

export default function ClearCV({setInfo, setSections}) {
  function handleClick() {
    setSections(emptySections);
    setInfo(emptyInfo);
  }
  return (
    <button onClick={handleClick} type="button">
      Clear CV
    </button>
  );
}
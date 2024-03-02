export default function AddDropdownItem({
  sectionName,
  fullSections,
  setSections,
}) {
  const experience = {
    description: "",
    footnote: "",
    location: "",
    period: "",
    place: "",
    id: crypto.randomUUID(),
  };
  const fieldChanged = [...fullSections[sectionName], experience];
  function handleClick() {
    setSections({ ...fullSections, [sectionName]: fieldChanged });
  }
  return (
    <button onClick={handleClick} type="button">
      Add new item
    </button>
  );
}

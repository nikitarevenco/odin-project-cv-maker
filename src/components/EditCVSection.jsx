export default function EditCVSection({
  sectionName,
  fullSections,
  sectionIndexToEdit,
  setSections,
}) {
  const currentSection = fullSections[sectionName][sectionIndexToEdit];
  const inputs = Object.entries(currentSection).filter(([field]) => field !== 'id').map(([field, value]) => {
    return (
      <section key={field}>
        <p className="input-description">Enter: {field}</p>
        <input
          value={value}
          onChange={(event) => {

            const fieldChanged = fullSections[sectionName].toSpliced(sectionIndexToEdit, 1, { ...currentSection, [field]: event.target.value })

            setSections({
              ...fullSections,
              [sectionName]: fieldChanged,
            });
          }}
        />
      </section>
    );
  });

  return <>{inputs}</>;
}

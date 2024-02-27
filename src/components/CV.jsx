export default function CV({ basicInformation, sections }) {
  return (
    <>
      <CVHeader information={basicInformation}></CVHeader>
      <CVBody sections={sections} />
    </>
  );
}

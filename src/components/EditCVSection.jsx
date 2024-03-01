import EditCVBasics from './EditCVBasics';
export default function CVSectionTeaser([sectionName, sectionContent]) {
  const subSection = Object.entries(sectionContent).map(
    ([subSectionName, subSectionContent]) => {
      <EditCVBasics info={} setInfo={}></EditCVBasics>
    },
  );

  return <button></button>
}
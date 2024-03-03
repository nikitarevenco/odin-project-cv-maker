export default function ChangeCVFont() {
  function handleClick(fontFamily) {
    document.body.style.setProperty(
      "--cv-font-family",
      `${JSON.stringify(fontFamily)}`,
    );
  }

  const fontFamilies = [
    "Impact",
    "Verdana",
    "Lucida Sans",
    "monospace",
    "Arial",
  ];
  const fontFamilyButtons = fontFamilies.map((fontFamily) => {
    return (
      <button
        onClick={() => handleClick(fontFamily)}
        className="change-font-family"
        key={fontFamily}
        type="button"
      >
        {fontFamily}
      </button>
    );
  });
  return <div>{fontFamilyButtons}</div>;
}

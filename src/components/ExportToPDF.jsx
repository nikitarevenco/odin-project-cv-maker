import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default function ExportPDF() {
  function savePDF() {
    const exported = document.querySelector(".CV");
    html2canvas(exported).then((canvas) => {
      const imgData = canvas.toDataURL("img/png");
      const doc = new jsPDF("p", "mm", "a4");
      const componentWidth = doc.internal.pageSize.getWidth();
      const componentHeight = doc.internal.pageSize.getHeight();
      doc.addImage(imgData, "PNG", 0, 0, componentWidth, componentHeight);
      doc.save("cv.pdf");
    });
  }
  return (
    <button type="button" onClick={savePDF}>
      Save PDF
    </button>
  );
}

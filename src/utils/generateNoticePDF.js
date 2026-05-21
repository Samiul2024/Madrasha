import jsPDF from "jspdf";

export const generateNoticePDF = ({
  title,
  body,
  filename,
}) => {
  const doc = new jsPDF();

  doc.setFontSize(20);

  doc.text(title, 20, 25);

  doc.setFontSize(12);

  const lines =
    doc.splitTextToSize(
      body,
      170
    );

  doc.text(lines, 20, 45);

  doc.save(filename);
};

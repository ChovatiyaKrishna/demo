import { PDFDocument, rgb } from "pdf-lib";

export async function addTextToPDF(file, pageNumber, x, y, text) {
  let arrayBuffer;

  if (file instanceof Blob) {
    arrayBuffer = await file.arrayBuffer();
  } 
  else if (typeof file === "string") {
    arrayBuffer = await fetch(file).then(res => res.arrayBuffer());
  } 
  else {

    arrayBuffer = file;
  }

  const pdfDoc = await PDFDocument.load(arrayBuffer);

  const pages = pdfDoc.getPages();
  const page = pages[pageNumber - 1];

  page.drawText(text, {
    x,
    y,
    size: 12,
    color: rgb(0, 0, 0),
  });

  const pdfBytes = await pdfDoc.save();
  return new Blob([pdfBytes], { type: "application/pdf" });
}

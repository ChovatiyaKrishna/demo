  import React, { useState } from "react";
  import { Document, Page, pdfjs } from "react-pdf";

  pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

  const PDFPreview = ({ file, onAddText }) => {
    const [pages, setPages] = useState(null);
    const [clickPos, setClickPos] = useState(null);

    const handlePageClick = (event, pageNumber) => {
      const rect = event.currentTarget.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top; 
       const pdfY = rect.height - y;
      setClickPos({ x, y,pdfY, pageNumber });
    };

    return (
      <div style={{ position: "relative" }}>
        <Document
          file={file}
          onLoadSuccess={({ numPages }) => setPages(numPages)}
        >
          {Array.from(new Array(pages), (_, i) => (
            <div
              key={i}
              style={{ position: "relative" }}
              onClick={(e) => handlePageClick(e, i + 1)}
            >
             <Page pageNumber={i+1} renderTextLayer={false} />
            </div>
          ))}
        </Document>

        {clickPos && (
          <input
            autoFocus
            style={{
              position: "absolute",
              top: `${clickPos.y}px`,
              left: `${clickPos.x}px`,
              background: "white",
              outline:'none'
            }}
            onBlur={(e) => {
              if (e.target.value.trim()) {
                onAddText(
                  file,
                  clickPos.pageNumber,
                  clickPos.x,
                  clickPos.pdfY,
                  e.target.value
                );
              }
              setClickPos(null);
            }}
          />
        )}
      </div>
    );
  };

  export default PDFPreview;

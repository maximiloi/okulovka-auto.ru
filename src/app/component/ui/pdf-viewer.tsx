"use client";

import { useEffect, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface PDFViewerComponentProps {
  src: string;
}

export default function PdfViewer({ src }: PDFViewerComponentProps) {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageWidth, setPageWidth] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  useEffect(() => {
    function updateWidth() {
      const container = containerRef.current;
      if (container) {
        const containerWidth = container.offsetWidth;

        // Подбираем количество колонок из Tailwind классов
        let columns = 1;
        if (window.innerWidth >= 1024) {
          columns = 3; // lg:grid-cols-3
        } else if (window.innerWidth >= 768) {
          columns = 2; // md:grid-cols-2
        }

        const gap = 8;
        const totalGap = gap * (columns - 1);
        const columnWidth = (containerWidth - totalGap) / columns;

        setPageWidth(columnWidth);
      }
    }

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <div ref={containerRef}>
      <Document
        file={src}
        onLoadSuccess={onDocumentLoadSuccess}
        className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
      >
        {numPages &&
          Array.from(new Array(numPages), (_, index) => (
            <Page
              key={`page_${index + 1}`}
              pageNumber={index + 1}
              width={pageWidth}
            />
          ))}
      </Document>
    </div>
  );
}

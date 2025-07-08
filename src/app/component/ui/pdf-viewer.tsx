"use client";

import { usePathname } from "next/navigation";
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
  const pathname = usePathname();

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  useEffect(() => {
    function updateWidth() {
      const container = containerRef.current;
      if (container) {
        const containerWidth = container.offsetWidth;

        // Если адрес содержит "document", используем 3 колонки, иначе 1
        const isDocumentPath = pathname.includes("document");
        const columns = isDocumentPath ? 3 : 1;

        const gap = 8;
        const totalGap = gap * (columns - 1);
        const columnWidth = (containerWidth - totalGap) / columns;

        setPageWidth(columnWidth);
      }
    }

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, [pathname]);

  const isDocumentPath = pathname.includes("document");

  const gridClass = isDocumentPath
    ? "grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
    : "grid gap-4 grid-cols-1";

  return (
    <div ref={containerRef}>
      <Document
        file={src}
        onLoadSuccess={onDocumentLoadSuccess}
        className={gridClass}
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

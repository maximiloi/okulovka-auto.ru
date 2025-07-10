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
      if (!container) return;

      const containerWidth = container.offsetWidth;
      const isDocumentPath = pathname.includes("document");

      let columns = 1;
      const screenWidth = window.innerWidth;

      // На маленьких экранах — всегда 1 колонка
      if (screenWidth >= 1024 && isDocumentPath) {
        columns = 3;
      }

      const gap = 8;
      const totalGap = gap * (columns - 1);
      const columnWidth = (containerWidth - totalGap) / columns;

      setPageWidth(columnWidth);
    }

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, [pathname]);

  const isDocumentPath = pathname.includes("document");

  const gridClass = isDocumentPath
    ? "grid gap-4 grid-cols-1 lg:grid-cols-3"
    : "grid gap-4 grid-cols-1";

  return (
    <div ref={containerRef}>
      <Document
        file={src}
        onLoadSuccess={onDocumentLoadSuccess}
        className={gridClass}
      >
        {numPages &&
          Array.from({ length: numPages }, (_, index) => (
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

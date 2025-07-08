"use client";

import dynamic from "next/dynamic";

const PdfViewerClient = dynamic(() => import("@/app/component/ui/pdf-viewer"), {
  ssr: false,
});

export default PdfViewerClient;

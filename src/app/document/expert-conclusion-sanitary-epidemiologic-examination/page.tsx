"use client";

import dynamic from "next/dynamic";

const PdfViewer = dynamic(() => import("../../component/ui/pdf-viewer"), {
  ssr: false,
});

function Page() {
  return (
    <section className="container mx-auto flex flex-col gap-8 px-4 py-8">
      <h2 className="text-3xl font-bold">
        Экспертное заключение санитарно-эпидемиологической экспертизы
      </h2>

      <PdfViewer src="/docs/expert-conclusion-sanitary-epidemiologic-examination.pdf" />
    </section>
  );
}

export default Page;

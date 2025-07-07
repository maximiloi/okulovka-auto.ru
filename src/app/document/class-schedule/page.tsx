"use client";

import dynamic from "next/dynamic";

const PdfViewer = dynamic(() => import("../../component/ui/pdf-viewer"), {
  ssr: false,
});

function Page() {
  return (
    <section className="container mx-auto flex flex-col gap-8 px-4 py-8">
      <h2 className="text-3xl font-bold">Режим занятий</h2>

      <PdfViewer src="/docs/class-schedule.pdf" />
    </section>
  );
}

export default Page;

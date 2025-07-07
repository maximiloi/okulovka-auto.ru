"use client";

import dynamic from "next/dynamic";

const PdfViewer = dynamic(() => import("../../component/ui/pdf-viewer"), {
  ssr: false,
});

function Page() {
  return (
    <section className="container mx-auto flex flex-col gap-8 px-4 py-8">
      <h2 className="text-3xl font-bold">Договор аренды нежилых помещений</h2>

      <PdfViewer src="/docs/contract-lease-non-residential-premises.pdf" />
    </section>
  );
}

export default Page;

import { Metadata } from "next";

import PdfViewerClient from "@/lib/pdf-viewer-client";

export const metadata: Metadata = {
  title: "Образец договора | Автошкола | ООО «Компания АВТО ОНЛАЙН»",
  description:
    "Образец договора, заключаемого с автошколой ООО «Компания АВТО ОНЛАЙН».",
};

function Page() {
  return (
    <section className="container mx-auto flex flex-col gap-8 px-4 py-8">
      <h2 className="text-3xl font-bold">Образец договора</h2>
      <PdfViewerClient src="/docs/sample-contract.pdf" />
    </section>
  );
}

export default Page;

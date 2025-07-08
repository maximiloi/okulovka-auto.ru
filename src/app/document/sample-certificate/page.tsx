import { Metadata } from "next";

import PdfViewerClient from "@/lib/pdf-viewer-client";

export const metadata: Metadata = {
  title: "Образец свидетельства | Автошкола | ООО «Компания АВТО ОНЛАЙН»",
  description:
    "Образец свидетельства, выдаваемого автошколой ООО «Компания АВТО ОНЛАЙН».",
};

function Page() {
  return (
    <section className="container mx-auto flex flex-col gap-8 px-4 py-8">
      <h2 className="text-3xl font-bold">Образец свидетельства</h2>
      <PdfViewerClient src="/docs/sample-certificate.pdf" />
    </section>
  );
}

export default Page;

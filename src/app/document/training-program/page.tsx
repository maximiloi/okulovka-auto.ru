import { Metadata } from "next";

import PdfViewerClient from "@/lib/pdf-viewer-client";

export const metadata: Metadata = {
  title: "Учебная программа | Автошкола | ООО «Компания АВТО ОНЛАЙН»",
  description: "Учебная программа автошколы ООО «Компания АВТО ОНЛАЙН».",
};

function Page() {
  return (
    <section className="container mx-auto flex flex-col gap-8 px-4 py-8">
      <h2 className="text-3xl font-bold">Учебная программа</h2>
      <PdfViewerClient src="/docs/training-program.pdf" />
    </section>
  );
}

export default Page;

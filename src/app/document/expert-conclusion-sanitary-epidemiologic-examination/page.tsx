import { Metadata } from "next";

import PdfViewerClient from "@/lib/pdf-viewer-client";

export const metadata: Metadata = {
  title:
    "Экспертное заключение санитарно-эпидемиологической экспертизы | Автошкола | ООО «Компания АВТО ОНЛАЙН»",
  description:
    "Экспертное заключение санитарно-эпидемиологической экспертизы автошколы ООО «Компания АВТО ОНЛАЙН».",
};

function Page() {
  return (
    <section className="container mx-auto flex flex-col gap-8 px-4 py-8">
      <h2 className="text-3xl font-bold">
        Экспертное заключение санитарно-эпидемиологической экспертизы
      </h2>
      <PdfViewerClient src="/docs/expert-conclusion-sanitary-epidemiologic-examination.pdf" />
    </section>
  );
}

export default Page;

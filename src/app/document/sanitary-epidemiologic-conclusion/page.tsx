import { Metadata } from "next";

import PdfViewerClient from "@/lib/pdf-viewer-client";

export const metadata: Metadata = {
  title:
    "Санитарно-эпидемиологическое заключение | Автошкола | ООО «Компания АВТО ОНЛАЙН»",
  description:
    "Санитарно-эпидемиологическое заключение автошколы ООО «Компания АВТО ОНЛАЙН».",
};

function Page() {
  return (
    <section className="container mx-auto flex flex-col gap-8 px-4 py-8">
      <h2 className="text-3xl font-bold">
        Санитарно-эпидемиологическое заключение
      </h2>
      <PdfViewerClient src="/docs/sanitary-epidemiologic-conclusion.pdf" />
    </section>
  );
}

export default Page;

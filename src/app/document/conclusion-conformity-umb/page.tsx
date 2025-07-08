import { Metadata } from "next";

import PdfViewerClient from "@/lib/pdf-viewer-client";

export const metadata: Metadata = {
  title:
    "Заключение о соответствии учебно-материальной базы | Автошкола | ООО «Компания АВТО ОНЛАЙН»",
  description:
    "Заключение о соответствии учебно-материальной базы автошколы ООО «Компания АВТО ОНЛАЙН» установленным требованиям.",
};

function Page() {
  return (
    <section className="container mx-auto flex flex-col gap-8 px-4 py-8">
      <h2 className="text-3xl font-bold">
        Заключение о соответствии учебно-материальной базы
      </h2>
      <PdfViewerClient src="/docs/conclusion-conformity-umb.pdf" />
    </section>
  );
}

export default Page;

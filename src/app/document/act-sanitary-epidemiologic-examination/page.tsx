import PdfViewerClient from "@/lib/pdf-viewer-client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Акт санитарно-эпидемиологического обследования | Автошкола | ООО «Компания АВТО ОНЛАЙН»",
  description:
    "Акт санитарно-эпидемиологического обследования автошколы ООО «Компания АВТО ОНЛАЙН» — официальный документ.",
};

function Page() {
  return (
    <section className="container mx-auto flex flex-col gap-8 px-4 py-8">
      <h2 className="text-3xl font-bold">
        Акт санитарно-эпидемиологического обследования
      </h2>

      <PdfViewerClient src="/docs/act-sanitary-epidemiologic-examination.pdf" />
    </section>
  );
}

export default Page;

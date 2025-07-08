import { Metadata } from "next";

import PdfViewerClient from "@/lib/pdf-viewer-client";

export const metadata: Metadata = {
  title:
    "Договор аренды нежилых помещений | Автошкола | ООО «Компания АВТО ОНЛАЙН»",
  description:
    "Договор аренды нежилых помещений автошколы ООО «Компания АВТО ОНЛАЙН».",
};

function Page() {
  return (
    <section className="container mx-auto flex flex-col gap-8 px-4 py-8">
      <h2 className="text-3xl font-bold">Договор аренды нежилых помещений</h2>
      <PdfViewerClient src="/docs/contract-lease-non-residential-premises.pdf" />
    </section>
  );
}

export default Page;

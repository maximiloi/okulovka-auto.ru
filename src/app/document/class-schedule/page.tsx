import { Metadata } from "next";

import PdfViewerClient from "@/lib/pdf-viewer-client";

export const metadata: Metadata = {
  title: "Режим занятий | Автошкола | ООО «Компания АВТО ОНЛАЙН»",
  description:
    "Режим занятий автошколы ООО «Компания АВТО ОНЛАЙН» — расписание учебных занятий.",
};

function Page() {
  return (
    <section className="container mx-auto flex flex-col gap-8 px-4 py-8">
      <h2 className="text-3xl font-bold">Режим занятий</h2>

      <PdfViewerClient src="/docs/class-schedule.pdf" />
    </section>
  );
}

export default Page;

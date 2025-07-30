import { Metadata } from "next";

import PdfViewerClient from "@/lib/pdf-viewer-client";

export const metadata: Metadata = {
  title: "График вождения | Автошкола | ООО «Компания АВТО ОНЛАЙН»",
  description:
    "График вождения автошколы ООО «Компания АВТО ОНЛАЙН» — расписание практических занятий студентов.",
};

function Page() {
  return (
    <section className="container mx-auto flex flex-col gap-8 px-4 py-8">
      <h2 className="text-3xl font-bold">График вождения</h2>
      <p className="text-sm">
        *Расписание может меняться. Чтобы быть в курсе актуальных обновлений —
        подпишитесь на наш Telegram-бот.
      </p>

      <PdfViewerClient src="/grafic/187-760e313c-e2cf-4998-9867-1bb5d21be5ee.pdf" />
      <PdfViewerClient src="/grafic/188-216a8136-bed8-4b4d-a02c-2a7510ecd3f0.pdf" />
      <PdfViewerClient src="/grafic/189-c4aad042-2db5-46b4-af41-e3c866010da5.pdf" />
    </section>
  );
}

export default Page;

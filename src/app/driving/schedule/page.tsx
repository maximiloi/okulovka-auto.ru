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

      <PdfViewerClient src="/grafic/187-955e9971-2589-4825-90e6-9d979d0fb00c.pdf" />
      <PdfViewerClient src="/grafic/188-a6f75440-08b0-4eab-8b77-5b134bff4887.pdf" />
    </section>
  );
}

export default Page;

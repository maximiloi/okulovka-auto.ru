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

      <PdfViewerClient src="/grafic/469a3c46-78d7-43ea-8d7d-8b338c570487.pdf" />
      <PdfViewerClient src="/grafic/44b2e795-6801-4bbf-ad82-cab174696520.pdf" />
    </section>
  );
}

export default Page;

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

      <PdfViewerClient src="/grafic/67595f07-3bb8-4436-b1d9-25b42f4a65b0.pdf" />
      <PdfViewerClient src="/grafic/0b045898-2167-4b86-8265-9ba6b00ab610.pdf" />
    </section>
  );
}

export default Page;

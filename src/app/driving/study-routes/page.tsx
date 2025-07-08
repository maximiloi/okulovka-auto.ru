import { Metadata } from "next";

import PdfViewerClient from "@/lib/pdf-viewer-client";

export const metadata: Metadata = {
  title: "Учебные маршруты | Автошкола | ООО «Компания АВТО ОНЛАЙН»",
  description: "Учебные маршруты автошколы ООО «Компания АВТО ОНЛАЙН»",
};

function Page() {
  return (
    <section className="container mx-auto flex flex-col gap-8 px-4 py-8">
      <h2 className="text-3xl font-bold">Учебные маршруты</h2>
      <p className="text-sm">
        *Расписание может меняться. Чтобы быть в курсе актуальных обновлений —
        подпишитесь на наш Telegram-бот.
      </p>

      <PdfViewerClient src="/docs/study-routes.pdf" />
    </section>
  );
}

export default Page;

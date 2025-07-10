import { Metadata } from "next";

import Timetable from "@/markdown/timetable.mdx";

export const metadata: Metadata = {
  title:
    "Расписание занятий автошколы | Автошкола | ООО «Компания АВТО ОНЛАЙН»",
  description:
    "Актуальное расписание занятий по теоретической и практической подготовке водителей категории «В». Индивидуальные графики вождения, удобные группы по выходным.",
  keywords: [
    "автошкола расписание",
    "график занятий автошкола",
    "практика вождения",
    "теория вождения",
    "обучение водителей",
    "категория В",
  ],
};

function Page() {
  return (
    <section className="container mx-auto px-4 py-8">
      <div className="prose prose-lg max-w-full">
        <Timetable />
      </div>
    </section>
  );
}

export default Page;

import { Metadata } from "next";

import Enrollment from "@/markdown/enrollment.mdx";

export const metadata: Metadata = {
  title:
    "Обучение в автошколе — Набор открыт | Автошкола | ООО «Компания АВТО ОНЛАЙН»",
  description:
    "Запишитесь в автошколу на категорию «В». Старт новых групп, обучение с 16 лет, рассрочка, опытные инструкторы и 56 часов практики. Звоните и записывайтесь уже сегодня!",
};

function Page() {
  return (
    <section className="container mx-auto px-4 py-8">
      <div className="prose prose-lg max-w-full">
        <Enrollment />
      </div>
    </section>
  );
}

export default Page;

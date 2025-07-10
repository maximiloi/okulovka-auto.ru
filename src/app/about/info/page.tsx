import { Metadata } from "next";

import Info from "@/markdown/info.mdx";

export const metadata: Metadata = {
  title: "О нас | Автошкола | ООО «Компания АВТО ОНЛАЙН» ",
  description:
    "Информация об автошколе: лицензия, режим работы, контактные данные и статистика обучающихся. Надёжное обучение вождению с 2008 года.",
  keywords: [
    "автошкола Окуловка",
    "обучение вождению",
    "лицензия автошколы",
    "контакты автошколы",
    "режим работы автошколы",
  ],
};

function Page() {
  return (
    <section className="container mx-auto px-4 py-8">
      <div className="prose prose-lg max-w-full">
        <Info />
      </div>
    </section>
  );
}

export default Page;

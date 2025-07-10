import { Metadata } from "next";

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
      <h2 className="text-3xl font-bold">Как нас найти</h2>
      <div className="grid">
        <p>
          Новгородская область, г. Окуловка, ул. Володарского, д. 43 («Новобанк»
          второй этаж, вход со двора)
        </p>
        Добавить карту
      </div>
    </section>
  );
}

export default Page;

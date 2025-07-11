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

const yandexMapsApi = process.env.YANDEX_MAPS_API;

function Page() {
  return (
    <section className="container mx-auto grid gap-4 px-4 py-8">
      <h2 className="text-3xl font-bold">Как нас найти</h2>
      <div className="grid gap-4 lg:grid-cols-2">
        <img
          src={`https://static-maps.yandex.ru/v1?lang=ru_RU&ll=33.297736,58.376164&z=17&size=550,350&apikey=${yandexMapsApi}&pt=33.297736,58.376164,comma`}
          width="550"
          height="350"
          alt="карта"
        />
        <div className="grid gap-2">
          <p>
            Новгородская область, г. Окуловка, ул. Володарского, д. 43 <br />
            («Новобанк» второй этаж, вход со двора)
          </p>
          <h3 className="text-xl font-bold">Время приёма заявлений:</h3>
          <p>
            Будние дни: с 09:00 до 14:00
            <br /> Выходные дни: с 11:00 до 15:00
          </p>
          <h3 className="text-xl font-bold">Телефоны для записи:</h3>{" "}
          <p>
            8 (81657) 222-14
            <br /> +7 921 690-19-75
          </p>
        </div>
      </div>
    </section>
  );
}

export default Page;

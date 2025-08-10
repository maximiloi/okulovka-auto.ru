import { Metadata } from "next";

export const metadata: Metadata = {
  title: "График вождения | Автошкола | ООО «Компания АВТО ОНЛАЙН»",
  description:
    "График вождения автошколы ООО «Компания АВТО ОНЛАЙН» — расписание практических занятий студентов.",
};

function Page() {
  return (
    <section className="container mx-auto flex flex-col gap-8 px-4 py-8">
      <h2 className="text-3xl font-bold">График вождения</h2>
      <p className="text-lg">
        Студенты могут смотреть актуальное расписание практических занятий по
        вождению в нашем Telegram-боте.
      </p>
      <p className="text-lg">
        Для регистрации используйте QR-код, указанный в вашем договоре.
      </p>
      <p className="text-sm">*Расписание может меняться.</p>
    </section>
  );
}

export default Page;

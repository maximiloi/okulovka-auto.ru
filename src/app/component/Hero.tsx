import { Car } from "lucide-react";
import Image from "next/image";

function Hero() {
  return (
    <section className="container mx-auto grid gap-8 px-4 py-8 md:grid-cols-3 md:gap-8">
      <div className="flex flex-col gap-8 md:col-span-2">
        <h2 className="text-3xl font-bold">
          Автошкола АВТО ОНЛАЙН — ваш путь к уверенному вождению!
        </h2>
        <p>
          С 2008 года мы готовим надёжных и уверенных водителей категории «В».
          Наша автошкола — это сочетание опыта, современных подходов к обучению
          и индивидуального внимания к каждому ученику.
        </p>
        <p>
          Мы работаем на основании бессрочной лицензии Л035-01280-53/00387435,
          выданной Министерством образования Новгородской области 1 сентября
          2015 года.
        </p>
        <h3 className="text-xl font-bold">
          Наша миссия — профессиональная подготовка водителей
        </h3>
        <p>
          Автошкола Авто Онлайн предлагает качественное обучение по программе
          подготовки водителей транспортных средств категории «В». Обучение
          проходит под руководством опытных инструкторов, в комфортной и
          доброжелательной атмосфере.
        </p>
        <p>Почему выбирают нас:</p>
        <ul className="grid gap-2">
          <li className="align-center flex gap-4">
            <Car className="text-primary h-6 w-6 shrink-0" />
            Подготовка к экзамену в ГИБДД — от теории до практики.
          </li>
          <li className="align-center flex gap-4">
            <Car className="text-primary h-6 w-6 shrink-0" />
            Собственный автодром — не зависим от сторонних площадок.
          </li>
          <li className="align-center flex gap-4">
            <Car className="text-primary h-6 w-6 shrink-0" />
            Высокий процент успешной сдачи — мы готовим не &quot;на
            отвали&quot;, а по делу.
          </li>
          <li className="align-center flex gap-4">
            <Car className="text-primary h-6 w-6 shrink-0" />
            Возможна рассрочка — учиться может каждый.
          </li>
          <li className="align-center flex gap-4">
            <Car className="text-primary h-6 w-6 shrink-0" />
            Официальные документы для налогового вычета — вернём часть стоимости
            обучения.
          </li>
        </ul>
        <h3 className="text-xl font-bold">
          Учим студентов и всех, кто хочет водить уверенно
        </h3>
        <p>
          Будь вы студентом или взрослым человеком, решившим сесть за руль — мы
          подберём программу под ваши цели и график.
        </p>
      </div>
      <Image
        src="/driver-hero.jpg"
        className="hidden rounded-sm shadow md:block"
        width={400}
        height={600}
        alt="фотография Окуловки из авто"
        priority
      />
    </section>
  );
}

export default Hero;

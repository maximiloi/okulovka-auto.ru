"use client";

import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

const classroomImages = [
  { src: "/classroom01.jpg", alt: "Учебная аудитория фото 1" },
  { src: "/classroom02.jpg", alt: "Учебная аудитория фото 2" },
  { src: "/classroom03.jpg", alt: "Учебная аудитория фото 3" },
  { src: "/classroom04.jpg", alt: "Учебная аудитория фото 4" },
  { src: "/classroom05.jpg", alt: "Учебная аудитория фото 5" },
  { src: "/classroom06.jpg", alt: "Учебная аудитория фото 6" },
  { src: "/classroom07.jpg", alt: "Учебная аудитория фото 7" },
];

function Classroom() {
  return (
    <section className="container mx-auto grid gap-8 px-4 py-8">
      <h2 className="text-3xl font-bold">
        Аудитория по теоретической подготовке
      </h2>
      <div className="grid gap-8 lg:grid-cols-2">
        <p className="md:text-lg">
          Аудитория расположена по адресу: г. Окуловка, ул. Володарского, д. 43
          («Новобанк» второй этаж).
        </p>
        <p className="md:text-lg">
          В нашей автошколе предусмотрены комфортные аудитории для теоретических
          занятий, где ученики могут изучать правила дорожного движения и основы
          безопасного вождения.
        </p>
        <p className="md:text-lg">
          Преподаватели прошли подготовку в г. Москва в «МААШ». Подготовка
          водителей проводится по новейшим методикам и программам,
          разработанными в «МААШ».
        </p>
        <p className="md:text-lg">
          Учебная аудитория оборудована с учетом последних Приказов и
          Наставлений «Комитета образования, науки и молодежной политики
          Новгородской области». Учебный класс обеспечен 12 учебными
          компьютерными местами, и материальной базой по теоретической
          подготовке. Программы ведут статистический, персональный учет
          успеваемости. В классе установлены программы: «Видео курс по ПДД» и
          «Сетевая версия для экзаменационных подразделений ГИБДД и Автошкол»
          разработка «МААШ».
        </p>
      </div>
      <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent>
          {classroomImages.map((img, index) => (
            <CarouselItem className="lg:basis-1/2" key={img.src}>
              <Image
                src={img.src}
                alt={img.alt}
                width={1024}
                height={687}
                priority={index === 0}
                className="rounded-sm shadow"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
    </section>
  );
}

export default Classroom;

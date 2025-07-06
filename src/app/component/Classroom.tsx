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

function Classroom() {
  return (
    <section className="container mx-auto px-4 py-8">
      <h2 className="mb-4 text-3xl font-bold">
        Аудитория по теоретической подготовке
      </h2>
      <p className="my-4 text-lg lg:columns-2 lg:gap-x-8">
        В нашей автошколе предусмотрены комфортные аудитории для теоретических
        занятий, где ученики могут изучать правила дорожного движения и основы
        безопасного вождения. Преподаватели прошли подготовку в г. Москва в
        «МААШ». Подготовка водителей проводится по новейшим методикам и
        программам, разработанными в «МААШ».
      </p>

      <p className="my-4 text-lg lg:columns-2 lg:gap-x-8">
        Аудитория расположена по адресу: г. Окуловка, ул. Володарского, д. 43
        («Новобанк» второй этаж).
      </p>

      <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent>
          <CarouselItem className="lg:basis-1/2">
            <Image
              src="/classroom01.jpg"
              alt="Classroom 1"
              width={1024}
              height={687}
            />
          </CarouselItem>
          <CarouselItem className="lg:basis-1/2">
            <Image
              src="/classroom02.jpg"
              alt="Classroom 2"
              width={1024}
              height={687}
            />
          </CarouselItem>
          <CarouselItem className="lg:basis-1/2">
            <Image
              src="/classroom03.jpg"
              alt="Classroom 3"
              width={1024}
              height={687}
            />
          </CarouselItem>
          <CarouselItem className="lg:basis-1/2">
            <Image
              src="/classroom04.jpg"
              alt="Classroom 34"
              width={1024}
              height={687}
            />
          </CarouselItem>
          <CarouselItem className="lg:basis-1/2">
            <Image
              src="/classroom05.jpg"
              alt="Classroom 5"
              width={1024}
              height={687}
            />
          </CarouselItem>
          <CarouselItem className="lg:basis-1/2">
            <Image
              src="/classroom06.jpg"
              alt="Classroom 6"
              width={1024}
              height={687}
            />
          </CarouselItem>
          <CarouselItem className="lg:basis-1/2">
            <Image
              src="/classroom07.jpg"
              alt="Classroom 7"
              width={1024}
              height={687}
            />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}

export default Classroom;

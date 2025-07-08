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

const autodromeImages = [
  { src: "/autodrom-02.jpg", alt: "фото автодрома" },
  { src: "/autodrom-03.jpg", alt: "фото автодрома" },
  { src: "/autodrom-04.jpg", alt: "фото автодрома" },
  { src: "/autodrom-05.jpg", alt: "фото автодрома" },
  { src: "/autodrom-06.jpg", alt: "фото автодрома" },
  { src: "/autodrom-07.jpg", alt: "фото автодрома" },
  { src: "/autodrom-08.jpg", alt: "фото автодрома" },
  { src: "/autodrom-09.jpg", alt: "фото автодрома" },
  { src: "/autodrom-10.jpg", alt: "фото автодрома" },
  { src: "/autodrom-12.jpg", alt: "фото автодрома" },
  { src: "/autodrom-13.jpg", alt: "фото автодрома" },
];

export default function AutodromeCarousel() {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
    >
      <CarouselContent>
        {autodromeImages.map((img, index) => (
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
  );
}

import { Car } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";

import AutodromeCarousel from "@/app/component/AutodromeCarousel";

export const metadata: Metadata = {
  title: "Автодром для обучения вождению | Автошкола Окуловка",
  description:
    "Собственный автодром автошколы ООО «Компания АВТО ОНЛАЙН» в г. Окуловка, ул. Береговая, д. 38. Схема площадки, список экзаменационных упражнений и фотогалерея. Практические занятия и подготовка к экзамену категории B.",
};

export default function Page() {
  return (
    <section className="container mx-auto grid gap-8 px-4 py-8">
      <h2 className="text-3xl font-bold">Закрытая площадка</h2>
      <p className="md:text-lg">
        Собственный автодром для обучения вождению расположен г. Окуловка, ул.
        Береговая, д. 38.
      </p>
      <h3 className="text-xl font-bold">Схема автодрома</h3>
      <div className="grid gap-8 md:grid-cols-2">
        <Image
          src="/autodrom-01.jpg"
          alt="Схема нашего автодрома"
          width={640}
          height={589}
          priority
          className="rounded-sm shadow"
        />
        <div className="grid gap-8">
          <p>
            На автодроме обычно показывают и сдают следующие основные
            упражнения, которые входят в экзамен по вождению категории В:
          </p>
          <ul className="grid gap-2">
            <li className="align-center flex gap-4">
              <Car className="text-primary h-6 w-6 shrink-0" />
              <p>
                <strong>
                  Остановка и начало движения на подъеме (эстакада, горка)
                </strong>{" "}
                — нужно остановиться на подъеме, не допустить отката назад более
                30 см при трогании с места, затем продолжить движение.
              </p>
            </li>
            <li className="align-center flex gap-4">
              <Car className="text-primary h-6 w-6 shrink-0" />
              <p>
                <strong>Повороты на 90 градусов</strong> — выполнение поворотов
                в ограниченном пространстве по заданной траектории.
              </p>
            </li>
            <li className="align-center flex gap-4">
              <Car className="text-primary h-6 w-6 shrink-0" />
              <p>
                <strong>Разворот в ограниченном пространстве</strong> — разворот
                автомобиля с использованием заднего хода, обычно в 3 приема, с
                учетом увеличенного коридора для удобства.
              </p>
            </li>
            <li className="align-center flex gap-4">
              <Car className="text-primary h-6 w-6 shrink-0" />
              <p>
                <strong>Змейка</strong> — движение между конусами или по
                извилистой линии с плавными поворотами влево и вправо, для
                отработки чувства габаритов автомобиля.
              </p>
            </li>
            <li className="align-center flex gap-4">
              <Car className="text-primary h-6 w-6 shrink-0" />
              <p>
                <strong>Заезд в гараж (бокс) задним ходом</strong> —
                маневрирование задним ходом для парковки в ограниченном
                пространстве.
              </p>
            </li>
            <li className="align-center flex gap-4">
              <Car className="text-primary h-6 w-6 shrink-0" />
              <p>
                <strong>Параллельная парковка задним ходом</strong> — парковка
                автомобиля задним ходом между двумя машинами или конусами, с
                обязательным включением задней передачи с первого раза.
              </p>
            </li>
          </ul>
          Эти упражнения направлены на проверку навыков маневрирования, контроля
          автомобиля и уверенного управления в различных ситуациях.
          Последовательность и детали выполнения могут незначительно отличаться
          в разных регионах, но в целом набор упражнений стандартен для сдачи
          экзамена на автодроме в России.
        </div>
      </div>
      <AutodromeCarousel />
    </section>
  );
}

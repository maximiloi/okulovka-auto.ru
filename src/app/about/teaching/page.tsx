import { Metadata } from "next";

import Teaching from "@/markdown/teaching.mdx";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Преподавательский состав | Автошкола | ООО «Компания АВТО ОНЛАЙН» ",
  description:
    "Познакомьтесь с преподавателями и мастерами обучения автошколы. Профессионалы с многолетним стажем подготовки водителей категории «B».",
  keywords: [
    "преподаватели автошколы",
    "инструкторы по вождению",
    "автошкола Окуловка",
    "преподавательский состав",
    "обучение вождению",
  ],
};

function Page() {
  return (
    <section className="container mx-auto grid gap-4 px-4 py-8">
      <h2 className="text-3xl font-bold">Преподавательский состав</h2>
      <div className="w-full overflow-x-auto">
        <div className="prose prose-lg max-w-full min-w-[600px]">
          <Teaching />
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        <figure>
          <Image
            src="/tech01.jpg"
            className="rounded-sm shadow"
            width={400}
            height={600}
            alt="Фотография Вялков Сергей Николаевич"
            priority
          />
          <figcaption className="mt-4">Вялков Сергей Николаевич</figcaption>
        </figure>
        <figure>
          <Image
            src="/tech02.jpg"
            className="rounded-sm shadow"
            width={420}
            height={600}
            alt="Фотография Васильев Олег Николаевич"
            priority
          />
          <figcaption className="mt-4">
            <figcaption className="mt-4">Васильев Олег Николаевич</figcaption>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

export default Page;

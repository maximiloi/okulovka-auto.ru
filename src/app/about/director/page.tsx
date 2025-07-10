import { Metadata } from "next";

import Director from "@/markdown/director.mdx";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Руководство автошколы | Автошкола | ООО «Компания АВТО ОНЛАЙН»",
  description:
    "Генеральный директор автошколы — Торощин Игорь Евгеньевич. Контактная информация: телефон, электронная почта, фотография и должность.",
  keywords: [
    "руководство автошколы",
    "директор автошколы",
    "Торощин Игорь Евгеньевич",
    "контакты автошколы",
    "администрация автошколы",
  ],
};

function Page() {
  return (
    <section className="container mx-auto grid gap-4 px-4 py-8">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="prose prose-lg max-w-full min-w-[600px]">
          <Director />
        </div>
        <figure>
          <Image
            src="/director.jpg"
            className="rounded-sm shadow"
            width={400}
            height={600}
            alt="Фотография Торощин Игорь Евгеньевич"
            priority
          />
          <figcaption className="mt-4">Торощин Игорь Евгеньевич</figcaption>
        </figure>
      </div>
    </section>
  );
}

export default Page;

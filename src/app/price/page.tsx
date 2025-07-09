import { Metadata } from "next";

import Price from "@/markdown/price.mdx";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Стоимость обучения | Автошкола | ООО «Компания АВТО ОНЛАЙН»",
  description: "Стоимость обучения в автошколе ООО «Компания АВТО ОНЛАЙН».",
};

export default function Page() {
  return (
    <section className="container mx-auto grid gap-8 px-4 py-8 md:grid-cols-2">
      <div className="prose prose-lg">
        <Price />
      </div>
      <Image
        src="/classroom06.jpg"
        alt="учебная аудитория"
        width={640}
        height={429}
        className="rounded-sm shadow"
      />
    </section>
  );
}

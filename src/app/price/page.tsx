import { Metadata } from "next";

import Price from "@/markdown/price.mdx";

export const metadata: Metadata = {
  title: "Стоимость обучения | Автошкола | ООО «Компания АВТО ОНЛАЙН»",
  description: "Стоимость обучения в автошколе ООО «Компания АВТО ОНЛАЙН».",
};

export default function Page() {
  return (
    <section className="prose prose-lg container mx-auto px-4 py-8">
      <Price />
    </section>
  );
}

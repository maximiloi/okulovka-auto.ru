import { Metadata } from "next";

import Faq from "@/markdown/faq.mdx";

export const metadata: Metadata = {
  title: "Вопросы и ответы | Автошкола | ООО «Компания АВТО ОНЛАЙН» ",
  description:
    "Ответы на часто задаваемые вопросы об обучении в автошколе, записи на курсы, сдаче экзаменов и получении водительских прав.",
  keywords: [
    "автошкола вопросы",
    "обучение вождению FAQ",
    "экзамены в автошколе",
    "получение водительских прав",
    "запись на обучение",
  ],
};

function Page() {
  return (
    <section className="container mx-auto px-4 py-8">
      <div className="prose prose-lg max-w-full">
        <Faq />
      </div>
    </section>
  );
}

export default Page;

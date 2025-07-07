"use client";

import dynamic from "next/dynamic";

const PdfViewer = dynamic(() => import("../../component/ui/pdf-viewer"), {
  ssr: false,
});

function Page() {
  return (
    <section className="container mx-auto flex flex-col gap-8 px-4 py-8">
      <h2 className="text-3xl font-bold">Лицензия</h2>
      <p className="lg:w-1/2">
        Управлением министерства внутренних дел Российской Федерации по
        Новгородской области от 29 сентября 2014 г. выдано заключение о
        соответствии установленным требованием.
      </p>
      <PdfViewer src="/docs/license.pdf" />

      <p className="lg:w-1/2">
        Выписка из реестра лицензий по состоянию на 15 июня 2022 г.
      </p>
      <PdfViewer src="/docs/extract-from-license-register.pdf" />
    </section>
  );
}

export default Page;

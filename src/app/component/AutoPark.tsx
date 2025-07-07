import Image from "next/image";

function AutoPark() {
  return (
    <section className="container mx-auto grid gap-8 px-4 py-8">
      <h2 className="text-3xl font-bold">Автопарк</h2>
      <div className="grid gap-8 lg:grid-cols-2">
        <p className="md:text-lg">
          Автопарк автошколы обеспечивает обучение вождению на современных
          автомобилях с дублирующим управлением, что позволяет безопасно обучать
          начинающих водителей.
        </p>
        <p className="md:text-lg">
          Наличие дублирующего управления позволяет инструктору контролировать
          процесс вождения и при необходимости вмешаться, что особенно важно для
          учеников, которые только начинают осваивать навыки вождения.
        </p>
      </div>
      <div className="grid">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <Image
            src="/car1.jpg"
            width={1024}
            height={682}
            alt="Автомобиль из автопарка"
            className="rounded-sm shadow"
          />
          <Image
            src="/car2.jpg"
            width={1024}
            height={682}
            alt="Автомобиль из автопарка"
            className="rounded-sm shadow"
          />
        </div>
      </div>
    </section>
  );
}

export default AutoPark;

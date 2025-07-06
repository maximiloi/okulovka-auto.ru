import Image from "next/image";

function AutoPark() {
  return (
    <section className="container mx-auto px-4 py-8">
      <h2 className="mb-4 text-3xl font-bold">Автопарк</h2>
      <p className="my-4 text-lg lg:columns-2 lg:gap-x-8">
        Автопарк автошколы обеспечивает обучение вождению на современных
        автомобилях с дублирующим управлением, что позволяет безопасно обучать
        начинающих водителей. Наличие дублирующего управления позволяет
        инструктору контролировать процесс вождения и при необходимости
        вмешаться, что особенно важно для учеников, которые только начинают
        осваивать навыки вождения.
      </p>
      <div className="grid">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Image
            src="/car1.jpg"
            width={1024}
            height={682}
            alt="Автомобиль из автопарка"
          />
          <Image
            src="/car2.jpg"
            width={1024}
            height={682}
            alt="Автомобиль из автопарка"
          />
        </div>
      </div>
    </section>
  );
}

export default AutoPark;

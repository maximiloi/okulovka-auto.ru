import Image from "next/image";

function Autodrome() {
  return (
    <section className="container mx-auto px-4 py-8">
      <h2 className="mb-4 text-3xl font-bold">Собственный автодром</h2>
      <div className="grid gap-8 lg:grid-cols-2">
        <p className="my-4 md:text-lg">
          Собственный автодром для обучения вождению расположен г. Окуловка, ул.
          Береговая, д. 38.
        </p>
        <p className="my-4 md:text-lg">
          Он позволяет проводить занятия по вождению в безопасных условиях, что
          особенно важно для начинающих водителей. Автодром оборудован
          различными элементами, имитирующими реальные дорожные условия, такими
          как перекрестки, пешеходные переходы и знаки дорожного движения. Это
          дает возможность ученикам отрабатывать навыки вождения в
          контролируемой среде, что значительно повышает эффективность обучения.
        </p>
      </div>
      <div className="md:w-1/2">
        <Image
          src="/autodrome.jpg"
          width={960}
          height={640}
          alt="Собственный автодром для обучения вождению"
          className="rounded-sm shadow"
        />
      </div>
    </section>
  );
}

export default Autodrome;

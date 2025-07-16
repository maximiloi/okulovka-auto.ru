import { Home } from "lucide-react";
import Link from "next/link";
import CarTravel from "./component/CarTravel";

export default function NotFound() {
  return (
    <section className="container mx-auto grid gap-8 px-4 py-8 md:grid-cols-2">
      <div className="flex flex-col gap-8">
        <h2 className="text-3xl font-bold">Страница не найдена</h2>
        <Link
          href="/"
          className="hover:text-primary flex items-center gap-4 text-lg text-gray-800 transition-colors duration-300"
        >
          <Home /> На главную
        </Link>
      </div>

      <CarTravel />
    </section>
  );
}

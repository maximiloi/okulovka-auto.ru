import { Mail, Phone } from "lucide-react";
import Link from "next/link";
import Nav from "./Nav";

function Header() {
  return (
    <header>
      <hr className="mb-4 border-4 border-gray-700" />
      <div className="container mx-auto items-center justify-between sm:flex">
        <div className="flex w-full flex-col items-center gap-2">
          <h1 className="w-full text-center text-2xl font-bold text-gray-800 sm:w-2/3">
            Автошкола ООО «Компания АВТО ОНЛАЙН»
          </h1>
          <Nav />
        </div>
        <div className="mt-8 flex w-full flex-col items-center gap-2 sm:mt-0 sm:w-1/3">
          <a
            href="tel:+78165722214"
            className="flex items-center text-lg text-gray-800 transition-colors duration-300 hover:text-yellow-500"
          >
            <Phone className="mr-2 h-4 w-4" /> +7 816 57 2-22-14
          </a>
          <a
            href="mailto:info@okulovka-auto.ru"
            className="flex items-center text-lg text-gray-800 transition-colors duration-300 hover:text-yellow-500"
          >
            <Mail className="mr-2 h-4 w-4" /> info@okulovka-auto.ru
          </a>
          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/79216901975"
              target="_blank"
              className="flex items-center text-lg text-gray-800 transition-colors duration-300 hover:text-yellow-500"
            >
              WhatsApp
            </a>
            <Link
              href="https://vk.com/avtoshkola.okulovka"
              className="flex items-center text-lg text-gray-800 transition-colors duration-300 hover:text-yellow-500"
            >
              ВКонтакте
            </Link>
          </div>
        </div>
      </div>
      <hr className="mt-4 border-4 border-dashed border-gray-700 bg-yellow-400" />
    </header>
  );
}

export default Header;

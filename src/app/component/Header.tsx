import { Mail, Phone } from "lucide-react";
import Link from "next/link";
import Nav from "./Nav";

function Header() {
  return (
    <header>
      <hr className="mb-4 border-4 border-gray-700" />
      <div className="container mx-auto items-center justify-between sm:flex">
        <div className="flex w-full flex-col items-center gap-2 sm:w-1/2 lg:w-2/3">
          <h1 className="w-full text-center text-2xl font-bold text-gray-800">
            Автошкола ООО&nbsp;«Компания АВТО&nbsp;ОНЛАЙН»
          </h1>
          <Nav />
        </div>
        <div className="flex w-full flex-col items-center gap-2 sm:w-1/2 lg:w-1/3">
          <a
            href="tel:+78165722214"
            className="hover:text-primary flex items-center text-lg text-gray-800 transition-colors duration-300"
          >
            <Phone className="mr-2 h-4 w-4" /> +7 816 57 2-22-14
          </a>
          <a
            href="mailto:info@okulovka-auto.ru"
            className="hover:text-primary flex items-center text-lg text-gray-800 transition-colors duration-300"
          >
            <Mail className="mr-2 h-4 w-4" /> info@okulovka-auto.ru
          </a>
          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/79216901975"
              target="_blank"
              className="hover:text-primary flex items-center text-lg text-gray-800 transition-colors duration-300"
            >
              WhatsApp
            </a>
            <Link
              href="https://vk.com/avtoshkola.okulovka"
              className="hover:text-primary flex items-center text-lg text-gray-800 transition-colors duration-300"
            >
              ВКонтакте
            </Link>
          </div>
        </div>
      </div>
      <hr className="bg-primary mt-4 border-4 border-dashed border-gray-700" />
    </header>
  );
}

export default Header;

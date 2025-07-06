import { Mail, MessageCircleMore, Phone } from "lucide-react";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-700">
      <div className="container mx-auto grid gap-4 px-4 py-8 md:grid-cols-3">
        <div className="grid gap-8">
          <div className="grid gap-2">
            <h3 className="text-primary text-lg font-bold tracking-wide uppercase">
              Адрес
            </h3>
            <p className="text-sm text-white">
              Новгородская область, г. Окуловка, ул. Володарского, д. 43
            </p>
          </div>
          <div className="grid gap-2">
            <h3 className="text-primary text-lg font-bold tracking-wide uppercase">
              Контакты
            </h3>
            <a
              href="tel:+78165722214"
              className="hover:text-primary flex items-center gap-2 text-sm text-white transition-colors duration-300"
            >
              <Phone className="h-4 w-4" />
              +7 (81657) 2-22-14
            </a>
            <a
              href="https://wa.me/79216901975"
              target="_blank"
              className="hover:text-primary flex items-center gap-2 text-sm text-white transition-colors duration-300"
            >
              <MessageCircleMore className="h-4 w-4" />
              WhatsApp
            </a>
            <a
              href="mailto:info@okulovka-auto.ru"
              className="hover:text-primary flex items-center gap-2 text-sm text-white transition-colors duration-300"
            >
              <Mail className="h-4 w-4" />
              info@okulovka-auto.ru
            </a>
          </div>
        </div>
        <div className=""></div>
        <div className="grid gap-8">
          <div className="grid gap-2">
            <h3 className="text-primary text-lg font-bold tracking-wide uppercase">
              Время Работы
            </h3>
            <p className="text-sm text-white">Пн. – Пт.: 10:00 – 14:00</p>
            <p className="text-sm text-white">Сб. – Вс.: 10:00 – 15:00</p>
          </div>
          <div className="grid gap-2">
            <h3 className="text-primary text-lg font-bold tracking-wide uppercase">
              Обучение вождению проводится
            </h3>
            <p className="text-sm text-white">Пн. – Вс.: 08:00 – 21:00</p>
          </div>
        </div>
      </div>
      <hr className="bg-primary mt-4 border-4 border-dashed border-gray-700" />
      <p className="bg-primary py-2 text-center">
        &copy; 2008 - {currentYear} Автошкола | OOO Компания &quot;АВТО
        ОНЛАЙН&quot;
      </p>
    </footer>
  );
}

export default Footer;

import { House } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";

function NavPage() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink href="/">
            <House className="h-6 w-6" />
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Документы</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              <NavigationMenuLink>Лицензия</NavigationMenuLink>
              <NavigationMenuLink>Устав</NavigationMenuLink>
              <NavigationMenuLink>Договор</NavigationMenuLink>
              <NavigationMenuLink>Образец свидетельства</NavigationMenuLink>
              <NavigationMenuLink>Учебная программа</NavigationMenuLink>
              <NavigationMenuLink>Режим занятий</NavigationMenuLink>
              <NavigationMenuLink>
                Финансово-хозяйственная деятельность
              </NavigationMenuLink>
              <NavigationMenuLink>
                Отчет по результатам самообследования
              </NavigationMenuLink>
              <NavigationMenuLink>
                Отчет по результатам самообследования образовательной аудитории
              </NavigationMenuLink>
              <NavigationMenuLink>
                Положение об аттестационной комиссии
              </NavigationMenuLink>
              <NavigationMenuLink>
                Положение об образовательном подразделении
              </NavigationMenuLink>
              <NavigationMenuLink>
                Положение об оказании платных образовательных услуг
              </NavigationMenuLink>
              <NavigationMenuLink>
                Договор аренды нежилых помещений
              </NavigationMenuLink>
              <NavigationMenuLink>
                Заключение о соответствии учебно-материальной базы
              </NavigationMenuLink>
              <NavigationMenuLink>
                Акт санитарно-эпидемиологического обследования
              </NavigationMenuLink>
              <NavigationMenuLink>
                Экспертное заключение санитарно-эпидемиологической экспертизы
              </NavigationMenuLink>
              <NavigationMenuLink>
                Санитарно-эпидемиологическое заключение
              </NavigationMenuLink>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Цены</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              <NavigationMenuLink>Цены</NavigationMenuLink>
              <NavigationMenuLink>План обучения</NavigationMenuLink>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Вождение</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              <NavigationMenuLink>График вождения</NavigationMenuLink>
              <NavigationMenuLink>
                План обучения вождению транспортного средства
              </NavigationMenuLink>
              <NavigationMenuLink>Учебные маршруты</NavigationMenuLink>
              <NavigationMenuLink>Закрытая площадка</NavigationMenuLink>
              <NavigationMenuLink>Упражнения</NavigationMenuLink>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Набор в группы</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              <NavigationMenuLink>Набор в группы</NavigationMenuLink>
              <NavigationMenuLink>Расписание занятий</NavigationMenuLink>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>О нас</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              <NavigationMenuLink>О нас</NavigationMenuLink>
              <NavigationMenuLink>Как нас найти</NavigationMenuLink>
              <NavigationMenuLink>
                Структура и органы управления
              </NavigationMenuLink>
              <NavigationMenuLink>Преподавательский состав</NavigationMenuLink>
              <NavigationMenuLink>Руководитель</NavigationMenuLink>
              <NavigationMenuLink>Вопросы и ответы</NavigationMenuLink>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default NavPage;

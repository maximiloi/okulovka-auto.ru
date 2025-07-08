import { House } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";

const menuItems = [
  {
    label: <House className="h-6 w-6" />,
    href: "/",
  },
  {
    label: "Документы",
    children: [
      { label: "Лицензия", href: "/document/license" },
      { label: "Устав", href: "/document/statute" },
      { label: "Образец договора", href: "/document/sample-contract" },
      { label: "Образец свидетельства", href: "/document/sample-certificate" },
      { label: "Учебная программа", href: "/document/training-program" },
      { label: "Режим занятий", href: "/document/class-schedule" },
      // { label: "Финансово-хозяйственная деятельность", href: "/document#" },
      // { label: "Отчет по результатам самообследования", href: "/document#" },
      // {
      //   label:
      //     "Отчет по результатам самообследования образовательной аудитории",
      //   href: "/document#",
      // },
      // { label: "Положение об аттестационной комиссии", href: "/document#" },
      // {
      //   label: "Положение об образовательном подразделении",
      //   href: "/document#",
      // },
      // {
      //   label: "Положение об оказании платных образовательных услуг",
      //   href: "/document#",
      // },
      {
        label: "Договор аренды нежилых помещений",
        href: "/document/contract-lease-non-residential-premises",
      },
      {
        label: "Заключение о соответствии учебно-материальной базы",
        href: "/document/conclusion-conformity-umb",
      },
      {
        label: "Акт санитарно-эпидемиологического обследования",
        href: "/document/act-sanitary-epidemiologic-examination",
      },
      {
        label: "Экспертное заключение санитарно-эпидемиологической экспертизы",
        href: "/document/expert-conclusion-sanitary-epidemiologic-examination",
      },
      {
        label: "Санитарно-эпидемиологическое заключение",
        href: "/document/sanitary-epidemiologic-conclusion",
      },
    ],
  },
  {
    label: "Цены",
    href: "/price",
  },
  {
    label: "Вождение",
    children: [
      { label: "График вождения", href: "/#" },
      { label: "План обучения вождению транспортного средства", href: "/#" },
      { label: "Учебные маршруты", href: "/#" },
      { label: "Закрытая площадка", href: "/#" },
      { label: "Упражнения", href: "/#" },
    ],
  },
  {
    label: "Набор в группы",
    children: [
      { label: "Набор в группы", href: "/#" },
      { label: "Расписание занятий", href: "/#" },
    ],
  },
  {
    label: "О нас",
    children: [
      { label: "О нас", href: "/#" },
      { label: "Как нас найти", href: "/#" },
      { label: "Структура и органы управления", href: "/#" },
      { label: "Преподавательский состав", href: "/#" },
      { label: "Руководитель", href: "/#" },
      { label: "Вопросы и ответы", href: "/#" },
    ],
  },
];

function Nav() {
  return (
    <NavigationMenu className="hidden lg:block">
      <NavigationMenuList>
        {menuItems.map((item, idx) => (
          <NavigationMenuItem key={idx}>
            {"children" in item ? (
              <>
                <NavigationMenuTrigger>{item.label}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {item.children?.map((child, i) => (
                      <NavigationMenuLink key={i} href={child.href}>
                        {child.label}
                      </NavigationMenuLink>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </>
            ) : (
              <NavigationMenuLink href={item.href}>
                {item.label}
              </NavigationMenuLink>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default Nav;

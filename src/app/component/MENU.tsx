import {
  Album,
  BadgeQuestionMark,
  BetweenHorizontalEnd,
  BookA,
  CalendarDays,
  CarFront,
  FileBadge,
  FileText,
  FileWarning,
  House,
  Landmark,
  LibraryBig,
  MapPinCheck,
  MapPinHouse,
  NotebookPen,
  NotebookText,
  Presentation,
  User,
  Users,
} from "lucide-react";

export interface MenuItem {
  title: string | React.ReactNode;
  url: string;
  description?: string;
  icon?: React.ReactNode;
  items?: MenuItem[];
}

export const MENU = [
  {
    title: <House className="text-foreground h-6 w-6" />,
    url: "/",
  },
  {
    title: "Документы",
    url: "#",
    items: [
      {
        title: "Лицензия",
        url: "/document/license",
        description: "Наша лицензия и выписка из реестра",
        icon: <FileBadge className="size-5 shrink-0" />,
      },
      {
        title: "Устав",
        url: "/document/statute",
        description: "Наш устав (15 страниц)",
        icon: <FileWarning className="size-5 shrink-0" />,
      },
      {
        title: "Договор",
        url: "/document/sample-contract",
        description: "Образец нашего договора",
        icon: <FileText className="size-5 shrink-0" />,
      },
      {
        title: "Cвидетельство",
        url: "/document/sample-certificate",
        description: "Образец свидетельства о профессии водителя",
        icon: <Album className="size-5 shrink-0" />,
      },
      {
        title: "Учебная программа",
        url: "/document/training-program",
        description: "Наша учебная программа (очень большой документ)",
        icon: <LibraryBig className="size-5 shrink-0" />,
      },
      {
        title: "Режим занятий",
        url: "/document/class-schedule",
        description: "Можно ознакомится со временем уроков",
        icon: <Presentation className="size-5 shrink-0" />,
      },
      {
        title: "Договор аренды нежилых помещений",
        url: "/document/contract-lease-non-residential-premises",
        description: "Договор на наши обучающие аудитории и офис",
        icon: <Landmark className="size-5 shrink-0" />,
      },
      {
        title: "Заключение о соответствии учебно-материальной базы",
        url: "/document/conclusion-conformity-umb",
        description: "Важный документ",
        icon: <NotebookText className="size-5 shrink-0" />,
      },
      {
        title: "Акт санитарно-эпидемиологического обследования",
        url: "/document/act-sanitary-epidemiologic-examination",
        description: "Важный документ",
        icon: <NotebookText className="size-5 shrink-0" />,
      },
      {
        title: "Экспертное заключение санитарно-эпидемиологической экспертизы",
        url: "/document/expert-conclusion-sanitary-epidemiologic-examination",
        description: "Важный документ",
        icon: <NotebookText className="size-5 shrink-0" />,
      },
      {
        title: "Санитарно-эпидемиологическое заключение",
        url: "/document/sanitary-epidemiologic-conclusion",
        description: "Важный документ",
        icon: <NotebookText className="size-5 shrink-0" />,
      },
      // { title: "Финансово-хозяйственная деятельность", url: "/document#" },
      // { title: "Отчет по результатам самообследования", url: "/document#" },
      // {
      //   title:
      //     "Отчет по результатам самообследования образовательной аудитории",
      //   url: "/document#",
      // },
      // { title: "Положение об аттестационной комиссии", url: "/document#" },
      // {
      //   title: "Положение об образовательном подразделении",
      //   url: "/document#",
      // },
      // {
      //   title: "Положение об оказании платных образовательных услуг",
      //   url: "/document#",
      // },
    ],
  },
  {
    title: "Цены",
    url: "/price",
  },
  {
    title: "Вождение",
    url: "#",
    items: [
      {
        title: "График вождения",
        url: "/driving/schedule",
        description: "График вождения на ближайшее время",
        icon: <BetweenHorizontalEnd className="size-5 shrink-0" />,
      },
      {
        title: "Учебные маршруты",
        url: "/driving/study-routes",
        description: "Разрешенные учебные маршруты",
        icon: <MapPinCheck className="size-5 shrink-0" />,
      },
      {
        title: "Закрытая площадка",
        url: "/driving/autodrome",
        description: "Автодром для уверенного вождения",
        icon: <CarFront className="size-5 shrink-0" />,
      },
      // { title: "План обучения вождению транспортного средства", url: "/#" },
      // { title: "Упражнения", url: "/#" },
    ],
  },
  {
    title: "Набор в группы",
    url: "#",
    items: [
      {
        title: "Набор в группы",
        url: "/enrollment/group",
        description: "Начни путь к получению прав",
        icon: <NotebookPen className="size-5 shrink-0" />,
      },
      {
        title: "Расписание занятий",
        url: "/enrollment/timetable",
        description: "Учебный процесс — чётко и удобно",
        icon: <CalendarDays className="size-5 shrink-0" />,
      },
    ],
  },
  {
    title: "О нас",
    url: "#",
    items: [
      {
        title: "О нас",
        url: "/about/info",
        description: "Надёжная автошкола с опытом",
        icon: <BookA className="size-5 shrink-0" />,
      },
      {
        title: "Как нас найти",
        url: "/about/how-to-find-us",
        description: "Легко и просто",
        icon: <MapPinHouse className="size-5 shrink-0" />,
      },
      {
        title: "Вопросы и ответы",
        url: "/about/faq",
        description: "Часто задаваемые вопросы и ответы",
        icon: <BadgeQuestionMark className="size-5 shrink-0" />,
      },
      {
        title: "Преподавательский состав",
        url: "/about/teaching",
        description: "Опытные преподаватели и инструкторы автошколы",
        icon: <Users className="size-5 shrink-0" />,
      },
      {
        title: "Руководитель",
        url: "/about/director",
        description: "Руководство автошколы и контакты",
        icon: <User className="size-5 shrink-0" />,
      },
      // {
      //   title: "Структура и органы управления",
      //   url: "/#",
      //   description: "Учебный процесс — чётко и удобно",
      //   icon: <CalendarDays className="size-5 shrink-0" />,
      // },
    ],
  },
];

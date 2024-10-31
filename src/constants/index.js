import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  starbucks,
  tesla,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Web Space",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Март 2023 - Май 2024",
    points: [
      "Разработка web интерфейсов по дизайну figma",
      "Работа со state management в ReactJS",
      "Работа на Next Js с использованием React",
      "Разработка личного дизайна в web\приложениях",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "AirBit",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Ноябрь 2022 - Февраль 2023",
    points: [
      "Работа с API сервера для добавления новых интернет вещей",
      "Создание мобильного приложения для добавления интернет вещей",
      "Написание документации для api на swagger",
    ],
  }
];

const testimonials = [
  {
    testimonial:
      "Вся работа выполнена и сдана точно в срок. Работа выполнена с использованием последних технологий и красивым дизайном.",
    name: "kazakovaa830",
    designation: "Заказчик",
    company: "Kwork",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Хочу выразить благодарность за проделанную работу над сайтом. Всё выполнено с вниманием к деталям, структура логична и понятна для пользователей. Визуальная часть также выглядит привлекательно и соответствует задачам.",
    name: "Nicola_Wo",
    designation: "Заказчик",
    company: "Kwork",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
];

const projects = [
  {
    name: "ARBIT",
    description:
      "Платформа где люди могут обучаться тому как правильно заниматься арбитрожом криптовалюты. На данной платфомре вы сможете не просто прочитать сырую документацию, но так же получить большой практический опыт в арбитраже.",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "Parcel",
        color: "green-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Автоматизация",
    description:
      "Платформа создовалась для автоматизации различных предприятий. В данном web-приложении есть все, что нужно предприятиям для упрощения работы: планировать поставки товара на склады, вести учет товаров, а так же следить за доходом сотрудников.",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "NextJS",
        color: "green-text-gradient",
      },
      {
        name: "SCSS",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Polittehnolog",
    description:
      "Сайт создовался по спецзаказу, депутату Челябинска Марселю Хазиеву, который хотел научить людей правильно входить в политическую жизнь госсударства. На сайте представленно подробное описание обучения с Марселем Хазиевым.",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "Parcel",
        color: "green-text-gradient",
      },
      {
        name: "Css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };

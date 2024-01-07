type Menu = {
  id: number;
  title: string;
  path?: string;
  newTab: boolean;
  submenu?: Menu[];
};

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 5,
    title: "Аккорды",
    path: "/accords",
    newTab: false,
  },
  {
    id: 33,
    title: "Новости",
    path: "/news",
    newTab: false,
  },
  {
    id: 3,
    title: "Биография",
    path: "/biography",
    newTab: false,
  },
  {
    id: 4,
    title: "Список аккордов",
    path: "/oboznachenie-akkordov",
    newTab: false,
  },
  {
    id: 5,
    title: "Настройка гитары",
    path: "/nastroyka-gitaryi",
    newTab: false,
  },
  {
    id: 6,
    title: "Фильмы",
    path: "/films",
    newTab: false,
  },
  /*  {
    id: 4,
    title: "Pages",
    newTab: false,
    submenu: [
      {
        id: 42,
        title: "Contact Page",
        path: "/contact",
        newTab: false,
      },
      {
        id: 43,
        title: "Blog Grid Page",
        path: "/blog",
        newTab: false,
      },
    ],
  },
*/
];
export default menuData;

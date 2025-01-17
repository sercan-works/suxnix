interface MenuItem {
   id: number;
   page: string;
   title: string;
   link: string;
   has_dropdown: boolean;
   sub_menus?: {
      link: string;
      title: string;
   }[];
}[];

const menu_data: MenuItem[] = [

   // for header one

   // {
   //    id: 1,
   //    page: "header_1",
   //    has_dropdown: true,
   //    title: "",
   //    link: "/",
   //    sub_menus: [
   //       { link: "/", title: "Home One" },
   //       { link: "/home-two", title: "Home Two" },
   //    ],
   // },
   {
      id: 2,
      page: "header_1",
      has_dropdown: false,
      title: "Healy Nedir?",
      link: "/healy-nedir",
   },
   {
      id: 3,
      page: "header_1",
      has_dropdown: false,
      title: "Cihazlarımız",
      link: "/healy-cihazlar",
   },
   {
      id: 10,
      page: "header_1",
      has_dropdown: false,
      title: "Aura'ya Sor",
      link: "/aura",
   },
   {
      id: 4,
      page: "header_1",
      has_dropdown: false,
      title: "Healy Programları",
      link: "/healy-programlar",
   },
   // {
   //    id: 5,
   //    page: "header_1",
   //    has_dropdown: false,
   //    title: "Healy  Docs",
   //    link: "/pricing",
   // },
   // {
   //    id: 6,
   //    page: "header_1",
   //    has_dropdown: true,
   //    title: "Shop",
   //    link: "/shop",
   //    sub_menus: [
   //       { link: "/shop", title: "Our Shop" },
   //       { link: "/shop-details", title: "Shop-Details" },
   //       { link: "/cart", title: "Cart" },
   //       { link: "/checkout", title: "Checkout" },
   //       { link: "/register", title: "Register" },
   //       { link: "/login", title: "Login" },
   //       { link: "/forgot", title: "Reset Password" },
   //       { link: "/not-found", title: "404" },
   //    ],
   // },
   // {
   //    id: 7,
   //    page: "header_1",
   //    has_dropdown: true,
   //    title: "Blog",
   //    link: "/blog",
   //    // sub_menus: [
   //    //    { link: "/blog", title: "Our Blog" },
   //    //    { link: "/blog-details", title: "Blog-Details", },
   //    // ],
   // },
   {
      id: 5,
      page: "header_1",
      has_dropdown: false,
      title: "Ücretsiz Analiz",
      link: "/analiz",
   },
   {
      id: 8,
      page: "header_1",
      has_dropdown: false,
      title: "İletişim",
      link: "/iletisim",
   },

   // for header Two

   {
      id: 1,
      page: "header_2",
      has_dropdown: true,
      title: "Home",
      link: "/",
      sub_menus: [
         { link: "/", title: "Home One" },
         { link: "/home-two", title: "Home Two" },
      ],
   },
   {
      id: 2,
      page: "header_2",
      has_dropdown: false,
      title: "Ingredient",
      link: "/ingredient-two",
   },
   {
      id: 3,
      page: "header_2",
      has_dropdown: false,
      title: "Supplement",
      link: "/supplement",
   },
   {
      id: 4,
      page: "header_2",
      has_dropdown: false,
      title: "Feature",
      link: "/healy-nedir",
   },
   {
      id: 5,
      page: "header_2",
      has_dropdown: true,
      title: "Shop",
      link: "/shop",
      sub_menus: [
         { link: "/shop", title: "Healy Shop" },
         { link: "/shop-details", title: "Shop-Details" },
         { link: "/cart", title: "Cart" },
         { link: "/checkout", title: "Checkout" },
         { link: "/register", title: "Register" },
         { link: "/login", title: "Login" },
         { link: "/forgot", title: "Reset Password" },
         { link: "/not-found", title: "404" },
      ],
   },
   {
      id: 6,
      page: "header_2",
      has_dropdown: true,
      title: "News",
      link: "/blog",
      sub_menus: [
         { link: "/blog", title: "Our Blog" },
         { link: "/blog-details", title: "Blog-Details", },
      ],
   },
   {
      id: 7,
      page: "header_2",
      has_dropdown: false,
      title: "Contact",
      link: "/iletisim",
   },
];
export default menu_data;
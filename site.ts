// since `.js, .ts` files are not included by default,
// the following comment tells UnoCSS to force scan this file (to pick the logo icon).
// @unocss-include

export default {
  name: 'НеХудожник',
  description: '',
  logo: 'i-fluent-emoji:shopping-bags',
  author: 'Zankov',
  defaultLocale: 'ru', // default
  identity: {
    type: 'Organization',
  } as any,
  trailingSlash: false, // default
  titleSeparator: '|', // default
  nav: [
    { text: 'Главная', link: '/', type: 'primary', icon: 'i-mdi-home' },
    {
      text: 'Картины',
      link: '/market',
      type: 'primary'
    },
    {
      text: 'О нас',
      link: '/about-us',
      type: 'primary',
      icon: 'i-mdi-home',
    },
    {
      text: 'Корзина',
      link: '/app-cart',
      type: 'secondary',
      icon: 'i-material-symbols-shopping-bag-outline',
    },
    {
      text: 'Избранное',
      link: '/app-favorite',
      type: 'secondary',
      icon: 'i-material-symbols-favorite-outline',
    },
    {
      text: 'Следи за заказом',
      link: '/track-order',
      type: 'secondary',
      icon: 'i-ic-outline-my-location',
    },
    {
      text: 'История заказов',
      link: '/order-history',
      type: 'secondary',
      icon: 'i-ic-baseline-history',
    },
    {
      text: 'Политика Доставки',
      link: '/delivery-policy',
      type: 'secondary',
      icon: 'i-tabler-truck-return',
    },
    {
      text: 'Свяжись с нами',
      link: '/contact-us',
      type: 'secondary',
      icon: 'i-material-symbols-add-call',
    },
    // {
    //   text: 'Помощь',
    //   link: '/help-faqs',
    //   type: 'secondary',
    //   icon: 'i-material-symbols-contact-support-outline',
    // },
  ],
}

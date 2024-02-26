export default {
  head: {
    title: 'Mobicult-cards',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto&display=swap' }
    ],
  },
  css: [
    '~/assets/css/main.scss'
  ],
  plugins: ['~/plugins/cardsStore.client.js'],
  components: {
    dirs: [
      '~/components',
      '~/components/ui'
    ]
  },
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/stylelint-module',
  ],
  modules: [],
  build: {},
}

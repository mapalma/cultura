const pkg = require('./package')
// ./nuxt.config.js
const config = require('./.contentful.json')
const cheerio = require('cheerio')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'Espacio Cultura',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet',  href: 'https://fonts.googleapis.com/css?family=Chivo:400,700,900&display=swap' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '~/assets/css/tailwind.css',
    '~/assets/css/main.scss',
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {src:'~plugins/filters.js'},
    {src:'~plugins/infiniteloading.js', ssr:false},
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    '@nuxtjs/markdownit'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },
  markdownit: {
    injected: true
  },
  styleResources: {
      scss: [
          'assets/css/config.scss',
      ]
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
        
    }
  },
  router: {
    linkActiveClass: 'active-link',
    linkExactActiveClass: 'exact-active-link'
  },
  hooks: {
    'generate:page': page => {
      const doc = cheerio.load(page.html);
      doc(`body script`).remove();
      page.html = doc.html();
    },
  },
  env :{
    CTF_SPACE_ID: config.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: config.CTF_CDA_ACCESS_TOKEN,
    CTF_ENVIRONMENT: config.CTF_ENVIRONMENT
  },
  
}

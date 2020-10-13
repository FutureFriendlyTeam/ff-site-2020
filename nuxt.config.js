const pkg = require('./package')
const axios = require('axios')

const robots = {
  prevent: {
    UserAgent: '*',
    Disallow: '/'
  },
  allow: {
    UserAgent: '*',
    Allow: '/'
  }
}

const metaData = {
  title:
    'Future Friendly (Formerly Mentally Friendly) - Digital service strategy & product delivery.',
  desc:
    'Design & innovation team in Sydney & Canberra – we create digital services that change lives and build a better future.',
  image: ''
}

const defaultMeta = [
  { hid: 'charset', charset: 'utf-8' },
  { hid: 'httpEquiv', httpEquiv: 'X-UA-Compatible', content: 'IE=edge' },
  {
    hid: 'viewport',
    name: 'viewport',
    content: 'width=device-width, initial-scale=1.0'
  },
  { hid: 'description', name: 'description', content: metaData.desc },
  { hid: 'og:title', property: 'og:title', content: metaData.title },
  { hid: 'og:type', property: 'og:type', content: 'website' },
  { hid: 'og:image', property: 'og:image', content: metaData.image },
  { hid: 'og:description', property: 'og:description', content: metaData.desc },
  { hid: 'twitter:card', name: 'twitter:card', content: 'summary' },
  { hid: 'twitter:site', name: 'twitter:site', content: '@mf_says' },
  {
    hid: 'twitter:title',
    name: 'twitter:title',
    content: 'Homepage | Mentally Friendly'
  },
  {
    hid: 'twitter:description',
    name: 'twitter:description',
    content: metaData.desc
  },
  { hid: 'twitter:creator', name: 'twitter:creator', content: '@mf_says' },
  { hid: 'twitter:image', name: 'twitter:image', content: metaData.image }
]

module.exports = {
  mode: 'spa',
  telemetry: false,

  /*
  ** Headers of the page
  */
  head: {
    title: metaData.title,
    meta: defaultMeta,
    htmlAttrs: {
      lang: 'en-us'
    },
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png'
      },
      { rel: 'manifest', href: '/site.webmanifest' },
      {
        rel: 'mask-icon',
        href: '/safari-pinned-tab.svg',
        color: '#ffffff'
      },
      { name: 'msapplication-TileColor', content: '#ffffff' },
      { name: 'theme-color', content: '#ffffff' }
    ],
    script: [
      {
        src:
          '//cdn.polyfill.io/v2/polyfill.js?features=es2017,IntersectionObserver,|gated&flags=gated&unknown=polyfill&callback=onPolyfillsLoad'
      },
      {
        src:
          'https://cdn.jsdelivr.net/gh/nuxodin/ie11CustomProperties@4.1.0/ie11CustomProperties.min.js'
      }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: ['~scss/main.scss'],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: ['@/plugins/plugins.js', '@plugins/vue-lazysizes.client.js'],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/google-analytics',
    'nuxt-compress',
    [
      'storyblok-nuxt',
      {
        accessToken: 'kDWQn9yqch6ilLrLHTt0QAtt',
        cacheProvider: 'memory'
      }
    ]
  ],

  generate: {
    routes: function(callback) {
      const token = `kDWQn9yqch6ilLrLHTt0QAtt`
      const version = 'published'
      let cache_version = 0

      let toIgnore = ['global', 'global/globals', 'articles', 'case-studies']

      // other routes that are not in Storyblok with their slug.
      let routes = [] // adds / directly

      // Load space and receive latest cache version key to improve performance
      axios
        .get(`https://api.storyblok.com/v1/cdn/spaces/me?token=${token}`)
        .then(space_res => {
          // timestamp of latest publish
          cache_version = space_res.data.space.version

          // Call for all Links using the Links API: https://www.storyblok.com/docs/Delivery-Api/Links
          axios
            .get(
              `https://api.storyblok.com/v1/cdn/links?token=${token}&version=${version}&cv=${cache_version}&per_page=100`
            )
            .then(res => {
              Object.keys(res.data.links).forEach(key => {
                if (!toIgnore.includes(res.data.links[key].slug)) {
                  routes.push('/' + res.data.links[key].slug)
                }
              })

              callback(null, routes)
            })
        })
    }
  },

  googleAnalytics: {
    id: 'UA-1790615-74'
  },

  buildModules: ['@aceforth/nuxt-optimized-images'],

  optimizedImages: {
    optimizeImages: true,
    optimizeImagesInDev: true
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */

    extend(
      config,
      {
        isDev,
        isClient,
        loaders: { vue }
      }
    ) {
      if (isClient) {
        vue.transformAssetUrls.img = ['data-src', 'src']
        vue.transformAssetUrls.source = ['data-srcset', 'srcset']
      }
    },

    extend(config, ctx) {
      // Run ESLint on save
      // if (ctx.isDev && ctx.isClient) {
      //   config.module.rules.push({
      //     enforce: 'pre',
      //     test: /\.(js|vue)$/,
      //     loader: 'eslint-loader',
      //     exclude: /(node_modules)/,
      //     options: {
      //       fix: true
      //     }
      //   })
      // }
    }
  }
}

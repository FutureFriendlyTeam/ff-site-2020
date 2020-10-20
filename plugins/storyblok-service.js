import Vue from 'vue'
import StoryblokClient from 'storyblok-js-client'
const ACCESS_TOKEN = 'kDWQn9yqch6ilLrLHTt0QAtt'

const StoryblokService = class {
  constructor() {
    this.client = new StoryblokClient({
      accessToken: ACCESS_TOKEN,
      cache: {
        clear: 'auto',
        type: 'memory'
      }
    })
  }

  loadEditorScript(src, cb) {
    if (document.getElementById('storyblok-javascript-bridge')) {
      return cb()
    }

    var script = document.createElement('script')
    script.async = true
    script.src = src
    script.id = 'storyblok-javascript-bridge'

    script.onerror = function() {
      cb(new Error('Failed to load' + src))
    }

    script.onload = function() {
      window.isInStoryblok = true
      cb()
    }

    document.getElementsByTagName('head')[0].appendChild(script)
  }

  setQuery(query) {
    this.query = query
  }

  getQuery(param) {
    return this.query?.[param]
  }

  isEditorMode() {
    if (this.getQuery('_storyblok')) {
      return true
    }

    if (typeof window !== 'undefined') {
      return window.isInStoryblok
    }

    return false
    // return typeof window === 'undefined' ? false : true
  }

  async initEditor(page) {
    this.setQuery(page.$root.$options.context.query)

    if (typeof window === 'undefined' || !this.isEditorMode()) {
      return
    }

    console.log('is in editor mode')

    if (!window?.storyblok) {
      this.loadEditorScript(
        'https://app.storyblok.com/f/storyblok-latest.js',
        () => {
          this.initEditor(page)
        }
      )
      return
    }

    if (page.$options.asyncData) {
      let data = await page.$options.asyncData(page.$root.$options.context)
      page.$set(page, 'story', { ...{}, ...data.story })
    }

    window.storyblok.init({
      accessToken: ACCESS_TOKEN
    })

    //
    window.storyblok.pingEditor(function() {
      if (storyblok.inEditor) {
        storyblok.enterEditmode()
      }
    })

    window.storyblok.on(['input', 'published', 'change'], event => {
      if (event.action === 'input') {
        if (event.story.id === page.story.id) {
          // Manually calling as $storybridge is buggy AF
          window.storyblok.addComments(event.story.content, event.story.id)
          window.storyblok.resolveRelations(
            event.story,
            [
              'homepage-case-study-list.case_studies',
              'homepage-article-list.articles'
            ],
            data => {
              page.$set(page.story, 'content', { ...{}, ...data })
              page.$root.$emit('layoutUpdate')
            }
          )
        }
      } else {
        window.location.reload()
      }
    })
  }

  get(slug, params) {
    params = params || {}
    //
    if (this.isEditorMode()) {
      params.version = 'draft'
    }
    return this.client.get(slug, params)
    // }
  }
}

export default (context, inject) => {
  // const hello = msg => console.log(`Hello ${msg}!`)

  const storyblok = new StoryblokService()
  inject('storyblok', storyblok)
  // For Nuxt <= 2.12, also add 👇
  context.$storyblok = storyblok
}

// Vue.prototype.$storyapi

// console.log(Storyblok, window)

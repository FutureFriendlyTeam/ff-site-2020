// Using this to bind the storyblok editor instead of vue-storyblok, in order to keep bindings dynamic.

import Vue from 'vue'

export default ({ app: { router } }) => {
  Vue.directive('content-link', {
    // Called only once, when the directive is first bound to the element. This is where you can do one-time setup work.
    bind(el) {
      const navigate = event => {
        const href = event.currentTarget.getAttribute('href')
        if (href && href[0] === '/') {
          event.preventDefault()
          router.push(href)
        }
      }

      el.links = el.getElementsByTagName('a')

      const addListeners = links => {
        for (let i = 0; i < links.length; i++) {
          links[i].addEventListener('click', navigate, false)
        }
      }

      const removeListeners = links => {
        for (let i = 0; i < links.length; i++) {
          links[i].removeEventListener('click', navigate, false)
        }
        links = []
      }

      addListeners(el.links)

      el.$componentUpdated = () => {
        removeListeners(el.links)
        el.links = el.getElementsByTagName('a')
        Vue.nextTick(() => addListeners(el.links))
      }

      el.$destroy = () => {
        el.removeEventListener('click', removeListeners(el.links))
      }
    },

    // Called after the containing component’s VNode and the VNodes of its children have updated.
    update: el => el.$componentUpdated(),

    // Called only once, when the directive is unbound from the element.
    unbind: el => el.$destroy()
  })
}

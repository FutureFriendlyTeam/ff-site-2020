// Using this to bind the storyblok editor instead of vue-storyblok, in order to keep bindings dynamic.

import Vue from 'vue'

const addClass = function(el, className) {
  if (el.classList) {
    el.classList.add(className)
  } else if (!new RegExp('\\b' + className + '\\b').test(el.className)) {
    el.className += ' ' + className
  }
}

Vue.directive('storyblok-editable', {
  update: function(el, binding) {
    if (
      typeof binding.value._editable === 'undefined' ||
      binding.value._editable === null
    ) {
      return
    }

    var options = JSON.parse(
      binding.value._editable.replace('<!--#storyblok#', '').replace('-->', '')
    )

    el.setAttribute('data-blok-c', JSON.stringify(options))
    el.setAttribute('data-blok-uid', options.id + '-' + options.uid)

    addClass(el, 'storyblok__outline')
  }
})

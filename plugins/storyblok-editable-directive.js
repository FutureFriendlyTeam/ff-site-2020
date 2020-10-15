// Using this to bind the storyblok editor instead of vue-storyblok, in order to keep bindings dynamic.

import Vue from 'vue'

const addClass = function(el, className) {
  if (el.classList) {
    el.classList.add(className)
  } else if (!new RegExp('\\b' + className + '\\b').test(el.className)) {
    el.className += ' ' + className
  }
}

const updateEditable = function(el, binding) {
  // console.log('directive called', el, binding.value)
  if (
    typeof binding.value._editable === 'undefined' ||
    binding.value._editable === null
  ) {
    // console.log('not editable', binding.value)
    return
  }

  var options = JSON.parse(
    binding.value._editable.replace('<!--#storyblok#', '').replace('-->', '')
  )

  el.setAttribute('data-blok-c', JSON.stringify(options))
  el.setAttribute('data-blok-uid', options.id + '-' + options.uid)

  addClass(el, 'storyblok__outline')
}

Vue.directive('storyblok-editable', {
  bind: function(el, binding) {
    // console.log('bind')
    updateEditable(el, binding)
  },
  inserted: function(el, binding) {
    // console.log('inserted')
    updateEditable(el, binding)
  },
  update: function(el, binding) {
    // console.log('updated')
    updateEditable(el, binding)
  }
})

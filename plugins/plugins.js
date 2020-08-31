import Vue from 'vue'
import Sticky from 'vue-sticky-directive'
import VueWindowSize from 'vue-window-size'
import VueLazyload from 'vue-lazyload'
import Inview from 'vueinview'

import VueLazyLoadVideo from 'vue-lazyload-video'

// Register Components
// LazyVideo & LazyVideoAsGIF
Vue.use(VueLazyLoadVideo)

// import VideoBackground from 'vue-responsive-video-background-player'

// Vue.component('video-background', VideoBackground)
Vue.use(Inview)
// import VueWaypoint from 'vue-waypoint'
import VuePrlx from 'vue-prlx'

// import 'object-fit-images'

// window.addEventListener('load', function(event) {
//   // jarallaxVideo()

//   // jarallax(document.querySelectorAll('.jarallax'), {
//   //   speed: 0.2
//   // })

//   // jarallax(document.querySelectorAll('.jarallax-video'), {
//   //   speed: 0.2,
//   //   videoSrc: 'https://youtu.be/mru3Q5m4lkY'
//   // })
// })

// Vue.use(VueWaypoint)
Vue.use(VueLazyload)
Vue.use(VuePrlx)
Vue.use(VueWindowSize)
Vue.use(Sticky)

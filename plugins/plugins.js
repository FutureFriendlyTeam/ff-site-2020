import Vue from 'vue'
// import Sticky from 'vue-sticky-directive'
import VueWindowSize from 'vue-window-size'
import VueLazyload from 'vue-lazyload'
// import Inview from 'vueinview'

// import VueLazyLoadVideo from 'vue-lazyload-video'

import VueObserveVisibility from 'vue-observe-visibility'

// import VideoBackground from 'vue-responsive-video-background-player'

// Vue.component('video-background', VideoBackground)
// Vue.use(Inview)
// Inview.offset({
//   top: 0,
//   right: 0,
//   bottom: 50,
//   left: 0
// })
// Inview.threshold(0.5)
// import VueWaypoint from 'vue-waypoint'
import VuePrlx from 'vue-prlx'
Vue.use(VueObserveVisibility)

// import VueIntersect from 'vue-intersect-directive'

// Vue.use(VueIntersect)

// Register Components
// LazyVideo & LazyVideoAsGIF
// Vue.use(VueLazyLoadVideo)

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
// Vue.use(Sticky)

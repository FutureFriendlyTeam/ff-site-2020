<template>
  <!-- <div> -->
  <div>
    <header 
      v-if="globals" id="header" class="v-padding-top v-padding-bottom color-background">
      <div class="center-col horizontal">
        <nuxt-link id="logo" to="/" class="horizontal" @click="mobileNavOpen = false">
          <span class="logo-part border-left border-right v-padding-bottom-tiny">Future</span>
          <span class="logo-part border-left border-right v-padding-bottom-tiny">Friendly</span>
        </nuxt-link>

        <div v-if="navType === 'normal'">

          <nav class="nav horizontal between">
            <nuxt-link v-for="item in globals.content.header_links" :key="item._uid" :to="`/${item.link.cached_url}`" class="border-block v-padding-bottom-tiny">{{ item.text }}</nuxt-link>
          </nav>

          <nav id="mobile-nav-button" class="m-half border-block v-padding-bottom-tiny horizontal between">
            <a @click="mobileNavOpen = !mobileNavOpen">{{ mobileNavOpen ? 'Close' : 'Menu' }}</a>
          </nav>

        </div>

        <div v-else-if="navType === 'standalone'">
          <nav class="nav horizontal between">
            <nuxt-link :to="'/'" class="border-block v-padding-bottom-tiny">Visit futurefriendly.team</nuxt-link>
          </nav>
        </div>
      </div>
    </header>



    <transition name="quick-fade" mode="out-in">
      <div v-if="mobileNavOpen" id="mobile-nav">
        <div id="mobile-nav-inner" class="horizontal color-background">
          <nav class="self-end h-padding v-padding-top-big v-padding-bottom xs-full">
            <nuxt-link v-for="item in globals.content.header_links" :key="item._uid" :to="`/${item.link.cached_url}`" class="big v-margin-bottom">{{ item.text }}</nuxt-link>
        </nav></div>
      </div>
    </transition>

  </div>
</template>

<script>
export default {
  name: 'MainHeader',
  data() {
    return {
      mobileNavOpen: false,
      globals: null,
      navType: 'normal'
    }
  },
  watch: {
    $route(to, from) {
      window.setTimeout(() => {
        this.mobileNavOpen = false
      }, 300)
    }
  },
  mounted() {
    this.$root.$on('setNav', e => {
      this.navType = e.navType
    })
  },
  async fetch() {
    return this.$storyblok.get(`cdn/stories/global/globals`).then(res => {
      this.$set(this, 'globals', res.data.story)
    })
  }
}
</script>

<style lang="scss" scoped>
@import '../scss/variables.scss';

#banner {
  background-color: #000;
  color: #fff;
}

#header {
  // position: fixed;
  width: 100%;
  z-index: 9999;

  > .horizontal {
    justify-content: space-between;
  }

  a {
    text-decoration: none;

    &:hover {
      z-index: 1;
    }
  }
}

.nav {
  display: none;
  @media (min-width: $mid) {
    display: flex;
  }

  .nuxt-link-exact-active {
    color: $accent;
    z-index: 1;
  }
}

#mobile-nav-button {
  display: block;
  @media (min-width: $mid) {
    display: none;
  }
}

#mobile-nav {
  z-index: 999;
  position: fixed;
  bottom: 0px;
  left: 0px;
  right: 0px;
  top: 0px;
  background-color: #fff;
  // pointer-events: none;
  // overscroll-behavior: contain;

  a {
    display: block;
    text-align: right;
  }

  .nuxt-link-exact-active {
    color: $accent;
    z-index: 1;
  }
}

#mobile-nav-inner {
  width: 100%;
  height: 100%;
}

.logo-part {
  display: block;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}
</style>

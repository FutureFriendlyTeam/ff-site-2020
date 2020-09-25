<template>
  <div>
    <header 
      id="header" :style="{backgroundColor: backgroundColor}" class="v-padding-top v-padding-bottom color-background" >
      <div class="center-col horizontal">
        <nuxt-link id="logo" to="/" class="horizontal" @click="mobileNavOpen = false">
          <span class="logo-part border-left border-right v-padding-bottom-tiny">Future</span>
          <span class="logo-part border-left border-right v-padding-bottom-tiny">Friendly</span>
        </nuxt-link>

        <nav id="nav" class="m-half border-block v-padding-bottom-tiny horizontal between">
          <nuxt-link to="/us">Who we are</nuxt-link>
          <nuxt-link to="/services">Services</nuxt-link>
          <nuxt-link to="/work">Work</nuxt-link>
          <nuxt-link to="/contact">Contact</nuxt-link>
          <nuxt-link to="/careers">Careers</nuxt-link>
        </nav>


        <nav id="mobile-nav-button" class="m-half border-block v-padding-bottom-tiny horizontal between">
          <a @click="mobileNavOpen = !mobileNavOpen">{{ mobileNavOpen ? 'Close' : 'Menu' }}</a>
        </nav>

      </div>
    </header>

    <div v-if="mobileNavOpen" id="mobile-nav" class=" horizontal" @click="mobileNavOpen = false">
      <nav class="self-end h-padding v-padding-top-big v-padding-bottom xs-full">
        <nuxt-link class="big v-margin-bottom" to="/us">Who we are</nuxt-link>
        <nuxt-link class="big v-margin-bottom" to="/services">Services</nuxt-link>
        <nuxt-link class="big v-margin-bottom" to="/work">Work</nuxt-link>
        <nuxt-link class="big v-margin-bottom" to="/contact">Contact</nuxt-link>
        <nuxt-link class="big v-margin-bottom" to="/careers">Careers</nuxt-link>
      </nav>

    </div>

  </div>
</template>

<script>
export default {
  name: 'MainHeader',
  components: {},
  props: {
    backgroundColor: {
      type: String,
      default: '#ffffff'
    }
  },
  data() {
    return {
      mobileNavOpen: false
    }
  }
}
</script>


<style lang="scss" scoped>
@import '../scss/variables.scss';

#header {
  position: fixed;
  width: 100%;
  z-index: 999;

  > .horizontal {
    justify-content: space-between;
  }

  a {
    text-decoration: none;

    &:hover {
      color: $accent;
    }
  }
}

#nav {
  display: none;
  @media (min-width: $mid) {
    display: flex;
  }
}

#mobile-nav-button {
  display: block;
  @media (min-width: $mid) {
    display: none;
  }
}

#mobile-nav {
  z-index: 998;
  position: fixed;
  bottom: 0px;
  left: 0px;
  right: 0px;
  top: 0px;
  background-color: #fff;

  a {
    display: block;
    text-align: right;
  }
}

.logo-part {
  display: block;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}
</style>

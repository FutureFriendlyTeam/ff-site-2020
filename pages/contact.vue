<template>
  <future-div id="page" :background-color="'extended3Light'">

    <section 
      class="v-padding-top-mega v-padding-bottom-big">
      <div class="center-col">
        <h1 class="mega xs-full s-three-quarters no-margin">Get in touch.</h1>
      </div>
    </section>

    <section>
      <div class="center-col">
        <div class="horizontal">
          <article class="xs-full s-third v-padding-bottom-mega v-margin-bottom border-block">
            <h2 class="v-margin-top-none v-margin-bottom big">General Inquiries</h2>
            <p class="mid no-margin-top"><a href="mailto:hello@futurefriendly.team">hello@futurefriendly.team</a></p>
            <p class="mid">Sydney — +61&nbsp;(02)&nbsp;9360&nbsp;8667</p>
            <p class="mid">Canberra — +61&nbsp;431&nbsp;277&nbsp;652</p>
          </article>

          <article class="xs-full s-third v-padding-bottom-mega v-margin-bottom border-block">
            <h2 class="v-margin-top-none v-margin-bottom big">New Business</h2>
            <p class="mid no-margin-top"><a href="mailto:partnerships@futurefriendly.team">partnerships@futurefriendly.team</a></p>
            <p class="mid">+61&nbsp;(02)&nbsp;9360&nbsp;8667</p>
          </article>

          <article class="xs-full s-third v-padding-bottom-mega v-margin-bottom border-block">
            <h2 class="v-margin-top-none v-margin-bottom big">Media</h2>
            <p class="mid no-margin-top"><a href="mailto:media@futurefriendly.team">media@futurefriendly.team</a></p>
            <p class="mid">+61&nbsp;(02)&nbsp;9360&nbsp;8667</p>
          </article>
        </div>
      </div>
    </section>

    
    <section>
      <div class="center-col">
        <div class="horizontal">

          <article class="border-block xs-full s-half m-half v-padding-bottom-mega v-margin-bottom">
            <future-img :aspect="'three-four'" class="v-margin-bottom multiply" src="contact/sydney.jpg"/>
            <h2 class="big v-margin-top-none v-margin-bottom">Sydney.</h2>
            <p class="body v-margin-top-none">199 Cleveland Street, Redfern, Sydney, NSW, 2016</p>
            <p class="body"><a href="mailto:sydney@futurefriendly.team">sydney@futurefriendly.team</a></p>
            <p class="body">+61&nbsp;(02)&nbsp;9360&nbsp;8667</p>
          </article>

          <article class="border-block xs-full s-half m-half v-padding-bottom-mega v-margin-bottom">
            <future-img :aspect="'three-four'" class="v-margin-bottom multiply" src="contact/canberra.jpg"/>
            <h2 class="big v-margin-top-none v-margin-bottom">Canberra.</h2>
            <p class="body"><a href="mailto:canberra@futurefriendly.team">canberra@futurefriendly.team</a></p>
            <p class="body">+61&nbsp;431&nbsp;277&nbsp;652</p>
          </article>


        </div>
      </div>
    </section>


  </future-div>
</template>

<script>
export default {
  components: {},
  data() {
    return {}
  },

  methods: {}
}
</script>

<style lang="scss" scoped>
@import '../scss/variables.scss';
@import '../scss/borders.scss';

#quote-image {
  @media (min-width: $small) {
    &:after {
      display: none;
    }
  }
}
</style>

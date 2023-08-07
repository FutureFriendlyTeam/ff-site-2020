<template>
  <footer id="footer" class="v-padding-top-big v-padding-bottom-big">
    <div class="center-col horizontal">
      <nav
        v-if="globals"
        class="xs-full s-half v-margin-bottom h-padding-right"
      >
        <p
          v-for="item in globals.content.footer_links"
          :key="item._uid"
          :class="item.secondary ? 'body' : 'mid'"
          class="no-margin-top"
        >
          <span v-if="item.text === 'Newsletter'">
            <a href="#" @click.prevent="active = true">Newsletter</a>
          </span>
          <span v-else>
            <nuxt-link
              v-if="
                item.link.cached_url !== '' && item.link.linktype === 'story'
              "
              :to="`/${item.link.cached_url}`"
              >{{ item.text }}</nuxt-link
            >
            <a
              v-else-if="
                item.link.cached_url !== '' && item.link.linktype !== 'story'
              "
              :href="`${item.link.cached_url}`"
              target="_blank"
              >{{ item.text }}</a
            >
            <span v-else>{{ item.text }}</span>
          </span>
        </p>
      </nav>

      <div class="xs-full s-half horizontal">
        <div class="m-half v-margin-bottom h-padding-right">
          <!-- <p class="no-margin-top body">
            Future Friendly is a certified B-Corp since 2017.
          </p>
          <story-blok-image
            :aspect="'free'"
            :no-scale="false"
            filename="https://a.storyblok.com/f/94997/64x96/fcaf6c4a90/b-corp-logo.png"
            class="flag"
            alt="B-Corp Logo"
          /> -->
        </div>

        <div class="m-half v-margin-bottom h-padding-right">
          <p class="no-margin-top body">
            We acknowledge the Traditional Owners of country throughout
            Australia and recognise their continuing connection to land, waters
            and culture. We pay our respects to their Elders past, present and
            emerging and commit to building a brighter future together.
          </p>

          <p class="no-margin-top body">
            Our studios sit on country of the Gadigal people of the Eora nation
            in Sydney and the Ngunnawal people in Canberra.
          </p>
          <story-blok-image
            :aspect="'free'"
            :no-scale="false"
            filename="https://a.storyblok.com/f/94997/160x96/7956ea89d7/aboriginal-flag.png"
            class="flag"
            alt="B-Corp Logo"
          />
          <!-- <future-img :aspect="'free'" src="shared/aboriginal-flag.svg" class="flag" alt="Australian Aboriginal Flag"/> -->
        </div>
      </div>
    </div>

    <div class="center-col horizontal">
      <div class="xs-sixth">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_3432_833)">
<g clip-path="url(#clip1_3432_833)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.11924 28.344H13.1377V32H0.309082V16.1108H9.40314L11.5312 19.7669H5.12385V22.389H10.9219V25.7219H5.12385L5.11924 28.344ZM21.6732 16.1108L18.9496 21.2949L16.2352 16.1108H10.9173L16.5168 25.7219V32H21.3177V25.7219L26.9173 16.1108H21.6732Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M31.6999 5.91344V0L0 11.4622L31.6999 5.91344Z" fill="#FFE600"/>
</g>
</g>
<defs>
<clipPath id="clip0_3432_833">
<rect width="32" height="32" fill="white"/>
</clipPath>
<clipPath id="clip1_3432_833">
<rect width="31.6999" height="32" fill="white"/>
</clipPath>
</defs>
</svg>


      </div>
      <div class="xs-auto">
        <p class="body">A part of <a href="https://www.ey.com/" target="_blank">EY Business Transformation</a></p>
      </div>
    </div>
  </footer>
</template>

<script>
import DownloadModal from '~/components/DownloadModal.vue'

export default {
  name: 'MainFooter',
  components: {
    DownloadModal,
  },
  data() {
    return {
      globals: null,
      active: false,
    }
  },
  async fetch() {
    return this.$storyblok.get(`cdn/stories/global/globals`).then((res) => {
      this.$set(this, 'globals', res.data.story)
    })
  },
  methods: {
    ToggleModal() {
      this.active = !this.active
    },
  },
}
</script>


<style lang="scss" scoped>
.flag {
  width: 4rem;
}

#footer {
  background-color: #000;
  color: #fff;
}
</style>

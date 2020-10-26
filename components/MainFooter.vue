<template>
  <footer id="footer" class="v-padding-top-big v-padding-bottom-big">
    <div class="center-col horizontal">
      <nav v-if="globals" class="xs-full s-half v-margin-bottom h-padding-right">

        <p v-for="item in globals.content.footer_links" :key="item._uid" :class="item.secondary ? 'body' : 'mid'" class="no-margin-top">
          <nuxt-link v-if="item.link.cached_url !== '' && item.link.linktype === 'story'" :to="`/${item.link.cached_url}`">{{ item.text }}</nuxt-link>
          <a v-else-if="item.link.cached_url !== '' && item.link.linktype === 'url'" :href="`${item.link.cached_url}`" target="_blank">{{ item.text }}</a>
          <span v-else>{{ item.text }}</span>
        </p>

      </nav>

      <div class="xs-full s-half horizontal">
        <div class="m-half v-margin-bottom h-padding-right">
          <p class="no-margin-top body">Future Friendly is a certified B-Corp since 2017.</p>
          <story-blok-image :aspect="'free'" :no-scale="false" filename="https://a.storyblok.com/f/94997/64x96/fcaf6c4a90/b-corp-logo.png" class="flag" alt="B-Corp Logo"/>
        </div>

        <div class="m-half v-margin-bottom h-padding-right">
          <p class="no-margin-top body">We acknowledge the Traditional Owners of country throughout Australia and recognise their continuing connection to land, waters and culture. We pay our respects to their Elders past, present and emerging and commit to building a brighter future together.
          </p>

          <p class="no-margin-top body">Our studios sit on country of the Gadigal people of the Eora nation in Sydney and the Ngunnawal people in Canberra.
          </p>
          <story-blok-image :aspect="'free'" :no-scale="false" filename="https://a.storyblok.com/f/94997/160x96/7956ea89d7/aboriginal-flag.png" class="flag" alt="B-Corp Logo"/>
          <!-- <future-img :aspect="'free'" src="shared/aboriginal-flag.svg" class="flag" alt="Australian Aboriginal Flag"/> -->
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'MainFooter',
  data() {
    return {
      globals: null
    }
  },
  async fetch() {
    return this.$storyblok.get(`cdn/stories/global/globals`).then(res => {
      this.$set(this, 'globals', res.data.story)
    })
  }
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

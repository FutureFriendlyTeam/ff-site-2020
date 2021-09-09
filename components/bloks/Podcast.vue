<template>
  <div v-storyblok-editable="blok" class="page">
    <future-div :background-color="'#5422C4'" :text-color="'#FFFFFF'">
      <div class="center-col">
        <div class="horizontal v-padding-top-mega v-padding-bottom-mega">
          <div class="vertical between xs-full m-half h-padding-right">
            <h1 class="mid v-margin-top-none v-margin-bottom">
              Future Friendly Podcast — Ep. {{ blok.episode }}
            </h1>

            <h2 class="big v-margin-top-none v-margin-bottom">
              {{ blok.title }}
            </h2>

            <div class="v-margin-bottom">
              <a
                :href="blok.spotify_link.cached_url"
                class="mid v-margin-top-none v-margin-bottom-none"
              >
                → Listen on Spotify
              </a>
              <a
                :href="blok.apple_music_link.cached_url"
                class="mid v-margin-top-none v-margin-bottom-none"
              >
                → Listen on Apple Music
              </a>
            </div>
          </div>

          <div class="vertical xs-full m-half" v-if="blok.cover.filename">
            <story-blok-image
              :filename="blok.cover.filename"
              :alt="blok.cover.name"
              aspect="square"
              class="v-margin-bottom xs-full"
            />
          </div>
        </div>
      </div>
    </future-div>

    <future-div :background-color="'#5422C4'" :text-color="'#FFFFFF'">
      <div class="center-col">
        <div class="horizontal center v-padding-bottom-mega">
          <div class="vertical between xs-full m-two-thirds h-padding-right">
            <div class="richtext" v-html="richtext" />
          </div>
        </div>
      </div>
    </future-div>

    <podcast-list :storyId="storyId" />

    <future-div :background-color="'#5422C4'" :text-color="'#FFFFFF'">
      <div class="center-col">
        <div class="horizontal v-padding-bottom-mega">
          <div class="vertical between xs-full m-half h-padding-right">
            <p class="big">
              The Future Friendly Podcast is for people working in organisations
              that deliver everyday products and services and want to make a
              difference.
            </p>

            <a class="big" href="mailto:podcast@futurefriendly.team"
              >→ Get in Touch</a
            >
          </div>
        </div>
      </div>
    </future-div>
  </div>
</template>

<script>
import PodcastList from '~/components/bloks/PodcastList.vue'
export default {
  components: {
    PodcastList,
  },
  props: {
    blok: {
      type: Object,
      default: null,
    },
    storyId: {
      type: Number,
      default: null,
    },
  },
  watch: {
    blok() {
      this.$root.$emit('setNav', {
        navType: 'normal',
      })
    },
  },
  computed: {
    richtext() {
      return this.$storyblok.client.richTextResolver.render(
        this.blok.description
      )
    },
  },
  mounted() {
    this.$root.$emit('setNav', {
      navType: 'normal',
    })
  },
}
</script>

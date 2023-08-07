<template>
  <div v-storyblok-editable="blok" class="page">
    <future-div :background-color="'#5422C4'" :text-color="'#FFFFFF'">
      <div class="center-col">
        <div class="horizontal v-padding-top-big v-padding-bottom-mega">
          <div class="v-padding-bottom-big">
            <h1>Future Friendly Podcast.</h1>
            <!-- <h3>Where to listen</h3> -->

            <!-- <div class="horizontal">
              <a
                href="https://podcasts.apple.com/au/podcast/future-friendly/id1532264513"
                target="_blank"
                rel="noreferrer"
                class="podcast-link horizontal items-center h-padding-right"
              >
                <img
                  :src="applePodcastSource"
                  :data-src="applePodcastSource"
                  alt="Apple Podcasts logo"
                />
                <span>Apple Podcasts</span>
              </a>
              <a
                href="https://open.spotify.com/show/7z5CPhuVlzDMgnTWeVPdmn"
                target="_blank"
                rel="noreferrer"
                class="podcast-link horizontal items-center h-padding-right"
              >
                <img
                  :src="spotifyPodcastSource"
                  :data-src="spotifyPodcastSource"
                  alt="Spotify logo"
                />
                <span>Spotify</span>
              </a>

              <a
                href="https://anchor.fm/s/2ebef824/podcast/rss"
                target="_blank"
                rel="noreferrer"
                class="podcast-link horizontal items-center h-padding-right"
              >
                <img
                  :src="rssPodcastSource"
                  :data-src="rssPodcastSource"
                  class="rss-img"
                  alt="RSS logo"
                />
                <span>RSS Feed</span>
              </a>
            </div> -->
          </div>

          <div class="vertical xs-full m-half h-padding-right">
            <h1 class="mid v-margin-top-none v-margin-bottom">
              Future Friendly Podcast
            </h1>

            <h2 class="big v-margin-top-none v-margin-bottom">
              {{ blok.title }}
            </h2>

            <div class="v-margin-bottom episode-links">
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
                → Listen on Apple Podcasts
              </a>
            </div>
          </div>

          <div v-if="blok.cover.filename" class="vertical xs-full m-half">
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

    <podcast-list :story-id="storyId" />

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
  data: () => {
    return {
      applePodcastSource: require('~/assets/images/podcasts/apple.svg'),
      spotifyPodcastSource: require('~/assets/images/podcasts/spotify.svg'),
      rssPodcastSource: require('~/assets/images/podcasts/rss.svg'),
    }
  },
  computed: {
    richtext() {
      return this.$storyblok.client.richTextResolver.render(
        this.blok.description
      )
    },
  },
  watch: {
    blok() {
      this.$root.$emit('setNav', {
        navType: 'normal',
      })
    },
  },
  mounted() {
    this.$root.$emit('setNav', {
      navType: 'normal',
    })
  },
}
</script>

<style lang="scss" scoped>
@import '../../scss/variables.scss';
.podcast-link {
  text-decoration: none;
  padding-bottom: 1rem;

  img {
    margin-right: 0.75rem;

    &.rss-img {
      width: 38px;
      height: 38px;
      padding: 4px;
      border: solid 0.1rem #fff;
      border-radius: 25%;
    }
  }

  span {
    font-family: 'Plain';
  }

  @media (min-width: $mid) {
    padding-right: 4rem;
  }
}

.episode-links {
  margin-top: auto;
}
</style>

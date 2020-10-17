<template>
  <future-div :background-color="'extended1Light'">

    <section class="v-margin-bottom">
      <div class="center-col">
        <div id="team-list" class="horizontal h-offset-margin-right">
          <team-profile-block
            v-for="(story, i) in team"
            :key="`team-profile-${i}`" 
            :story="story"/>
        </div>
      </div>
    </section>

  </future-div>
</template>

<script>
import TeamProfileBlock from '~/components/TeamProfileBlock.vue'

export default {
  components: {
    TeamProfileBlock
  },
  props: {
    blok: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      team: []
    }
  },
  mounted() {
    this.$fetch()
  },
  async fetch() {
    return this.$storyblok
      .get(`cdn/stories/?starts_with=team/&per_page=100`)
      .then(res => {
        console.log(res)
        this.$set(this, 'team', res.data.stories)
        // console.log(this.links)
      })
  }
}
</script>

<template>
  <future-div>

    <section class="v-margin-bottom">
      <div class="center-col">
        <div id="team-list" class="horizontal h-offset-margin-right">
          <client-block
            v-for="(client, i) in blok.clients"
            :key="`client-${i}`" 
            :client="client"/>
        </div>
      </div>
    </section>

  </future-div>
</template>

<script>
import ClientBlock from '~/components/ClientBlock.vue'

export default {
  components: {
    ClientBlock
  },
  props: {
    blok: {
      type: Object,
      default: null
    }
  }
  // data() {
  //   return {
  //     clients: []
  //   }
  // }
  // mounted() {
  //   this.$fetch()
  // },
  // async fetch() {
  //   return this.$storyblok
  //     .get(`cdn/stories/?starts_with=clients/&per_page=100`)
  //     .then(res => {
  //       console.log(res)
  //       this.$set(this, 'clients', res.data.stories)
  //       // console.log(this.links)
  //     })
  // }
}
</script>

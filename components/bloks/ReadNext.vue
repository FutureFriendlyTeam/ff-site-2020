<template>
  <future-div>

    <section class="v-margin-bottom">
      <div class="center-col">
        <h1>Read next →</h1>
        <!-- <div id="team-list" class="horizontal h-offset-margin-right">
          <client-block
            v-for="(client, i) in blok.client_logos"
            :key="`client-${i}`" 
            :client="client"/>
        </div> -->
      </div>
    </section>

  </future-div>
</template>

<script>
// import ClientBlock from '~/components/ClientBlock.vue'

export default {
  // components: {
  //   ClientBlock
  // },
  props: {
    blok: {
      type: Object,
      default: null
    }
  }
}
</script>

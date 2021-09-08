<template>
  <future-div :background-color="'light'">
    <section class="v-margin-bottom">
      <div class="center-col">
        <div id="team-list" class="horizontal h-offset-margin-right">
          <client-block
            v-for="(client, i) in blok.client_logos"
            :key="`client-${i}`"
            :client="client"
          />
        </div>
      </div>
    </section>
  </future-div>
</template>

<script>
import ClientBlock from '~/components/ClientBlock.vue'

export default {
  components: {
    ClientBlock,
  },
  props: {
    blok: {
      type: Object,
      default: null,
    },
  },
}
</script>

<template>

  <article v-storyblok-editable="client" v-if="client"
           class="team-profile-block h-padding-right xs-third s-quarter m-eighth l-eighth v-margin-bottom v-margin-bottom">
    <story-blok-image :filename="client.filename" :no-scale="true" :alt="client.name" aspect="four-three"/>


  </article>
</template>

<script>
export default {
  name: 'ClientBlock',
  props: {
    client: {
      type: Object,
      default: null
    }
  }
}
</script>

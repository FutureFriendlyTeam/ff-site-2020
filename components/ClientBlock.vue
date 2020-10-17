<template>

  <article v-storyblok-editable="client" v-if="client"
           class="team-profile-block h-padding-right xs-third s-quarter m-sixth l-eigth v-margin-bottom v-margin-bottom">
    <story-blok-image :filename="client.logo.filename" aspect="four-three"/>


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

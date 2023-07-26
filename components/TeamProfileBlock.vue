<template>

  <article v-if="story.content.image"
           :class="story.content.thumbnail_size" 
           class="team-profile-block h-padding-right xs-half s-quarter m-sixth v-margin-bottom v-margin-bottom">
    <story-blok-image :filename="story.content.image.filename" :alt="`Portrait of ${story.name}`" :blend="'multiply'" aspect="square" class="v-margin-bottom-tiny"/>
    <section>
      <h2 class="mini v-margin-top-none v-margin-bottom-none">{{ story.name }}</h2>
      <p class="tiny v-margin-top-none v-margin-bottom-none">{{ story.content.title }}</p>
    </section>

  </article>
</template>

<script>
export default {
  name: 'TeamProfileBlock',
  props: {
    story: {
      type: Object,
      default: null
    }
  },
  mounted(){
    console.log(this.story)
  }
}
</script>

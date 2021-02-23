<template>
  <section id="banner">
    <div class="center-col h-padded horizontal v-center">
      <p class="wrapper-link flex v-padded mid">
        Mentally Friendly is now Future Friendly. <a
          target="_blank"
          href="https://www.linkedin.com/pulse/mentally-friendly-now-future-nick-gower"
        >Read about it here.</a>
      </p>
      <div
        class="v-padded self-center close"
        @click="$emit('close')">
        <a class="wrapper-link text-button mid">×</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "BannerRenamePopup"
}
</script>

<style scoped>
#banner {
    background-color: #000;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    color: #fff;
    overflow: hidden;
    z-index: 999;
}

.mid {
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 1.2;
  letter-spacing: -.01em;
}

.close {
  padding-left: 1rem;
}

.text-button {
    background-color: transparent;
    border: none;
    margin: 0;
    cursor: pointer;
    display: block;
}

.wrapper-link {
  text-decoration: none;
  color: inherit;
}
</style>

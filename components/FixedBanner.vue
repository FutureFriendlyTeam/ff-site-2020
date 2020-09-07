<template>
  <section 
    v-if="showBanner" id="banner">
    <div class="center-col  horizontal v-center">
      <a 
        href="https://www.linkedin.com/pulse/mentally-friendly-now-future-nick-gower"
        target="_blank"
        class="wrapper-link flex v-padded">
        <p class="mid">Mentally Friendly has changed its name to Future Friendly &#8594;</p>
      </a>

      <div class="v-padded close">
        <a 

          class="wrapper-link text-button mid" 
          @click="showBanner = false">
          &times;
        </a>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: 'FixedBanner',
  data() {
    return {
      showBanner: true
    }
  }
}
</script>


<style lang="scss" scoped>
@import '../scss/variables.scss';
#banner {
  background-color: #000;
  position: fixed;
  bottom: 0px;
  left: 0px;
  right: 0px;
  color: #fff;
  overflow: hidden;

  .horizontal {
    justify-content: space-between;
    flex-wrap: nowrap;
  }

  .close {
    padding-left: 1rem;
  }

  .text-button {
    background-color: transparent;
    border: none;
    margin: 0px;
    cursor: pointer;
    display: block;
  }
  z-index: 999;
}
</style>

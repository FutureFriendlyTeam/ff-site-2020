<template>
  <footer id="footer">
    <section class="center-col v-padded"> 
      <div class="s-three-quarters l-full">
        <h1>The future isn’t something you wait for.<br>The future is made today.</h1>
      </div>
    </section>

    <section 
      class="center-col horizontal v-padded">
      <div class="xs-full m-half footer-col">
        <p class=" "><a href="mailto:hello@mentallyfriendly.com">hello@mentallyfriendly.com</a></p>
        <p class=" ">Sydney <br> +61 (02) 9360 8667</p>
        <p class=" ">Canberra <br> +61 431 277 652</p>
      </div>

      <div class="xs-full m-half footer-col">

        <p class=" ">Future Friendly is a certified b-Corp.</p>

        <p class="">We respect and honour Aboriginal and Torres Strait Islander Elders past, present and future.</p>
        <p class="">
          We acknowledge the stories, traditions and living cultures of Aboriginal and Torres Strait Islander peoples on this land and commit to building a brighter future together.
        </p> 
      </div>

    </section>
  </footer>
</template>

<script>
import WipeIn from '~/components/WipeIn.vue'
export default {
  name: 'MainHeader',
  components: {
    WipeIn
  }
}
</script>


<style lang="scss" scoped>
#footer {
  background-color: #cdccc4;

  #callout {
    min-height: 50vh;
  }

  #footerStuff {
    min-height: 50vh;
  }

  .footer-col {
    margin-top: 2rem;
  }
}
</style>

<template>
  <footer 
    id="footer">
    <section 
      id="footer-hero" 
      class="center-col horizontal v-center"> 
      <div class="xs-full s-three-quarters m-two-thirds v-padded">
        <h1>The future isn’t something you wait for.</h1>
        <h1>The future is made today.</h1>
      </div>
    </section>

    <section 
      class="center-col horizontal v-padded">
      <div class="xs-full s-half footer-col v-margin-bottom-small">
        <p class="mid no-margin-top"><a href="mailto:hello@futurefriendly.team">hello@futurefriendly.team</a></p>
        <p class="mid">Sydney <br> +61 (02) 9360 8667</p>
        <p class="mid">Canberra <br> +61 431 277 652</p>
        <p class="mid"><a href="https://au.linkedin.com/company/mentally-friendly" target="_blank">LinkedIn</a></p>
        <p class="mid"><a href="https://www.instagram.com/mentallyfriendly/" target="_blank">Medium</a></p>
        <p class="mid"><a href="https://medium.com/@MentallyFriendly" target="_blank">Instagram</a></p>
      </div>

      <div class="xs-full s-half horizontal">
        <div class="m-half footer-col v-margin-bottom-small">
          <p class="no-margin-top">Future Friendly is a certified b-Corp.</p>
          <future-img :aspect="'free'" src="b-corp.png" class="flag" alt="B-Corp Logo"/>
        </div>

        <div class="m-half footer-col v-margin-bottom-small">
          <p class="no-margin-top">We respect and honour Aboriginal and Torres Strait Islander Elders past, present and future.</p>
          <p class="">
            We acknowledge the stories, traditions and living cultures of Aboriginal and Torres Strait Islander peoples on this land and commit to building a brighter future together.
          </p> 
          <div class="horizontal">
            <future-img :aspect="'free'" src="australian-aboriginal-flag.png" class="flag" alt="Australian Aboriginal Flag"/>
            <future-img :aspect="'free'" src="torres-strait-islander-flag.png" class="flag" alt="Torres Strait Islander Flag"/>
          </div>
        </div>
      </div>
    </section>

    <section class="inverse v-padded">
      <nav class="center-col mini">
        <a href="http://sodaspeaks.com/">We're a proud SODA member </a>
        <span>|</span>
        <a href="https://mentallyfriendly.com/privacy">Privacy policy</a>
      </nav>
    </section>
  </footer>
</template>

<script>
import FutureImg from '~/components/FutureImg.vue'
export default {
  name: 'MainFooter',
  components: {
    FutureImg
  }
}
</script>


<style lang="scss" scoped>
#footer {
  #footer-hero {
    min-height: 75vh;
  }

  .footer-col {
    box-sizing: border-box;
    padding-right: 1rem;
  }

  .flag {
    width: 4.5rem;
    margin-right: 0.5rem;
  }
}

.inverse {
  background-color: #000;
}
</style>

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
        <p class="mid no-margin-top"><a href="mailto:hello@mentallyfriendly.com">hello@mentallyfriendly.com</a></p>
        <p class="mid">Sydney — +61&nbsp;(02)&nbsp;9360&nbsp;8667</p>
        <p class="mid">Canberra — +61&nbsp;431&nbsp;277&nbsp;652</p>
        <p class="mid"><a href="https://www.linkedin.com/company/1061792" target="_blank">LinkedIn</a></p>
        <p class="mid"><a href="https://instagram.com/_futurefriendly" target="_blank">Instagram</a></p>
        <p class="mid"><a href="https://medium.com/mentally-friendly" target="_blank">Medium</a></p>
        <p class="mid"><a href="https://mentallyfriendly.activehosted.com/f/20" target="_blank">Newsletter</a></p>
      </div>

      <div class="xs-full s-half horizontal">
        <div class="m-half footer-col v-margin-bottom-small">
          <p class="no-margin-top">Future Friendly is a certified B-Corp since 2017.</p>
          <future-img :aspect="'free'" src="b-corp.png" class="flag" alt="B-Corp Logo"/>
        </div>

        <div class="m-half footer-col v-margin-bottom-small">
          <p class="no-margin-top">We acknowledge the Traditional Owners of country throughout Australia and recognise their continuing connection to land, waters and culture. We pay our respects to their Elders past, present and emerging and commit to building a brighter future together.
          </p>

          <p class="no-margin-top">Our studios sit on country of the the Gadigal people of the Eora nation in Sydney and the Ngunnawal people in Canberra.
          </p>

          
          <div class="horizontal">
            <future-img :aspect="'free'" src="australian-aboriginal-flag.png" class="flag" alt="Australian Aboriginal Flag"/>
            <!-- <future-img :aspect="'free'" src="torres-strait-islander-flag.png" class="flag" alt="Torres Strait Islander Flag"/> -->
          </div>
        </div>
      </div>
    </section>

    <section class="inverse v-padded">
      <nav class="center-col mini">
        <a href="http://sodaspeaks.com/">We're a proud SODA member </a>
        <span>|</span>
        <a href="https://www.iubenda.com/privacy-policy/82308279">Privacy policy</a>
        <span>|</span>
        <a href="https://www.iubenda.com/terms-and-conditions/82308279">Terms & Conditions</a>
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
    padding-right: 1.5rem;
  }

  .flag {
    width: 4rem;
    margin-right: 0.5rem;
  }
}

.inverse {
  background-color: #000;
}
</style>

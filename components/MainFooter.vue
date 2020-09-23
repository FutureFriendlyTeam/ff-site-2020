<template>
  <footer class="v-padding-top-mega v-padding-bottom-mega">
    <div class="center-col horizontal">
      <div class="xs-full s-half v-margin-bottom h-padding-right">
        <p class="mid no-margin-top"><a href="mailto:hello@futurefriendly.team">hello@futurefriendly.team</a></p>
        <p class="mid">Sydney — +61&nbsp;(02)&nbsp;9360&nbsp;8667</p>
        <p class="mid">Canberra — +61&nbsp;431&nbsp;277&nbsp;652</p>
        <p class="mid"><a href="https://www.linkedin.com/company/1061792" target="_blank">LinkedIn</a></p>
        <p class="mid"><a href="https://instagram.com/_futurefriendly" target="_blank">Instagram</a></p>
        <p class="mid"><a href="https://medium.com/mentally-friendly" target="_blank">Medium</a></p>
        <p class="mid"><a href="https://mentallyfriendly.activehosted.com/f/20" target="_blank">Newsletter</a></p>
        <p class="body"><a href="" target="_blank">Privacy Policy</a></p>
        <p class="body"><a href="" target="_blank">Terms & Conditions</a></p>

      </div>

      <div class="xs-full s-half horizontal">
        <div class="m-half v-margin-bottom h-padding-right">
          <p class="no-margin-top body">Future Friendly is a certified B-Corp since 2017.</p>
          <future-img :aspect="'free'" src="b-corp.png" class="flag" alt="B-Corp Logo"/>
        </div>

        <div class="m-half v-margin-bottom h-padding-right">
          <p class="no-margin-top body">We acknowledge the Traditional Owners of country throughout Australia and recognise their continuing connection to land, waters and culture. We pay our respects to their Elders past, present and emerging and commit to building a brighter future together.
          </p>

          <p class="no-margin-top body">Our studios sit on country of the Gadigal people of the Eora nation in Sydney and the Ngunnawal people in Canberra.
          </p>
          <future-img :aspect="'free'" src="australian-aboriginal-flag.png" class="flag" alt="Australian Aboriginal Flag"/>
        </div>
      </div>
    </div>
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
</style>
